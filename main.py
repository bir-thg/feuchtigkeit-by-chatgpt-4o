# Definiere einen Event-Handler für Button A

def on_button_pressed_a():
    global feuchtigkeit
    # Messe den analogen Wert am Port P1
    feuchtigkeit = pins.analog_read_pin(AnalogPin.P1)
    # Entscheide basierend auf dem Feuchtigkeitswert, welche Farbe die LED haben soll
    if feuchtigkeit <= 8:
        # Blau
        basic.set_led_color(0x0000FF)
    elif feuchtigkeit > 400:
        # Rot
        basic.set_led_color(0xFF0000)
    else:
        # Grün
        basic.set_led_color(0x00FF00)
    # Zeige den Feuchtigkeitswert auf dem Display
    basic.show_number(feuchtigkeit)
    # Warte 2 Sekunden
    basic.pause(2000)
    # Setze die LED wieder auf Gelb
    basic.set_led_color(0xFFFF00)
input.on_button_pressed(Button.A, on_button_pressed_a)

feuchtigkeit = 0
# Setze die LED zu Beginn auf Gelb
basic.set_led_color(0xFFFF00)