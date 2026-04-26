"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jd = require('jacdac-ts');
const { Accelerometer } = require('./Accelerometer');
const { ArcadeGamepad } = require('./ArcadeGamepad');
const { Barometer } = require('./Barometer');
const { Button } = require('./Button');
const { Color } = require('./Color');
const { Compass } = require('./Compass');
const { Distance } = require('./Distance');
const { ECO2 } = require('./ECO2');
const { Flex } = require('./Flex');
const { Gamepad } = require('./Gamepad');
const { Gyroscope } = require('./Gyroscope');
const { HeartRate } = require('./HeartRate');
const { Humidity } = require('./Humidity');
const { Illuminance } = require('./Illuminance');
const { LightLevel } = require('./LightLevel');
const { Magnetometer } = require('./Magnetometer');
const { MatrixKeypad } = require('./MatrixKeypad');
const { Motion } = require('./Motion');
const { Potentiometer } = require('./Potentiometer');
const { PulseOximeter } = require('./PulseOximeter');
const { RainGauge } = require('./RainGauge');
const { RealTimeClock } = require('./RealTimeClock');
const { ReflectedLight } = require('./ReflectedLight');
const { RotaryEncoder } = require('./RotaryEncoder');
const { Rover } = require('./Rover');
const { SoilMoisture } = require('./SoilMoisture');
const { SoundLevel } = require('./SoundLevel');
const { SoundSpectrum } = require('./SoundSpectrum');
const { Switch } = require('./Switch');
const { Temperature } = require('./Temperature');
const { Tvoc } = require('./Tvoc');
const { UvIndex } = require('./UvIndex');
const { WaterLevel } = require('./WaterLevel');
const { WeightScale } = require('./WeightScale');
const { WindDirection } = require('./WindDirection');
const { WindSpeed } = require('./WindSpeed');
exports.serviceMap = function (service) {
    if (service.serviceClass === null || service.serviceClass === undefined) {
        return 'SERVICE NOT DEFINED';
    }
    else if (service.serviceClass === 521405449) {
        Accelerometer(service);
    }
    else if (service.serviceClass === 501915758) {
        ArcadeGamepad(service);
    }
    else if (service.serviceClass === 504462570) {
        Barometer(service);
    }
    else if (service.serviceClass === 343122531) {
        Button(service);
    }
    else if (service.serviceClass === 372299111) {
        Color(service);
    }
    else if (service.serviceClass === 364362175) {
        Compass(service);
    }
    else if (service.serviceClass === 337275786) {
        Distance(service);
    }
    else if (service.serviceClass === 379362758) {
        ECO2(service);
    }
    else if (service.serviceClass === 524797638) {
        Flex(service);
    }
    else if (service.serviceClass === 277836886) {
        Gamepad(service);
    }
    else if (service.serviceClass === 505087730) {
        Gyroscope(service);
    }
    else if (service.serviceClass === 376204740) {
        HeartRate(service);
    }
    else if (service.serviceClass === 382210232) {
        Humidity(service);
    }
    else if (service.serviceClass === 510577394) {
        Illuminance(service);
    }
    else if (service.serviceClass === 400333340) {
        LightLevel(service);
    }
    else if (service.serviceClass === 318935176) {
        Magnetometer(service);
    }
    else if (service.serviceClass === 319172040) {
        MatrixKeypad(service);
    }
    else if (service.serviceClass === 293185353) {
        Motion(service);
    }
    else if (service.serviceClass === 522667846) {
        Potentiometer(service);
    }
    else if (service.serviceClass === 280710838) {
        PulseOximeter(service);
    }
    else if (service.serviceClass === 326323349) {
        RainGauge(service);
    }
    else if (service.serviceClass === 445323816) {
        RealTimeClock(service);
    }
    else if (service.serviceClass === 309087410) {
        ReflectedLight(service);
    }
    else if (service.serviceClass === 284830153) {
        RotaryEncoder(service);
    }
    else if (service.serviceClass === 435474539) {
        Rover(service);
    }
    else if (service.serviceClass === 491430835) {
        SoilMoisture(service);
    }
    else if (service.serviceClass === 346888797) {
        SoundLevel(service);
    }
    else if (service.serviceClass === 360365086) {
        SoundSpectrum(service);
    }
    else if (service.serviceClass === 450008066) {
        Switch(service);
    }
    else if (service.serviceClass === 337754823) {
        Temperature(service);
    }
    else if (service.serviceClass === 312849815) {
        Tvoc(service);
    }
    else if (service.serviceClass === 527306128) {
        UvIndex(service);
    }
    else if (service.serviceClass === 343630573) {
        WaterLevel(service);
    }
    else if (service.serviceClass === 525160512) {
        WeightScale(service);
    }
    else if (service.serviceClass === 409725227) {
        WindDirection(service);
    }
    else if (service.serviceClass === 458824639) {
        WindSpeed(service);
    }
};
