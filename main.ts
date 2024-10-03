// Setze die RGB-LED zu Beginn auf Gelb, um Bereitschaft zu signalisieren
input.onButtonPressed(Button.A, function () {
    Feuchtigkeit = pins.analogReadPin(AnalogPin.P1)
    if (Feuchtigkeit <= 8) {
        // Blau bei Feuchtigkeit <= 8
        basic.setLedColor(0x0000ff)
    } else if (Feuchtigkeit > 400) {
        // Rot bei Feuchtigkeit > 400
        basic.setLedColor(0xff0000)
    } else {
        // Grün bei Feuchtigkeit zwischen 9 und 400
        basic.setLedColor(0x00ff00)
    }
    // Zeige den Feuchtigkeitswert auf dem Display
    basic.showNumber(Feuchtigkeit)
    basic.pause(2000)
    // Setze die RGB-LED nach 2 Sekunden wieder auf Gelb
    basic.setLedColor(0xffff00)
})
let Feuchtigkeit = 0
// Setze die RGB-LED zu Beginn auf Gelb, um Bereitschaft zu signalisieren
basic.setLedColor(0xffff00)
