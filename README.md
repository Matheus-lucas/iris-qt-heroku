# IRIS - QT

## Objetivo

Criar uma interface local e um INterface Web onde o usúario possa ter controle da sua irrigação, e possa monitorar a umidade da planta.

![Novo Repositório no Github](img/g1.png)

##Materiais:

* Esp 8266
* Bomba de água 
* Transistor
* Jumpers
* Sensor de Umidade

##ESP 8266

A esp8266 mostrada abaixo, foi usa para coletar e enviar os dados do sensor de umidade, controlar a bomba e os leds, lendo valroes do Serial para determinar qual ação irá realizar.


![ESP 8266](img/esp.png)

## Mointor Serial

No monitor Serial, são mostrados os valores de umidade lidos, bem como o estado da bomba, sendo 1 o estado ativado, e 0 o estado desativado. Os valores são impressos em formato de Json, para facilitar a comunicação entre as interfaces, e garantir a integridade dos dados.

![Monitor Serial](img/serial.png)
## Aplicação do QTCreator

No QTCreator, foi criada uma aplicação para a informar ao usário a umidade da planta, bem como dar a ele controle de forma local a sua aplicação, fazendo possível que ele ative a bomba a qualquer momento. Através dos botôes ligar e desligar, o usuário tem total controle, sobre o sistema, emitindo os dados de controle na serial, para que a Esp interprete os comandos

![Aplicação QTCreator](imgs/app.png)

## Interface WEB

![Interface WEB](img/site.png)

A interface WEB permite que o usário possa ter controle mesmo a distância, através da internet. Os botôes ligar e desligar emitem comandos para acionar e desativar a bomba, enquanto o estado da bomba é mostrado logo acima.
A umidade por sua vez, é mostrada logo abaixo, ainda em valores que o sensor de Umidade lê.


![Lista de Colaboradores](img/colab4.png)

