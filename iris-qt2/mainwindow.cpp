#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QtSerialPort>
#include <QSerialPortInfo>
#include <QString>
#include <QJsonDocument>
#include <QJsonObject>


MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{


    ui->setupUi(this);

    /*QPalette pal = qApp->palette();
    pal.setColor(QPalette::Window, QRgb(0x40434a));
    pal.setColor(QPalette::WindowText, QRgb(0xd6d6d6));
    qApp->setPalette(pal);
    */

    populateportacombox();
     recebedados();
    populatevelobox();
    connect(&serial,
    SIGNAL(readyRead()),
    this,
    SLOT(recebedados()));
}

MainWindow::~MainWindow()
{
    delete ui;
}



void MainWindow::populateportacombox()
{
    for(auto& item : QSerialPortInfo::availablePorts())
        ui->portacombobox->addItem(item.portName());
}

void MainWindow::recebedados()
{
     auto data = serial.readAll();
     auto dados = QJsonDocument::fromJson(data).object().toVariantMap();
     qDebug()<<dados["UMIDADE"].toString();
     if(dados.contains("UMIDADE")){
 ui->lbl_umid->setText(dados["UMIDADE"].toString());
 qDebug()<<"entrou";
     }}

void MainWindow::populatevelobox()
{
    for(auto& item : QSerialPortInfo::standardBaudRates())
     ui->velo_box->addItem(QString::number(item) );
}
void MainWindow::on_btn_desconectar_clicked()
{
    serial.write("{\"BOMBA\":0}");
    serial.close();
    ui->status_conexao->setText("Desconectado");
     ui->status_conexao->setFont(QFont("Arial", 9));
    ui->status_conexao->setStyleSheet("QLabel {color : red; }");

}

void MainWindow::on_btn_irrigar_clicked()
{
serial.write("{\"BOMBA\":1}");
ui->status_irrigacao->setText("Irrigando");
}

void MainWindow::on_btn_conectar_clicked()
{
    serial.setPortName(ui->portacombobox->currentText());
       serial.setBaudRate(ui->velo_box->currentText().toInt());
       if(serial.open(QIODevice::ReadWrite)){
        ui->status_conexao->setText("Conectado");
        ui->status_conexao->setFont(QFont("Arial", 9));
        ui->status_conexao->setStyleSheet("QLabel {color : verde; }");
        }
       else{
         ui->status_conexao->setText("Desconectado");
         ui->status_conexao->setFont(QFont("Arial", 9));
         ui->status_conexao->setStyleSheet("QLabel {color : red; }");

       }
}


void MainWindow::on_btn_desligar_irrigacao_clicked()
{
    serial.write("{\"BOMBA\":0}");
    ui->status_irrigacao->setText("Desligada");
    ui->status_irrigacao->setFont(QFont("Arial", 9));
    ui->status_irrigacao->setStyleSheet("QLabel {color : red; }");
}
