#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QtSerialPort/QSerialPort>
#include <QtSerialPort/QSerialPortInfo>

class Ui_ThemeWidgetForm;
namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT
    QSerialPort serial;

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow();
    void populatetimecombobox();
    void populateportacombox();

    void populatevelobox();

private slots:

    void on_btn_desconectar_clicked();

void recebedados();
    void on_btn_irrigar_clicked();

    void on_btn_conectar_clicked();

    void on_pushButton_clicked();
    void atualizastatus();


    void on_btn_desligar_irrigacao_clicked();

private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H
