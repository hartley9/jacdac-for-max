const {GamepadReg, GamepadButtons, REPORT_UPDATE} = require('jacdac-ts')
const maxApi = require('max-api');


exports.Gamepad = function(service){


    // DIRECTION
    const directionReg = service.register(GamepadReg.Direction)
    directionReg.on(REPORT_UPDATE, () => {
        const [buttons, x, y] = directionReg.unpackedValue;
        
        let buttonClicked = '';
        
        if (buttons === 0){
            buttonClicked = 'None';
        }
        else if (buttons === GamepadButtons.Up){
            buttonClicked = 'Up'
        } else if (buttons === GamepadButtons.Down){
            buttonClicked = 'Down';
        } else if (buttons === GamepadButtons.Left){
            buttonClicked = 'Left'
        } else if (buttons === GamepadButtons.Right){
            buttonClicked = 'Right';
        } else if (buttons === (GamepadButtons.Up + GamepadButtons.Left)) {
           buttonClicked = 'Up Left'
        } else if (buttons === (GamepadButtons.Up + GamepadButtons.Right)) {
            buttonClicked = 'Up Right'
        } else if (buttons === (GamepadButtons.Down + GamepadButtons.Left)) {
            buttonClicked = 'Down Left'
        } else if (buttons === (GamepadButtons.Down + GamepadButtons.Right)) {
            buttonClicked = 'Down Right'
        } else {
            buttonClicked = 'None'
        } 


        
        maxApi.outlet([service.maxID.toString(), 'direction', buttonClicked.toString(), x.toString(), y.toString()])

        /* maxApi.outlet([service.maxID.toString(), 'buttons', buttons.toString()])
        maxApi.outlet([service.maxID.toString(), 'x', x.toString()])
        maxApi.outlet([service.maxID.toString(), 'y', y.toString()]) */
    })
}