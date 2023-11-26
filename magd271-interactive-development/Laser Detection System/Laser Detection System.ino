#include <Adafruit_CircuitPlayground.h>
#include <Adafruit_Circuit_Playground.h>

#define DETECT 2 // pin 2 for Receiver sensor input to Arduino
#define TRANSMIT 13 // pin 13 to turn ON Transmitter
#define ACTION 8 // pin 8 for action relay or alarm
#define ALARM_TIME 400 // time that lights and sound activate for
bool alarmed = false;

void setup() {
  Serial.begin(9600);
  CircuitPlayground.begin();
  Serial.println("Joseph's Laser Module Test");
  pinMode(DETECT, INPUT); // define DETECT input pin
  pinMode(ACTION, OUTPUT); // define ACTION output pin
  pinMode(TRANSMIT, OUTPUT); // defint TRANSMIT output pin
  digitalWrite(TRANSMIT, HIGH); // set TRANSMIT pin HIGH to power TX module
}

void loop() {
  // put your main code here, to run repeatedly:
  if(CircuitPlayground.slideSwitch()) {
    int detected = digitalRead(DETECT); // Read the laser sensor
    if(detected == LOW)
      alarmed = true;
  }
  else {
    if(alarmed)
      reset();
  }

  if(CircuitPlayground.rightButton() || CircuitPlayground.leftButton())
    reset();

  if(alarmed) {
    Serial.println("Intrusion Detected!");
    for(int i = 0; i < 10; i++)
      CircuitPlayground.setPixelColor(i, 255, 0, 0);

    CircuitPlayground.playTone(500, ALARM_TIME, false);

    CircuitPlayground.clearPixels();
    delay(300);
  }
  else {
    Serial.println("===clear===");
  }
}

void reset() {
  Serial.println("Alarm reset");
  alarmed = false;
}
