// Sistema de riego — JavaScript (Blink Template)

// Pines como NUMEROS
var PIN_HUMEDAD = 0;   // A0
var PIN_TEMP     = 1;   // A1
var PIN_MOTOR    = 2;   // D2

// Umbrales
var UMBRAL_HUMEDAD = 500;
var UMBRAL_TEMP = 15;

function setup() {
    Serial.println("Sistema de riego (JS Blink) iniciado");
    pinMode(PIN_MOTOR, OUTPUT);
    digitalWrite(PIN_MOTOR, LOW);
}

function loop() {

    // Lectura analógica
    var humedad = analogRead(PIN_HUMEDAD);
    var lecturaTemp = analogRead(PIN_TEMP);

    // Conversión TMP36
    var voltaje = lecturaTemp * (5.0 / 1023.0);
    var temperatura = (voltaje - 0.5) * 100;

    // Mostrar valores
    Serial.print("Humedad: ");
    Serial.print(humedad);
    Serial.print(" | Temp: ");
    Serial.println(temperatura);

    // Control del motor
    if (humedad < UMBRAL_HUMEDAD && temperatura > UMBRAL_TEMP) {
        digitalWrite(PIN_MOTOR, HIGH);
        Serial.println("Motor ENCENDIDO");
    } else {
        digitalWrite(PIN_MOTOR, LOW);
        Serial.println("Motor APAGADO");
    }

    delay(1000);
}