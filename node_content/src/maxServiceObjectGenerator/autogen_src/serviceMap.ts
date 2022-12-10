const jd = require('jacdac-ts');
const {System} = require('./System');
const {Base} = require('./Base');
const {Sensor} = require('./Sensor');
const {Accelerometer} = require('./Accelerometer');
const {ArcadeGamepad} = require('./ArcadeGamepad');
const {ArcadeSound} = require('./ArcadeSound');
const {AzureIotHubHealth} = require('./AzureIotHubHealth');
const {BarcodeReader} = require('./BarcodeReader');
const {Barometer} = require('./Barometer');
const {BitRadio} = require('./BitRadio');
const {Bootloader} = require('./Bootloader');
const {BrailleDisplay} = require('./BrailleDisplay');
const {Bridge} = require('./Bridge');
const {Button} = require('./Button');
const {Buzzer} = require('./Buzzer');
const {CapacitiveButton} = require('./CapacitiveButton');
const {CharacterScreen} = require('./CharacterScreen');
const {CodalMessageBus} = require('./CodalMessageBus');
const {Color} = require('./Color');
const {Compass} = require('./Compass');
const {Control} = require('./Control');
const {Dashboard} = require('./Dashboard');
const {Distance} = require('./Distance');
const {Dmx} = require('./Dmx');
const {DotMatrix} = require('./DotMatrix');
const {ECO2} = require('./ECO2');
const {Flex} = require('./Flex');
const {Gamepad} = require('./Gamepad');
const {Gyroscope} = require('./Gyroscope');
const {HeartRate} = require('./HeartRate');
const {HidKeyboard} = require('./HidKeyboard');
const {HidMouse} = require('./HidMouse');
const {Humidity} = require('./Humidity');
const {Illuminance} = require('./Illuminance');
const {IndexedScreen} = require('./IndexedScreen');
const {Infrastructure} = require('./Infrastructure');
const {Led} = require('./Led');
const {LedPixel} = require('./LedPixel');
const {LightBulb} = require('./LightBulb');
const {LightLevel} = require('./LightLevel');
const {Logger} = require('./Logger');
const {Magnetometer} = require('./Magnetometer');
const {MatrixKeypad} = require('./MatrixKeypad');
const {Microphone} = require('./Microphone');
const {MidiOutput} = require('./MidiOutput');
const {ModelRunner} = require('./ModelRunner');
const {Motion} = require('./Motion');
const {Motor} = require('./Motor');
const {Potentiometer} = require('./Potentiometer');
const {Power} = require('./Power');
const {PressureButton} = require('./PressureButton');
const {ProtoTest} = require('./ProtoTest');
const {Proxy} = require('./Proxy');
const {PulseOximeter} = require('./PulseOximeter');
const {RainGauge} = require('./RainGauge');
const {RealTimeClock} = require('./RealTimeClock');
const {ReflectedLight} = require('./ReflectedLight');
const {Relay} = require('./Relay');
const {Rng} = require('./Rng');
const {RoleManager} = require('./RoleManager');
const {RotaryEncoder} = require('./RotaryEncoder');
const {Rover} = require('./Rover');
const {SensorAggregator} = require('./SensorAggregator');
const {Servo} = require('./Servo');
const {Settings} = require('./Settings');
const {SevenSegmentDisplay} = require('./SevenSegmentDisplay');
const {SoilMoisture} = require('./SoilMoisture');
const {Solenoid} = require('./Solenoid');
const {SoundLevel} = require('./SoundLevel');
const {SoundPlayer} = require('./SoundPlayer');
const {SoundSpectrum} = require('./SoundSpectrum');
const {SpeechSynthesis} = require('./SpeechSynthesis');
const {Switch} = require('./Switch');
const {Tcp} = require('./Tcp');
const {Temperature} = require('./Temperature');
const {TrafficLight} = require('./TrafficLight');
const {Tvoc} = require('./Tvoc');
const {UniqueBrain} = require('./UniqueBrain');
const {UvIndex} = require('./UvIndex');
const {VerifiedTelemetry} = require('./VerifiedTelemetry');
const {VibrationMotor} = require('./VibrationMotor');
const {WaterLevel} = require('./WaterLevel');
const {WeightScale} = require('./WeightScale');
const {Wifi} = require('./Wifi');
const {WindDirection} = require('./WindDirection');
const {WindSpeed} = require('./WindSpeed');


