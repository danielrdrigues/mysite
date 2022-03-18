
$(document).ready(function() { 
    for (i=1; i<=Object.keys(youtubeCreators).length; i++) {
        $("document").css("background-color", "white");
        $("#youtube-nav").append(
            `<img class="yt-thumb" src="${youtubeCreators[i].img}">
            <a href="${youtubeCreators[i].link}" class="descTop">${youtubeCreators[i].name}</a><br>
            <p class="smallFont descLink">${youtubeCreators[i].desc}</p>
            <br></br>`
        );
    }
    return true;
});

var youtubeCreators = { 
    "1": {
        "name": "Universo Programado",
        "link": "https://www.youtube.com/results?search_query=universo+programado",
        "img": "img/youtube/universoprogramado.jpg",
        "desc": "Vídeos sobre IA, bem explicado"
    },
    "2": {
        "name": "Gabriel Pato",
        "link": "https://www.youtube.com/results?search_query=gabriel+pato",
        "img": "img/youtube/gabrielpato.jpg",
        "desc": "Canal que fala sobre hacking e tecnologia, tem parte técnica, mas é mais voltado para mainstream."
    },
    "3": {
        "name": "Peixe Babel",
        "link": "https://www.youtube.com/results?search_query=peixe+babel",
        "img": "img/youtube/peixebabel.jpg",
        "desc": "Sobre Tecnologia e IA, ótimo canal."
    },
    "4": {
        "name": "Programação Dinâmica",
        "link": "https://www.youtube.com/results?search_query=programacao+dinamica",
        "img": "img/youtube/programacaodinamica.jpg",
        "desc": "Canal de casal de programadores, ótimos programadores e estudantes, IA e DataScience"
    },
    "5": {
        "name": "Filipe Deschamps",
        "link": "https://www.youtube.com/results?search_query=filipe+deschamps",
        "img": "img/youtube/filipedeschamps.jpg",
        "desc": "Vídeos de programação em geral, é ótimo pra conhecer outros canais e ter uma perspectiva."
    },
    "6": {
        "name": "Manual do Código",
        "link": "https://www.youtube.com/results?search_query=manual+do+codigo",
        "img": "img/youtube/manualdocodigo.jpg",
        "desc": "Canal com conteúdo técnico de programação com tutoriais"
    },
    "7": {
        "name": "Rocket Seat",
        "link": "https://www.youtube.com/results?search_query=rocket+seat",
        "img": "img/youtube/rocketseat.jpg",
        "desc": "Vídeo/comunidade para aprender aquele framework modinha :p"
    },
    "8": {
        "name": "Código Fonte TV",
        "link": "https://www.youtube.com/results?search_query=codigo+fonte",
        "img": "img/youtube/codigofonte.jpg",
        "desc": "Outro canal de casal, mas mais experiente no ramo de WebDev."
    },
    "9": {
        "name": "Live Overflow",
        "link": "https://www.youtube.com/results?search_query=live+overflow",
        "img": "img/youtube/liveoverflow.jpg",
        "desc": "Canal hacking e write ups"
    },
    "10": {
        "name": "Computerphile",
        "link": "https://www.youtube.com/results?search_query=computerphile",
        "img": "img/youtube/computerphile.jpg",
        "desc": "Canal entrevistas sobre assunto programação e afins."
    },
    "11": {
        "name": "Dapper Dino",
        "link": "https://www.youtube.com/results?search_query=Dapper+dino",
        "img": "img/youtube/dapperdino.jpg",
        "desc": "Canal de tutoriais em geral"
    },
    "12": {
        "name": "3Blue1Brown",
        "link": "https://www.youtube.com/results?search_query=3blue1brown",
        "img": "img/youtube/3blue1brown.jpg",
        "desc": "Canal mais para matemática e exercícios"
    }
}