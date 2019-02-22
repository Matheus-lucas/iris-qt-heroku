#include "Controlebomba.h"
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
const String LOCATION = "http://iris-qt.herokuapp.com/";
const String UPLOAD = "upload";
const String DOWNLOAD = "download";

Controlebomba::Controlebomba(int pinledamarelo,int pinledvermelho, int pinsensor,int pinbomba){
    pinMode(pinbomba,OUTPUT);
    pinMode(pinsensor,INPUT);
    pinMode(pinledamarelo,OUTPUT);
    pinMode(pinledvermelho,OUTPUT);
    vermelho=pinledvermelho;
    amarelo=pinledamarelo;
    bomba=pinbomba;
    sensor=pinsensor;
  }

int Controlebomba::tempobomba(String controle){
  const String BOMBA ="\"BOMBA\":";
  if(controle.startsWith("{") && controle.endsWith("}")){

   if(controle.indexOf(BOMBA+"1") > 0){
   ligabomba();
   ligavermelho();
   desligaamarelo();
   }
   else if(controle.indexOf(BOMBA+"0") > 0){
  desligabomba();
  ligaamarelo();
  desligavermelho();
   }
   }
   }

void Controlebomba::desligabomba(){
  digitalWrite(bomba,LOW);
}

void Controlebomba::ligabomba(){
  digitalWrite(bomba,HIGH);
  Serial.println("Ligado");
}

void Controlebomba::ligavermelho(){
  digitalWrite(vermelho,HIGH);
}
void Controlebomba::desligavermelho(){
  digitalWrite(vermelho,LOW);
}

void Controlebomba::ligaamarelo(){
  digitalWrite(amarelo,HIGH);
}
void Controlebomba::desligaamarelo(){
  digitalWrite(amarelo,LOW);
}
void Controlebomba::uploadBOMBA(){
 HTTPClient http;
 http.begin(LOCATION+UPLOAD);
 http.addHeader("Content-Type", "application/json");
 http.POST(JSON_BOMBA());
 http.end();
}

void Controlebomba::uploadUmid(){
 HTTPClient http;
 http.begin(LOCATION+UPLOAD);
 http.addHeader("Content-Type", "application/json");
 http.POST(JSON_UMID());
 http.end();
 }

String Controlebomba::JSON_UMID(){//Escreve o valor que o sensor envia, e manda pra serial como um json
int umid=analogRead(sensor);
 const String UMIDADE = "\"UMIDADE\":";
  String value="\""+String(umid)+"\"";
 return "{" + UMIDADE + value +"}";
 }

 String Controlebomba::downloadWEB(){
 HTTPClient http;
 http.begin(LOCATION+DOWNLOAD);
 http.GET();
 String payload = http.getString();
 http.end();
 return payload;

}
 
 String Controlebomba::JSON_BOMBA(){
     const String BOMBA = "\"BOMBA\":";
     String value="\""+String(digitalRead(bomba))+"\"";
 return "{"+ BOMBA + value +"}";
 }