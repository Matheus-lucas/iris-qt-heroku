#include <Controlebomba.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
//Variáveis relacionadas ao tempo
const int pin_1=D6;//Pino que liga um led referente a "bomba ligada"
const int pin_2=D7;//Pino que desliga um led referente a "bomba desligada"
const int pinBomba=D5; //Pino que liga ou desliga a bomba
const int sensor_umidade=A0; //Pino referente a leitura do sensor de umidade
const String BOMBA = "\"BOMBA\":";
const String UMIDADE = "\"UMIDADE\":";


const char* SSID = "Matheuslucas";
const char* PASS = "mat12345";
Controlebomba controlebomba(pin_1, pin_2, sensor_umidade, pinBomba); //Construtor da classe

void setup() {
  Serial.begin(9600);
  WiFi.begin(SSID, PASS); //WiFi connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println(" Aguardando conexão");
  }

}

void loop() {

  if (Serial.available() > 0) {
    String comando = Serial.readString();
    controlebomba.tempobomba(comando);
    //controlebomba.uploadBOMBA();
    Serial.println(controlebomba.JSON_BOMBA());
    delay(10);
  }
  controlebomba.tempobomba(controlebomba.downloadWEB());
  controlebomba.uploadBOMBA();
  delay(10);
 controlebomba.uploadUmid();
  Serial.println(controlebomba.JSON_UMID());
  delay(10);
  Serial.println(controlebomba.JSON_BOMBA());
  delay(2000);
}
