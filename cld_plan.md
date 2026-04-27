# Plan: Actuator Support for jacdac-for-max

## Context

Currently jacdac-for-max only supports **sensor** services — devices that produce data (temperature, accelerometer, button, etc.). Data flows one-way: jacdac → node.js → Max MSP. This plan adds support for **actuator** services — devices that receive commands (servo, LED, motor, relay, buzzer, etc.). The data flow is reversed: Max MSP → node.js → jacdac register write.

The jacdac spec uses `service.extends.includes("_actuator")` to identify actuator services, parallel to how `"_sensor"` is used today.

---

## Architecture Overview

### Current (sensor) flow
```
jacdac device
  → node.js: reg.on(REPORT_UPDATE) → maxApi.outlet([id, tag, value])
  → Max: r serviceEvent → route by id → JDServiceXxx subpatch → outlets → user patch
```

### New (actuator) flow
```
user patch → JDServiceXxx subpatch inlets → s toNode → r toNode → node.script inlet
  → node.js: maxApi.addHandler(tag, ([id, value]) => reg.sendSetAsync(value))
  → jacdac device register write
```

---

## Files to Modify

### 1. `node_content/src/max_service_object_generator/generator.ts`

**Add actuator code generation** alongside the existing `_sensor` branch.

- In `generateFiles()`: add `else if (service.extends.includes("_actuator"))` branch
- Add `padActuatorRegister(packet, packetInfo)` function:
  ```ts
  // generates for each rw register:
  const servoReg = service.register(ServoReg.Angle)
  maxApi.addHandler(`${deviceID}_angle`, async (value) => {
      await servoReg.sendSetAsync([parseFloat(value)])
  })
  ```
  The handler tag format is `<deviceID>_<registerName>` so multiple devices don't collide.
- In `generateServiceMapFile()`: add `_actuator` branch parallel to `_sensor`

### 2. `node_content/src/maxpat_generator/maxPatGenerator.ts`

**Add actuator patch generation** in `serviceToMaxObjects()`.

Currently returns `null` for non-sensor services. Add an actuator branch:

- Filter `rw` registers: `service.packets.filter(p => p.kind === 'rw' && !p.derived)`
- Generate Max patch with:
  - **Inlets** (one per `rw` register) instead of outlets
  - `RouteByID` object: `route` on the first inlet slot (device ID) 
  - `prepend` objects to tag outgoing messages with `<deviceID>_<registerName>`
  - `s toNode` send object routing to the node.script

Add `generateInlets(service, rwRegisters)` function returning `{boxes, lines}`.

### 3. `js_objects/createServiceObjects.js`

**Extend the `reference` map** to include actuator service names → `JDServiceXxx` patch names.

Example additions:
```js
"servo" : "JDServiceServo",
"led" : "JDServiceLed",
"motor" : "JDServiceMotor",
"relay" : "JDServiceRelay",
"buzzer" : "JDServiceBuzzer",
"character screen" : "JDServiceCharacterScreen",
```

### 4. `jacdac-for-max.maxpat` (main patch)

**Add the `r toNode` → node.script inlet pathway.**

Currently all traffic flows out of node.script. Need to wire:
- `r toNode` object → node.script's first inlet

This is a one-time manual edit to the main patch (open in Max, add `r toNode`, connect to node.script inlet).

---

## Implementation Order

1. **Prototype manually** — pick `servo` as the first actuator. Hand-write `Servo.ts` in `autogen_src/` and a `JDServiceServo.maxpat`. Wire up the main patch. Verify end-to-end that a value sent into the Max patch moves the servo.

2. **Generalize `generator.ts`** — once the manual version works, add the `_actuator` branch to auto-generate files like `Servo.ts` from the spec.

3. **Generalize `maxPatGenerator.ts`** — add actuator patch generation so `JDServiceServo.maxpat` etc. are auto-generated.

4. **Update `createServiceObjects.js`** — add actuator entries to `reference` map.

5. **Run generators** — `npm run build` / run the generator scripts to produce all actuator files.

---

## Key Design Decisions

### Message routing tag format
Use `<deviceID>_<registerName>` as the `maxApi.addHandler` tag (e.g., `abc123_angle`). The Max patch prepends the device ID before sending to node, so the handler can target the right device instance.

### `s toNode` vs direct connection
Use the `send`/`receive` (`s toNode` / `r toNode`) pattern — consistent with how sensors use `r serviceEvent` for broadcast. Avoids needing direct patch wiring between sub-patches and node.script.

### Type handling
For simple scalar `rw` registers (most actuators): parse incoming Max value as float via `parseFloat()`. Multi-field registers (e.g., RGB color) will need `unpack` objects in the Max patch and array packing on the node side — handle as a follow-on after scalar registers work.

---

## Verification

1. Connect a jacdac servo to the bus
2. Open `jacdac-for-max.maxpat` — the servo's `JDServiceServo` subpatch should auto-spawn
3. Send a float (0–180) into the patch's inlet
4. Confirm the servo physically moves
5. Confirm sending values for two different servo devices routes to the correct one (device ID isolation)
6. Run `generator.ts` and confirm auto-generated `Servo.ts` matches the hand-written version

---

## Relevant Jacdac Actuator Services (from services.json)

Filter: `service.extends.includes("_actuator")` — includes servo, led, motor, relay, buzzer, character screen, reflected light (output mode), and others. Check `node_content/src/max_service_object_generator/services.json` for the full list at implementation time.
