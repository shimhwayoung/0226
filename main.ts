radio.onReceivedNumber(function (receivedNumber) {
    이동방향 = receivedNumber
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let 이동방향 = 0
maqueenPlusV2.I2CInit()
radio.setGroup(129)
basic.forever(function () {
    if (이동방향 == 1) {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 10)
    } else if (이동방향 == 2) {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 10)
    } else {
    	
    }
})
