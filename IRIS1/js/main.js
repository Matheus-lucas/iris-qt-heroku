// Arquivo responsável para a criação dos gráficos, pegando os valores do .json



// =============================== INICIO SELETORES ==============================
// Gráfico de Barra
const ctxBar = document.getElementById("barChart").getContext('2d')
// Gráfico de Doughnut
const ctxDoughnut = document.querySelector('.canvasDoughnut').getContext('2d')
// Gráfico de Linha1
const ctxLinha1 = document.querySelector("#lineGraph1").getContext('2d')
// Gráfico de Linha2
const ctxLinha2 = document.querySelector("#lineGraph2").getContext('2d')
// =============================== FIM SELETORES ==============================



//--+--+--+--+--+--+--+--+--+--+ INICIO GRÁFICO DE BARRA  --+--+--+--+--+--+--
// Gráfico de Barra - data
//Linkando o arquivo json
fetch('data/bar.json')
  .then(res => res.json())
  .then(json => setBar(json))

function setBar(stats){
    const dataBar = {
        labels: stats.map(v => v.mes),
        datasets: [{
            label: '# Reais',
            data: stats.map(v => v.valor),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(60, 60, 60, 0.2)',
                'rgba(90, 150, 16, 0.2)'

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(60, 60, 60, 1)',
                'rgba(90, 150, 16, 1)'
            ],
            borderWidth: 1
        }]
    }

    const optionsBar = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    // Gráfico de Barra - config
    const configBar = {
        type: 'bar',
        data: dataBar,
        options: optionsBar
    }

    const myChart = new Chart(ctxBar, configBar)
}
//--+--+--+--+--+--+--+--+--+--+ FIM GRÁFICO DE BARRA  --+--+--+--+--+--+--

//Atualiza os gráficos, no arquivo dashboard tem onload="animar()" no body
function animar(){
  // Gráfico de Linha1 - data
  fetch('iris-crud/json/tempo-temperatura.php')
    .then(res => res.json())
    .then(json => setLinha1(json))

  // Gráfico de Linha2 - data- Umidade
  fetch('iris-crud/json/tempo-umidade.php')
    .then(res => res.json())
    .then(json => setLinha2(json))
}

//--+--+--+--+--+--+--+--+--+--+ INICIO GRÁFICO DOUGHNUT  --+--+--+--+--+--+--
// Gráfico de Doughnut - data
//Linkando o arquivo json
fetch('iris-crud/json/valor-reservatorio.php')
  .then(res => res.json())
  .then(json => setDoughnut(json))

function setDoughnut(stats){ //Funciona pq Deus qr--Dentro de uma função para que sejam lidos todos os valores do jason
        const positivo = stats.reservatorio //atribuindo os valores do json
        const negativo = (100 - stats.reservatorio)
        const dataDoughnut = {
            labels: ["Contém %", "Resto %"], //Legendas do grafico
            datasets: [{
                data: [positivo,negativo], //dados mostrados
                backgroundColor: ["#9B59B6", "#BDC3C7"],
                hoverBackgroundColor: ["#B370CF", "#CFD4D8"]
            }]
        }
        const optionsDoughnut = {//Sem legendas
            legend: {
                display: false
            }
        }

        const configDoughnut = {//Tipo do gráfico e suas configurações
            type: 'doughnut',
            data: dataDoughnut,
            options: optionsDoughnut
        }
        const canvasDoughnut = new Chart(ctxDoughnut, configDoughnut)//Mostrando o gráfico
}//Essa função deve conter os atributos do gráfico doughnut, pois os valores estão contidos nela
//--+--+--+--+--+--+--+--+--+--+ FIM GRÁFICO DOUGHNUT  --+--+--+--+--+--+--



//--+--+--+--+--+--+--+--+--+--+ INICIO GRÁFICO DE LINHA TEMPERATURA--+--+--+--+--+--+--

//Função para mostrar o gráfico da temperatura
function setLinha1(stats){

    //const hora = [hora3.length]
    //const hora = data.hora
    const dataLinha1 = {
        labels: stats.map(v => v.tempo),
        datasets: [
            {
                backgroundColor: 'rgba(65, 179, 249, 0.1)',
                borderColor: '#41b3f9',
                data: stats.map(v => v.temperatura)
            }
        ]
    }
    // Gráfico de Linha1 - options
    const optionsLinha1 = {
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
    // Gráfico de Linha1 - config
    const configLinha1 = {
        type: 'line',
        data: dataLinha1,
        options: optionsLinha1
    }
    //Mostrar Gráfico da temperatura
    const lineChart1 = new Chart(ctxLinha1, configLinha1)
}

//--+--+--+--+--+--+--+--+--+--+   FIM GRÁFICO DE LINHA TEMPERATURA--+--+--+--+--+--+--



//--+--+--+--+--+--+--+--+--+--+  INICIO GRÁFICO DE LINHA UMIDADE--+--+--+--+--+--+--+

//Função para mostrar o gráfico de umidade
function setLinha2(stats){

    const dataLinha2 = {
        labels: stats.map(v => v.tempo),
        datasets: [
            {
                backgroundColor: 'rgba(65, 179, 249, 0.1)',
                borderColor: '#41b3f9',
                data: stats.map(v => v.umidade)
            }
        ]
    }

    // Gráfico de Linha1 - options
    const optionsLinha2 = {
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
    // Gráfico de Linha1 - config
    const configLinha2 = {
        type: 'line',
        data: dataLinha2,
        options: optionsLinha2
    }
    //Mostrar Gráfico da temperatura
    const lineChart2 = new Chart(ctxLinha2, configLinha2)

    // Para animar o gráfico sem precisar atualizar a página
    setTimeout(animar, 10000);
}
//--+--+--+--+--+--+--+--+--+--+  FIM GRÁFICO DE LINHA UMIDADE--+--+--+--+--+--+--+

