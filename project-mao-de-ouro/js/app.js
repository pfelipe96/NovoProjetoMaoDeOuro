var app = angular.module('services', []);

app.controller('MoreSee', function($scope){
    dadosCabelo = [{
        title:"STYLING",
        text:" Escova lisa / Modelada / Difusor / Baby Liss / Piastra / Piastra (Chapinha) / Preparação com Bobbies"
    },
    {
        title:"PENTEADOS",
        text:" Coques / Bananas / Semi Presos / Presos"
    },
    {
        title:"CORTES",
        text:"Simples / Elaborado"
    },
    {
        title:"TRATAMENTOS",
        text:"Instantâneos / Ampolas/ Hidratação / Nutrição / Reconstrução / Tratamento Estético-Capilar para queda"
    },
    {
        title:"COLORAÇÃO",
        text:"Permanente / Semipermanente / Henna"
    },
    {
        title:"MECHAS",
        text:"Luzes / Mechas / Reflexos / Ombré / Splash Light / Sunset / Reverse"
    },
    {
        title:"ALISAMENTOS E CACHOS",
        text:"Escova Progressiva / Redutora / Relaxamento / Alisamento / Permanente / Suporte"
    }]

    dadosManicure = [{
        title:"DESIGN",
        text:"Básico / Francesinha / Em Gel"
    },
    {
        title:"ALONGAMENTO DE UNHAS",
        text:"Colocação / Manutenção / Retirada"
    }]

    dadosMicropigmentação = [{
        title:"MICROPIGMENTAÇÃO",
        text:"Lábios / Pálpebras / Sobrancelhas"
    }]

    dadosEstetica = [{
        title:"TRATAMENTO FACIAIS",
        text:""
    },
    {
        title:"LIMPEZA DE PELE",
        text:""
    },
    {
        title:"LIMPEZA DE PELE",
        text:"Pele Jovem / Pele Madura"
    },
    {
        title:"TRATAMENTOS DE PELE",
        text:"Pele Normal / Pele Seca / Pele Oleosa / Pele Acnéica / Pele Sensível / Rosácea"
    },{
        title:"ESTÉTICA CORPORAL",
        text:""
    }]

    dadosMaquiagem = [{
        title:"SOCIAL",
        text:"Simples / Com colocação de Cílios / Infantil até 12 anos"
    },
    {
        title:"NOIVA",
        text:"Fora do Plano / Air Brush"
    },
    {
        title:"ARTÍSTICA",
        text:"Simples / Média / Avançada"
    },
    {
        title:"SOBRANCELHAS",
        text:"Design / Manutenção / Coloração com Pigmento / Coloração com Henna"
    },{
        title:"CÍLIOS",
        text:"Coloração / Permanente / Colocação – Inteiros, Tufos e Fio a Fio"
    }]


    $scope.vejaMais1 = function(){
         $scope.listaVejaMais = dadosCabelo;
    }

    $scope.vejaMais2 = function(){
        $scope.listaVejaMais = dadosManicure;
    }

    $scope.vejaMais3 = function(){
        $scope.listaVejaMais = dadosEstetica;
    }

    $scope.vejaMais4 = function(){
        $scope.listaVejaMais = dadosMicropigmentação;
    }

    $scope.vejaMais5 = function(){
        $scope.listaVejaMais = dadosdadosMaquiagem;
    }
});