exports.serviceMap = function(service){

        if (service.serviceClass === null || service.serviceClass === undefined){
        return 'SERVICE NOT DEFINED';
        }
        else if (service.serviceClass === 536870897){
            System(service)
        }

        else if (service.serviceClass === 536870899){
            Base(service)
        }

        else if (service.serviceClass === 536870898){
            Sensor(service)
        }

        else if (service.serviceClass === 521405449){
            Accelerometer(service)
        }

        else if (service.serviceClass === 501915758){
            ArcadeGamepad(service)
        }

        else if (service.serviceClass === 533083654){
            ArcadeSound(service)
        }

        else if (service.serviceClass === 342028028){
            AzureIotHubHealth(service)
        }

        else if (service.serviceClass === 477339244){
            BarcodeReader(service)
        }

        else if (service.serviceClass === 504462570){
            Barometer(service)
        }

        else if (service.serviceClass === 449414863){
            BitRadio(service)
        }

        else if (service.serviceClass === 536516936){
            Bootloader(service)
        }

        else if (service.serviceClass === 331331532){
            BrailleDisplay(service)
        }

        else if (service.serviceClass === 535147631){
            Bridge(service)
        }

        else if (service.serviceClass === 343122531){
            Button(service)
        }

        else if (service.serviceClass === 458731991){
            Buzzer(service)
        }

        else if (service.serviceClass === 677752265){
            CapacitiveButton(service)
        }

        else if (service.serviceClass === 523748714){
            CharacterScreen(service)
        }

        else if (service.serviceClass === 304085021){
            CodalMessageBus(service)
        }

        else if (service.serviceClass === 372299111){
            Color(service)
        }

        else if (service.serviceClass === 364362175){
            Compass(service)
        }

        else if (service.serviceClass === 0){
            Control(service)
        }

        else if (service.serviceClass === 468029703){
            Dashboard(service)
        }

        else if (service.serviceClass === 337275786){
            Distance(service)
        }

        else if (service.serviceClass === 298814469){
            Dmx(service)
        }

        else if (service.serviceClass === 286070091){
            DotMatrix(service)
        }

        else if (service.serviceClass === 379362758){
            ECO2(service)
        }

        else if (service.serviceClass === 524797638){
            Flex(service)
        }

        else if (service.serviceClass === 277836886){
            Gamepad(service)
        }

        else if (service.serviceClass === 505087730){
            Gyroscope(service)
        }

        else if (service.serviceClass === 376204740){
            HeartRate(service)
        }

        else if (service.serviceClass === 414210922){
            HidKeyboard(service)
        }

        else if (service.serviceClass === 411425820){
            HidMouse(service)
        }

        else if (service.serviceClass === 382210232){
            Humidity(service)
        }

        else if (service.serviceClass === 510577394){
            Illuminance(service)
        }

        else if (service.serviceClass === 385496805){
            IndexedScreen(service)
        }

        else if (service.serviceClass === 504728043){
            Infrastructure(service)
        }

        else if (service.serviceClass === 506480888){
            Led(service)
        }

        else if (service.serviceClass === 309264608){
            LedPixel(service)
        }

        else if (service.serviceClass === 480970060){
            LightBulb(service)
        }

        else if (service.serviceClass === 400333340){
            LightLevel(service)
        }

        else if (service.serviceClass === 316415946){
            Logger(service)
        }

        else if (service.serviceClass === 318935176){
            Magnetometer(service)
        }

        else if (service.serviceClass === 319172040){
            MatrixKeypad(service)
        }

        else if (service.serviceClass === 289254534){
            Microphone(service)
        }

        else if (service.serviceClass === 444894423){
            MidiOutput(service)
        }

        else if (service.serviceClass === 336566904){
            ModelRunner(service)
        }

        else if (service.serviceClass === 293185353){
            Motion(service)
        }

        else if (service.serviceClass === 385895640){
            Motor(service)
        }

        else if (service.serviceClass === 522667846){
            Potentiometer(service)
        }

        else if (service.serviceClass === 530893146){
            Power(service)
        }

        else if (service.serviceClass === 672612547){
            PressureButton(service)
        }

        else if (service.serviceClass === 382158442){
            ProtoTest(service)
        }

        else if (service.serviceClass === 384932169){
            Proxy(service)
        }

        else if (service.serviceClass === 280710838){
            PulseOximeter(service)
        }

        else if (service.serviceClass === 326323349){
            RainGauge(service)
        }

        else if (service.serviceClass === 445323816){
            RealTimeClock(service)
        }

        else if (service.serviceClass === 309087410){
            ReflectedLight(service)
        }

        else if (service.serviceClass === 406840918){
            Relay(service)
        }

        else if (service.serviceClass === 394916002){
            Rng(service)
        }

        else if (service.serviceClass === 508264038){
            RoleManager(service)
        }

        else if (service.serviceClass === 284830153){
            RotaryEncoder(service)
        }

        else if (service.serviceClass === 435474539){
            Rover(service)
        }

        else if (service.serviceClass === 496034245){
            SensorAggregator(service)
        }

        else if (service.serviceClass === 318542083){
            Servo(service)
        }

        else if (service.serviceClass === 285727818){
            Settings(service)
        }

        else if (service.serviceClass === 425810167){
            SevenSegmentDisplay(service)
        }

        else if (service.serviceClass === 491430835){
            SoilMoisture(service)
        }

        else if (service.serviceClass === 387392458){
            Solenoid(service)
        }

        else if (service.serviceClass === 346888797){
            SoundLevel(service)
        }

        else if (service.serviceClass === 335795000){
            SoundPlayer(service)
        }

        else if (service.serviceClass === 360365086){
            SoundSpectrum(service)
        }

        else if (service.serviceClass === 302307733){
            SpeechSynthesis(service)
        }

        else if (service.serviceClass === 450008066){
            Switch(service)
        }

        else if (service.serviceClass === 457422603){
            Tcp(service)
        }

        else if (service.serviceClass === 337754823){
            Temperature(service)
        }

        else if (service.serviceClass === 365137307){
            TrafficLight(service)
        }

        else if (service.serviceClass === 312849815){
            Tvoc(service)
        }

        else if (service.serviceClass === 272387813){
            UniqueBrain(service)
        }

        else if (service.serviceClass === 527306128){
            UvIndex(service)
        }

        else if (service.serviceClass === 563381279){
            VerifiedTelemetry(service)
        }

        else if (service.serviceClass === 406832290){
            VibrationMotor(service)
        }

        else if (service.serviceClass === 343630573){
            WaterLevel(service)
        }

        else if (service.serviceClass === 525160512){
            WeightScale(service)
        }

        else if (service.serviceClass === 413852154){
            Wifi(service)
        }

        else if (service.serviceClass === 409725227){
            WindDirection(service)
        }

        else if (service.serviceClass === 458824639){
            WindSpeed(service)
        }

}
