// replace lang according to user location
lang = {
    "EN": { 
        "Sobre": "About",
        "links": "Links",
        "jogos": "Games",
        "config": "Configuration",
        "bemvindo": "<br>Welcome to my homepage, the goal to this is to add and test features and resources, junk code and explore lot of techs,  all that with a dubious aesthetics of old is cool sites, with due time gonna add some new things, the front-end will be at my ",
        "sobremim": "Always liked tech area, my first steps were in Tibia foruns, there I learned scripting LUA (a powerful brazilian lang), created Tibia servers and between my 13s and 18s I learned and helped teaching. Was tech college student, didn't finish the course, worked as Jr developer on a small company at Rio de Janeiro, also owned a FiveM server. Now I'm looking for a job and a degree to make a video tearing the certificate apart, and to facilitate my visa.",
        "links_topo": "Here's a selection of links that might be uself to you, unlike the experience of visiting this site:",
        "links_awesome_desc": "This is great, there's everything, just need to know a little english :P",
        "links_scrimba_desc": "There's a option to filter by free courses",
        "links_khan_desc": "There's portuguese version, but I prefer use the original one",
        "links_w3s_desc": "Wiki/Courses, useful site to get references and learn various subjects/langs...",
        "links_colab_desc": "Online Python workspace from google, you can do pair programming there",
        "site_descTop": "I'm developing this site using javascript only (with Jquery, cause jquery is <yellow>g[Old]</yellow>), to validate my knowledge in it, I know React, but I gonna keep this version and make other ones .",
        "site_descBottom": "This site will be a showcase for me and IT'S Open-source, see at:",
        "youtube_descTop": "A selection of awesome youtube channels that you can follow to learn more, each time the site reload the order will shuffle.",
        "yt_universoProgramado": "Videos about AI, well explained",
        "yt_gabrielPato": "Talks about hacking and tech, there's tecnical part, but is to mainstream.",
        "yt_peixeBabel": "About tech and AI, great channel",
        "yt_programacaoDin": "couple of devs, great devs and students, AI and DataScience",
        "jogos_desenvolvimento": "(WiP) Trying to learn more about Canva and how it works 😪"

    },
    "PT": { 
        "Sobre": "Sobre",
        "jogos": "Jogos",
        "config": "Configurações",
        "bemvindo": "<br>Bem-vindo(a) a minha página, o intuito da mesma é adicionar recursos/ferramentas, gambiarras e explorar diversas techs, tudo isso com uma estética duvidosa, com o tempo vou adicionando coisas novas, o front estará no meu ",
        "sobremim": "Sempre gostei da área de tech, primeiros passos foi em fóruns de Tibia, lá aprendi a linguagem de scripting LUA, criei servers de Tibia e também ensinei um pouco entre meus 13 e 18 anos. Fui estudante de análise de sistemas, não concluí o curso, trabalhei como programador júnior em uma empresa pequena no RJ, já tive um server FiveM. Pretendo voltar a falculdade pra ganhar um diploma pra ter cela diferenciada, facilitar a imigração e talvez concursar na área de tecnologia..",
        "links_topo": "Aqui uma seleção de links que podem ser úteis para você, ao contrário da experiência de visitar esse site:",
        "links_awesome_desc": "Esse é ótimo, encontrei recentemente, tem de tudo, só precisa saber um pouco de inglês :P",
        "links_scrimba_desc": "Tem opção de filtrar os cursos grátis",
        "links_khan_desc": "Khan Academy tem versão português, prefiro usar a inglês, mas você pode usar a pt",
        "links_w3s_desc": "Wiki/Cursos, site muito bom para referencias e aprender diversas coisas.",
        "links_colab_desc": "Ambiente online do google que dá pra fazer pair programming em Python",
        "site_descTop": "Estou desenvolvendo o site em javascript puro (com jquery, pq jquery é <yellow>g[Old]</yellow>), para validar meu conhecimento no mesmo, eu sei React, mas eu vou colocar outras versões do site e em outros estilos, mas irei manter essa velha de qualquer jeito.",
        "site_descBottom": "Esse site vai servir de portfólio para mim também e É Open-source também, vide:",
        "youtube_descTop": "Uma seleção de canais fodas do youtube que você pode seguir para aprender mais, cada vez que o site é carregado a ordem de aparição muda",
        "yt_universoProgramado": "Vídeos sobre IA, bem explicado",
        "yt_gabrielPato": "Canal que fala sobre hacking e tecnologia, tem parte técnica, mas é mais voltado para mainstream.",
        "yt_peixeBabel": "Sobre Tecnologia e IA, ótimo canal.",
        "yt_programacaoDin": "Canal de casal de programadores, ótimos programadores e estudantes, IA e DataScience",
        "jogos_desenvolvimento": "(WiP) Tentando aprender mais sobre Canva e como funciona 😪",
        "": "",
        "": "",
        "": "",
        "": "",
        "": ""
    },
}


    console.log("language.js loaded")
    langs = lang
   
    document.changeLanguage = function(acr) { 
        resetBody();
        if(acr == '?') {
            var aux = window.localStorage.getItem('selectedLang')
            if (aux == "PT") 
                acr = "EN"
            else 
                acr = "PT"
        }
        console.log("changeLanguage to "+acr)
        Object.entries(langs[acr]).forEach((k, v) => {
            if(k[0] && k[1])
            document.body.innerHTML = document.body.innerHTML.replaceAll("lang_"+k[0], k[1]);
        });
        window.localStorage.setItem("selectedLang", acr)
        langSwitchInput.checked = (aux == "PT");
    }  
