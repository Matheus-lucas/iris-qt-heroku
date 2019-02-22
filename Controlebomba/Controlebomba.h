#ifndef Controlebomba_h
#define Controlebomba_h

#include<Arduino.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
class Controlebomba{
  public:
  Controlebomba(int pinledamarelo,int pinledvermelho,int pinsensor,int pinbomba);
  int tempobomba(String controle);
  void ligabomba();
  void desligabomba();
  void ligavermelho();
  void desligavermelho();
  void ligaamarelo();
  void desligaamarelo();
  void uploadUmid();
  void uploadBOMBA();
  String JSON_UMID();
  String JSON_BOMBA();
  String downloadWEB();

  private:
  int vermelho;
  int amarelo;
  int bomba;
  int sensor;
};
#endif