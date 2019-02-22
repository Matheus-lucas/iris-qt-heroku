import json

from flask import Flask, render_template, redirect, request
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)
CORS(app)

estado = {
    "BOMBA" : 0
    "UMIDADE" : 0
    }
    
change = 0;

@app.route("/")
def rota_inicial():
    return render_template("IRIS/dashboard.html")
    
    
@app.route("/upload", methods=["POST"])
def rota_data():
    global estado
    estado = request.get_json()
    socketio.emit("atualiza",estado)
    return "200"
    
@app.route("/download", methods=["GET"])
def rota_download():
    global estado
    global change
    if change == 1 :
        change = 0
        return json.dumps(estado)
    return "1";
    
@socketio.on('bomba_ligar')
def bomba_ligar():
    global estado
    global change
    change = 1
    estado["BOMBA"] = 1
    
@socketio.on('bomba_desligar')
def bomba_desligar():
    global estado, change
    change = 1;
    estado["BOMBA"] = 0
    
socket.on(“atualiza”, function(dados) {
    if("UMIDADE" in dados)
        document.getElementById("umid").innerHTML = dados[“UMIDADE”]
    if("BOMBA" in dados)
    if(dados["BOMBA"] == 1)
        document.getElementById("bomba_status").innerHTML = "Ligado"
    else
        document.getElementById("bomba_status").innerHTML = "Desligado"


if __name__ == "__main__":
    app.run("0.0.0.0",port=8080)