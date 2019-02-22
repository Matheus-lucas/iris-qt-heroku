{"filter":false,"title":"main.js","tooltip":"/app/templates/IRIS/js/main.js","undoManager":{"mark":37,"position":37,"stack":[[{"start":{"row":0,"column":0},"end":{"row":196,"column":1},"action":"remove","lines":["// Arquivo responsável para a criação dos gráficos, pegando os valores do .json","","","","// =============================== INICIO SELETORES ==============================","// Gráfico de Barra","const ctxBar = document.getElementById(\"barChart\").getContext('2d')","// Gráfico de Doughnut","const ctxDoughnut = document.querySelector('.canvasDoughnut').getContext('2d')","// Gráfico de Linha1","const ctxLinha1 = document.querySelector(\"#lineGraph1\").getContext('2d')","// Gráfico de Linha2","const ctxLinha2 = document.querySelector(\"#lineGraph2\").getContext('2d')","// =============================== FIM SELETORES ==============================","","","","//--+--+--+--+--+--+--+--+--+--+ INICIO GRÁFICO DE BARRA  --+--+--+--+--+--+--","// Gráfico de Barra - data","//Linkando o arquivo json","fetch('data/bar.json')","  .then(res => res.json())","  .then(json => setBar(json))","","function setBar(stats){","    const dataBar = {","        labels: stats.map(v => v.mes),","        datasets: [{","            label: '# Reais',","            data: stats.map(v => v.valor),","            backgroundColor: [","                'rgba(255, 99, 132, 0.2)',","                'rgba(54, 162, 235, 0.2)',","                'rgba(255, 206, 86, 0.2)',","                'rgba(75, 192, 192, 0.2)',","                'rgba(153, 102, 255, 0.2)',","                'rgba(255, 159, 64, 0.2)',","                'rgba(60, 60, 60, 0.2)',","                'rgba(90, 150, 16, 0.2)'","","            ],","            borderColor: [","                'rgba(255,99,132,1)',","                'rgba(54, 162, 235, 1)',","                'rgba(255, 206, 86, 1)',","                'rgba(75, 192, 192, 1)',","                'rgba(153, 102, 255, 1)',","                'rgba(255, 159, 64, 1)',","                'rgba(60, 60, 60, 1)',","                'rgba(90, 150, 16, 1)'","            ],","            borderWidth: 1","        }]","    }","","    const optionsBar = {","        scales: {","            yAxes: [{","                ticks: {","                    beginAtZero: true","                }","            }]","        }","    }","","    // Gráfico de Barra - config","    const configBar = {","        type: 'bar',","        data: dataBar,","        options: optionsBar","    }","","    const myChart = new Chart(ctxBar, configBar)","}","//--+--+--+--+--+--+--+--+--+--+ FIM GRÁFICO DE BARRA  --+--+--+--+--+--+--","","//Atualiza os gráficos, no arquivo dashboard tem onload=\"animar()\" no body","function animar(){","  // Gráfico de Linha1 - data","  fetch('iris-crud/json/tempo-temperatura.php')","    .then(res => res.json())","    .then(json => setLinha1(json))","","  // Gráfico de Linha2 - data- Umidade","  fetch('iris-crud/json/tempo-umidade.php')","    .then(res => res.json())","    .then(json => setLinha2(json))","}","","//--+--+--+--+--+--+--+--+--+--+ INICIO GRÁFICO DOUGHNUT  --+--+--+--+--+--+--","// Gráfico de Doughnut - data","//Linkando o arquivo json","fetch('iris-crud/json/valor-reservatorio.php')","  .then(res => res.json())","  .then(json => setDoughnut(json))","","function setDoughnut(stats){ //Funciona pq Deus qr--Dentro de uma função para que sejam lidos todos os valores do jason","        const positivo = stats.reservatorio //atribuindo os valores do json","        const negativo = (100 - stats.reservatorio)","        const dataDoughnut = {","            labels: [\"Contém %\", \"Resto %\"], //Legendas do grafico","            datasets: [{","                data: [positivo,negativo], //dados mostrados","                backgroundColor: [\"#9B59B6\", \"#BDC3C7\"],","                hoverBackgroundColor: [\"#B370CF\", \"#CFD4D8\"]","            }]","        }","        const optionsDoughnut = {//Sem legendas","            legend: {","                display: false","            }","        }","","        const configDoughnut = {//Tipo do gráfico e suas configurações","            type: 'doughnut',","            data: dataDoughnut,","            options: optionsDoughnut","        }","        const canvasDoughnut = new Chart(ctxDoughnut, configDoughnut)//Mostrando o gráfico","}//Essa função deve conter os atributos do gráfico doughnut, pois os valores estão contidos nela","//--+--+--+--+--+--+--+--+--+--+ FIM GRÁFICO DOUGHNUT  --+--+--+--+--+--+--","","","","//--+--+--+--+--+--+--+--+--+--+ INICIO GRÁFICO DE LINHA TEMPERATURA--+--+--+--+--+--+--","","//Função para mostrar o gráfico da temperatura","function setLinha1(stats){","","    //const hora = [hora3.length]","    //const hora = data.hora","    const dataLinha1 = {","        labels: stats.map(v => v.tempo),","        datasets: [","            {","                backgroundColor: 'rgba(65, 179, 249, 0.1)',","                borderColor: '#41b3f9',","                data: stats.map(v => v.temperatura)","            }","        ]","    }","    // Gráfico de Linha1 - options","    const optionsLinha1 = {","        maintainAspectRatio: false,","        legend: {","            display: false","        }","    }","    // Gráfico de Linha1 - config","    const configLinha1 = {","        type: 'line',","        data: dataLinha1,","        options: optionsLinha1","    }","    //Mostrar Gráfico da temperatura","    const lineChart1 = new Chart(ctxLinha1, configLinha1)","}","","//--+--+--+--+--+--+--+--+--+--+   FIM GRÁFICO DE LINHA TEMPERATURA--+--+--+--+--+--+--","","","","//--+--+--+--+--+--+--+--+--+--+  INICIO GRÁFICO DE LINHA UMIDADE--+--+--+--+--+--+--+","","//Função para mostrar o gráfico de umidade","function setLinha2(stats){","","    const dataLinha2 = {","        labels: stats.map(v => v.tempo),","        datasets: [","            {","                backgroundColor: 'rgba(65, 179, 249, 0.1)',","                borderColor: '#41b3f9',","                data: stats.map(v => v.umidade)","            }","        ]","    }","","    // Gráfico de Linha1 - options","    const optionsLinha2 = {","        maintainAspectRatio: false,","        legend: {","            display: false","        }","    }","    // Gráfico de Linha1 - config","    const configLinha2 = {","        type: 'line',","        data: dataLinha2,","        options: optionsLinha2","    }","    //Mostrar Gráfico da temperatura","    const lineChart2 = new Chart(ctxLinha2, configLinha2)","","    // Para animar o gráfico sem precisar atualizar a página","    setTimeout(animar, 10000);","}"],"id":2},{"start":{"row":0,"column":0},"end":{"row":37,"column":12},"action":"insert","lines":[" var socket = io.connect('http://iot-2019.herokuapp.com');","            socket.on(\"atualiza\", function(dados) {","                console.log(dados)","                if(\"LDR\" in dados)","                    document.getElementById(\"ldr\").innerHTML = dados[\"LDR\"]","                if(\"LED01\" in dados)","                    if(dados[\"LED01\"] == 1)","                        document.getElementById(\"red_status\").innerHTML = \"Ligado\"","                    else","                        document.getElementById(\"red_status\").innerHTML = \"Desligado\"","                if(\"LED02\" in dados)","                    if(dados[\"LED02\"] == 1)","                        document.getElementById(\"yellow_status\").innerHTML = \"Ligado\"","                    else","                        document.getElementById(\"yellow_status\").innerHTML = \"Desligado\"","                    ","            });","            ","            ","            function ledVermelhoAcender(){","                console.log(\"acender\")","                socket.emit('led_vermelho_acender')","            }","            ","            function ledVermelhoApagar(){","                console.log(\"apagar\")","                socket.emit('led_vermelho_apagar')","            }","            function ledAmareloAcender(){","                console.log(\"acender\")","                socket.emit('led_amarelo_acender')","            }","            ","            function ledAmareloApagar(){","                console.log(\"apagar\")","                socket.emit('led_amarelo_apagar')","            }","            "]}],[{"start":{"row":19,"column":21},"end":{"row":19,"column":38},"action":"remove","lines":["ledVermelhoAcende"],"id":3},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"insert","lines":["b"]},{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"insert","lines":["o"]},{"start":{"row":19,"column":23},"end":{"row":19,"column":24},"action":"insert","lines":["m"]},{"start":{"row":19,"column":24},"end":{"row":19,"column":25},"action":"insert","lines":["b"]},{"start":{"row":19,"column":25},"end":{"row":19,"column":26},"action":"insert","lines":["a"]},{"start":{"row":19,"column":26},"end":{"row":19,"column":27},"action":"insert","lines":["l"]},{"start":{"row":19,"column":27},"end":{"row":19,"column":28},"action":"insert","lines":["i"]}],[{"start":{"row":19,"column":28},"end":{"row":19,"column":29},"action":"insert","lines":["g"],"id":4},{"start":{"row":19,"column":29},"end":{"row":19,"column":30},"action":"insert","lines":["a"]},{"start":{"row":19,"column":30},"end":{"row":19,"column":31},"action":"insert","lines":["r"]}],[{"start":{"row":19,"column":31},"end":{"row":19,"column":32},"action":"remove","lines":["r"],"id":5}],[{"start":{"row":20,"column":29},"end":{"row":20,"column":36},"action":"remove","lines":["acender"],"id":6},{"start":{"row":20,"column":29},"end":{"row":20,"column":30},"action":"insert","lines":["l"]},{"start":{"row":20,"column":30},"end":{"row":20,"column":31},"action":"insert","lines":["i"]},{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"insert","lines":["g"]},{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":["a"]},{"start":{"row":20,"column":33},"end":{"row":20,"column":34},"action":"insert","lines":["r"]}],[{"start":{"row":21,"column":29},"end":{"row":21,"column":49},"action":"remove","lines":["led_vermelho_acender"],"id":7},{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"insert","lines":["b"]},{"start":{"row":21,"column":30},"end":{"row":21,"column":31},"action":"insert","lines":["o"]},{"start":{"row":21,"column":31},"end":{"row":21,"column":32},"action":"insert","lines":["m"]},{"start":{"row":21,"column":32},"end":{"row":21,"column":33},"action":"insert","lines":["b"]},{"start":{"row":21,"column":33},"end":{"row":21,"column":34},"action":"insert","lines":["a"]},{"start":{"row":21,"column":34},"end":{"row":21,"column":35},"action":"insert","lines":["_"]},{"start":{"row":21,"column":35},"end":{"row":21,"column":36},"action":"insert","lines":["l"]},{"start":{"row":21,"column":36},"end":{"row":21,"column":37},"action":"insert","lines":["i"]}],[{"start":{"row":21,"column":37},"end":{"row":21,"column":38},"action":"insert","lines":["g"],"id":8},{"start":{"row":21,"column":38},"end":{"row":21,"column":39},"action":"insert","lines":["a"]},{"start":{"row":21,"column":39},"end":{"row":21,"column":40},"action":"insert","lines":["r"]}],[{"start":{"row":24,"column":21},"end":{"row":24,"column":38},"action":"remove","lines":["ledVermelhoApagar"],"id":9},{"start":{"row":24,"column":21},"end":{"row":24,"column":22},"action":"insert","lines":["b"]},{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"insert","lines":["o"]},{"start":{"row":24,"column":23},"end":{"row":24,"column":24},"action":"insert","lines":["m"]},{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["b"]},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["a"]}],[{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["_"],"id":10},{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["d"]},{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"insert","lines":["e"]},{"start":{"row":24,"column":29},"end":{"row":24,"column":30},"action":"insert","lines":["s"]},{"start":{"row":24,"column":30},"end":{"row":24,"column":31},"action":"insert","lines":["l"]},{"start":{"row":24,"column":31},"end":{"row":24,"column":32},"action":"insert","lines":["i"]},{"start":{"row":24,"column":32},"end":{"row":24,"column":33},"action":"insert","lines":["f"]}],[{"start":{"row":24,"column":32},"end":{"row":24,"column":33},"action":"remove","lines":["f"],"id":11},{"start":{"row":24,"column":31},"end":{"row":24,"column":32},"action":"remove","lines":["i"]},{"start":{"row":24,"column":30},"end":{"row":24,"column":31},"action":"remove","lines":["l"]},{"start":{"row":24,"column":29},"end":{"row":24,"column":30},"action":"remove","lines":["s"]},{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"remove","lines":["e"]},{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"remove","lines":["d"]}],[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["f"],"id":12}],[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"remove","lines":["f"],"id":13}],[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["d"],"id":14},{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"insert","lines":["e"]},{"start":{"row":24,"column":29},"end":{"row":24,"column":30},"action":"insert","lines":["s"]},{"start":{"row":24,"column":30},"end":{"row":24,"column":31},"action":"insert","lines":["l"]},{"start":{"row":24,"column":31},"end":{"row":24,"column":32},"action":"insert","lines":["i"]},{"start":{"row":24,"column":32},"end":{"row":24,"column":33},"action":"insert","lines":["g"]},{"start":{"row":24,"column":33},"end":{"row":24,"column":34},"action":"insert","lines":["a"]},{"start":{"row":24,"column":34},"end":{"row":24,"column":35},"action":"insert","lines":["r"]}],[{"start":{"row":25,"column":29},"end":{"row":25,"column":35},"action":"remove","lines":["apagar"],"id":15},{"start":{"row":25,"column":29},"end":{"row":25,"column":30},"action":"insert","lines":["d"]},{"start":{"row":25,"column":30},"end":{"row":25,"column":31},"action":"insert","lines":["e"]},{"start":{"row":25,"column":31},"end":{"row":25,"column":32},"action":"insert","lines":["s"]},{"start":{"row":25,"column":32},"end":{"row":25,"column":33},"action":"insert","lines":["l"]},{"start":{"row":25,"column":33},"end":{"row":25,"column":34},"action":"insert","lines":["i"]},{"start":{"row":25,"column":34},"end":{"row":25,"column":35},"action":"insert","lines":["g"]},{"start":{"row":25,"column":35},"end":{"row":25,"column":36},"action":"insert","lines":["a"]},{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":["r"]}],[{"start":{"row":26,"column":29},"end":{"row":26,"column":48},"action":"remove","lines":["led_vermelho_apagar"],"id":16},{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"insert","lines":["b"]},{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"insert","lines":["o"]},{"start":{"row":26,"column":31},"end":{"row":26,"column":32},"action":"insert","lines":["m"]},{"start":{"row":26,"column":32},"end":{"row":26,"column":33},"action":"insert","lines":["b"]},{"start":{"row":26,"column":33},"end":{"row":26,"column":34},"action":"insert","lines":["a"]},{"start":{"row":26,"column":34},"end":{"row":26,"column":35},"action":"insert","lines":["_"]},{"start":{"row":26,"column":35},"end":{"row":26,"column":36},"action":"insert","lines":["d"]},{"start":{"row":26,"column":36},"end":{"row":26,"column":37},"action":"insert","lines":["e"]},{"start":{"row":26,"column":37},"end":{"row":26,"column":38},"action":"insert","lines":["s"]},{"start":{"row":26,"column":38},"end":{"row":26,"column":39},"action":"insert","lines":["l"]}],[{"start":{"row":26,"column":39},"end":{"row":26,"column":40},"action":"insert","lines":["i"],"id":17},{"start":{"row":26,"column":40},"end":{"row":26,"column":41},"action":"insert","lines":["g"]},{"start":{"row":26,"column":41},"end":{"row":26,"column":42},"action":"insert","lines":["a"]},{"start":{"row":26,"column":42},"end":{"row":26,"column":43},"action":"insert","lines":["r"]}],[{"start":{"row":28,"column":11},"end":{"row":36,"column":13},"action":"remove","lines":[" function ledAmareloAcender(){","                console.log(\"acender\")","                socket.emit('led_amarelo_acender')","            }","            ","            function ledAmareloApagar(){","                console.log(\"apagar\")","                socket.emit('led_amarelo_apagar')","            }"],"id":18},{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"remove","lines":[" "]},{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"remove","lines":[" "]},{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"remove","lines":[" "]},{"start":{"row":28,"column":4},"end":{"row":28,"column":8},"action":"remove","lines":["    "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":27,"column":13},"end":{"row":28,"column":0},"action":"remove","lines":["",""],"id":19}],[{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"remove","lines":["1"],"id":20},{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"remove","lines":["0"]},{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"remove","lines":["D"]},{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"remove","lines":["E"]},{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"remove","lines":["L"]}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["B"],"id":21},{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["O"]},{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["M"]},{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":["B"]},{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"insert","lines":["A"]}],[{"start":{"row":10,"column":15},"end":{"row":15,"column":20},"action":"remove","lines":[" if(\"LED02\" in dados)","                    if(dados[\"LED02\"] == 1)","                        document.getElementById(\"yellow_status\").innerHTML = \"Ligado\"","                    else","                        document.getElementById(\"yellow_status\").innerHTML = \"Desligado\"","                    "],"id":22},{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"remove","lines":[" "]},{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"remove","lines":[" "]},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"remove","lines":[" "]},{"start":{"row":10,"column":8},"end":{"row":10,"column":12},"action":"remove","lines":["    "]},{"start":{"row":10,"column":4},"end":{"row":10,"column":8},"action":"remove","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "]},{"start":{"row":9,"column":85},"end":{"row":10,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"remove","lines":["R"],"id":23},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"remove","lines":["D"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"remove","lines":["L"]}],[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["B"],"id":24},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["O"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["M"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["B"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["A"]}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"remove","lines":["A"],"id":25},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"remove","lines":["B"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"remove","lines":["M"]},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"remove","lines":["O"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"remove","lines":["B"]}],[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["U"],"id":26},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["M"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["I"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["D"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["A"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["D"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["E"]}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"remove","lines":["1"],"id":27},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"remove","lines":["0"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"remove","lines":["D"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"remove","lines":["E"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["L"]}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["B"],"id":28},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["O"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["M"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["B"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["A"]}],[{"start":{"row":7,"column":80},"end":{"row":7,"column":81},"action":"remove","lines":["o"],"id":29}],[{"start":{"row":7,"column":80},"end":{"row":7,"column":81},"action":"insert","lines":["A"],"id":30}],[{"start":{"row":9,"column":83},"end":{"row":9,"column":84},"action":"remove","lines":["o"],"id":31}],[{"start":{"row":9,"column":83},"end":{"row":9,"column":84},"action":"insert","lines":["A"],"id":32}],[{"start":{"row":12,"column":10},"end":{"row":12,"column":11},"action":"remove","lines":[" "],"id":33},{"start":{"row":12,"column":9},"end":{"row":12,"column":10},"action":"remove","lines":[" "]},{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"remove","lines":[" "]},{"start":{"row":12,"column":4},"end":{"row":12,"column":8},"action":"remove","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":12},"end":{"row":12,"column":1},"action":"remove","lines":[""," "]},{"start":{"row":11,"column":8},"end":{"row":11,"column":12},"action":"remove","lines":["    "]},{"start":{"row":11,"column":4},"end":{"row":11,"column":8},"action":"remove","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":10,"column":15},"end":{"row":11,"column":0},"action":"remove","lines":["",""],"id":34}],[{"start":{"row":0,"column":40},"end":{"row":0,"column":41},"action":"remove","lines":["9"],"id":35},{"start":{"row":0,"column":39},"end":{"row":0,"column":40},"action":"remove","lines":["1"]},{"start":{"row":0,"column":38},"end":{"row":0,"column":39},"action":"remove","lines":["0"]},{"start":{"row":0,"column":37},"end":{"row":0,"column":38},"action":"remove","lines":["2"]},{"start":{"row":0,"column":36},"end":{"row":0,"column":37},"action":"remove","lines":["-"]},{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"remove","lines":["t"]},{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"remove","lines":["o"]},{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"remove","lines":["i"]}],[{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["i"],"id":36},{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":["r"]},{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"insert","lines":["i"]},{"start":{"row":0,"column":36},"end":{"row":0,"column":37},"action":"insert","lines":["s"]},{"start":{"row":0,"column":37},"end":{"row":0,"column":38},"action":"insert","lines":["-"]},{"start":{"row":0,"column":38},"end":{"row":0,"column":39},"action":"insert","lines":["q"]},{"start":{"row":0,"column":39},"end":{"row":0,"column":40},"action":"insert","lines":["t"]}],[{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["_"],"id":37}],[{"start":{"row":0,"column":0},"end":{"row":19,"column":13},"action":"remove","lines":[" var socket = io.connect('http://iris-qt.herokuapp.com');","            socket.on(\"atualiza\", function(dados) {","                console.log(dados)","                if(\"UMIDADE\" in dados)","                    document.getElementById(\"ldr\").innerHTML = dados[\"LDR\"]","                if(\"BOMBA\" in dados)","                    if(dados[\"BOMBA\"] == 1)","                        document.getElementById(\"red_status\").innerHTML = \"LigadA\"","                    else","                        document.getElementById(\"red_status\").innerHTML = \"DesligadA\"","            });","            function bomba_ligar(){","                console.log(\"ligar\")","                socket.emit('bomba_ligar')","            }","            ","            function bomba_desligar(){","                console.log(\"desligar\")","                socket.emit('bomba_desligar')","            }"],"id":38}],[{"start":{"row":0,"column":0},"end":{"row":19,"column":13},"action":"insert","lines":[" var socket = io.connect('http://iris-qt.herokuapp.com');","            socket.on(\"atualiza\", function(dados) {","                console.log(dados)","                if(\"UMIDADE\" in dados)","                    document.getElementById(\"ldr\").innerHTML = dados[\"LDR\"]","                if(\"BOMBA\" in dados)","                    if(dados[\"BOMBA\"] == 1)","                        document.getElementById(\"red_status\").innerHTML = \"LigadA\"","                    else","                        document.getElementById(\"red_status\").innerHTML = \"DesligadA\"","            });","            function bomba_ligar(){","                console.log(\"ligar\")","                socket.emit('bomba_ligar')","            }","            ","            function bomba_desligar(){","                console.log(\"desligar\")","                socket.emit('bomba_desligar')","            }"],"id":39}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":43},"end":{"row":6,"column":43},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1550849559144,"hash":"8dbd5c7969da7c93b536a0bc589cd22635b09061"}