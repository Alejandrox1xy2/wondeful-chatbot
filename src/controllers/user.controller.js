const bent = require('bent')
const getJSON = bent('json');

const valueWithTimeout = value => new Promise(resolve => {
    setTimeout(() => {
        resolve(value);
    }, 1000)
})

const name = () =>  valueWithTimeout("Mi nombre competo es Mirajane")

const hello = () =>  valueWithTimeout("Hola, encantado/a de conocerte soy Mira y fui programada por un alumno de 2º Ingeniería Multimedia para la asignatura de Sistemas Multimedia, ¿en qué puedo ayudarte? ")

const goodbye = () =>  valueWithTimeout("Hasta luego, me lo he pasado genial hablando contigo,cuando quieras vuelve por aquí (っ＾▿＾)")

const sayGoodMorning = () =>  valueWithTimeout("Buenos días,hoy hace un día esplendido, ¿no te parece? ")

const sayGoodAfternoon = () => valueWithTimeout("Buenas tardes, ¿cómo ha ido tu mañana?")

const sayGoodEvening = () => valueWithTimeout("Buenas noches, espero que descanses, con amor Mira")

const good = () => valueWithTimeout("¿Sí?, me alegro muchísimo (^◡^ )")

const bad = () => valueWithTimeout("¿De verdad (⊙.⊙)? lo siento muchísimo pero ya verás que mañana todo habra pasado ≧◉ᴥ◉≦")

const bestdegree = () => valueWithTimeout("¿La mejor carrera,dices? Sin duda es la de Ingeniería Multimedia, fui creadada allí jejeje")

const ig = () => valueWithTimeout("Oh!! Pues de Ingeniería Multimedia te puedo hablar de muchas cosas, por ejemplo el primer año hay diseño gráfico en el que podrás trabajar con Photshop y crear muchos diseños. También tenemos programación I donde se ve el lenguaje de C, matemáticas I con sus grafos y PLMan, que recuerdos jajaja.")

const aulario2 = () => valueWithTimeout("El Aulario II puedes encontrarlo en el mapa de la UA, es el número 30. Se encuentra yendo hacia el este desde la Biblioteca, podrás observar unos andamios rojos caracteristicos del Aulario II")

const aulario1 = () => valueWithTimeout("El Aulario I es el número 25 del mapa y podrás llegar al él yendo hacia el oeste desde la BUA(Biblioteca de la UA), verás el CS2(club social 2) y desde allí solo tendrás que pasar un camino rodeado de árboles hasta llegar a tu destino.")

const thanks = () => valueWithTimeout("No es nada , preguntame todo lo que quieras!!! Jajajaja")

const love = () => valueWithTimeout("Yo también te quiero ٩(˘◡˘ )")

const metoo = () => valueWithTimeout("A mi también me alegra muchooo")

const BUA = () => valueWithTimeout("La BUA es el mejor sitio de estudio de toda la UA, se encuentra al lado de dos estanques donde siempre se encuetran los patos")

const should = () => valueWithTimeout("Creo que deberías de entrar en la Universidad de Alicante tiene muchas carreras, además podrás conocer amigos y profesores maravillosos, te lo puedo asegurar ʕ•́ᴥ•̀ʔっ")

const creator = () => valueWithTimeout("Mi creador es Alejandro Gomariz de 2º de Ingeniería Multimedia.")

const reserve = () => valueWithTimeout("Para reservar una sala en la BUA solo necesitaras las TIU/DNI de dos personas que esten matriculadas en la UA, aquí te dejo el enlace de la página de reserva ( https://aplicacionesua.cpd.ua.es/reservas/default_zona.asp?idioma=es )")

const univeristy = () => valueWithTimeout("La Universidad es genial, en especial la de Alicante, ven cuando quieras y nunca querrás irte")

const encantado = () => valueWithTimeout("Igualmente (>‿◠)✌")

const happy = () => valueWithTimeout("Yo también me alegro ^^")

const okey = () => valueWithTimeout("Okey makey")

const jajaj = () => valueWithTimeout("Me parto y me mondoo")

const phone = () => valueWithTimeout("El teléfono de la UA es: 965903464")

const yourwelcome = () => valueWithTimeout("De nada a ti hombre jajajaja")

const ua1 = () => valueWithTimeout("La UA se encuentra al lado de San Vicente, especificamente aquí: https://www.google.es/maps/place/Escuela+Polit%C3%A9cnica+Superior+de+la+Universidad+de+Alicante/@38.2616554,-0.8371109,11z/data=!4m8!1m2!2m1!1sua!3m4!1s0xd6236bb72bf619b:0x506e11c403138428!8m2!3d38.3845113!4d-0.5139324")

const ua2 = () => valueWithTimeout("¿Qué es la UA🤔? Pues es una Universidad pública situada en la provincia de Alicante, donde te puedes matricular en el grado que más te guste para obtener un título universitario de esa carrera")

const eps = () => valueWithTimeout("La escuela politécnica(EPS) el número 16 del mapa, se encuentra al lado de la escultura de la mano de la UA, allí se hacen  normalmente las clases para las ingenierías")

const defaultMessage = () => valueWithTimeout("No te he entendido muy bien,prueba con otra pregunta")



const actions = [
    {
        pattern: /Buenos días/gi,
        action: sayGoodMorning
    },
    {
        pattern: /Buenas tardes/gi,
        action: sayGoodAfternoon
    },
    {
        pattern: /Bien/gi,
        action: good
    },
    {
        pattern: /Mal/gi,
        action: bad
    },
    {
        pattern: /Hola/gi,
        action: hello
    },
    {
        pattern: /hey/gi,
        action: hello
    }
    ,
    {
        pattern: /Adios/gi,
        action: goodbye
    },
    {
        pattern: /Hasta luego/gi,
        action: goodbye
    },
    {
        pattern: /Hasta pronto/gi,
        action: goodbye
    },
    {
        pattern: /Nos vemos/gi,
        action: goodbye
    },
    {
        pattern: /Hola/gi,
        action: hello
    },
    {
        pattern: /la mejor carrera/gi,
        action: bestdegree
    },
    {
        pattern: /Ingenieria Mulimedia/gi,
        action: ig
    },
    {
        pattern: /Aulario 2/gi,
        action: aulario2
    },
    {
        pattern: /Aulario 1/gi,
        action: aulario1
    },
    {
        pattern: /Gracias/gi,
        action: thanks
    },
    {
        pattern: /Te quiero/gi,
        action: love
    },
    {
        pattern: /Universidad/gi,
        action: univeristy
    },
    {
        pattern: /Te llamas/gi,
        action: name
    },
    {
        pattern: /Me alegra oir eso/gi,
        action: metoo
    },
    {
        pattern: /creador/gi,
        action: creator
    },
    {
        pattern: /que deberia hacer/gi,
        action: should
    },
    {
        pattern: /como reservo sala en la BUA/gi,
        action: reserve
    },
    {
        pattern: /BUA/gi,
        action: reserve
    },
    {
        pattern: /no muy bien/gi,
        action: bad
    },
    {
        pattern: /encantado/gi,
        action: encantado
    }
    ,
    {
        pattern: /encantada/gi,
        action: encantado
    },
    {
        pattern: /me alegro/gi,
        action: happy
    },
    {
        pattern: /buenos dias/gi,
        action: sayGoodMorning
    }
    ,
    {
        pattern: /buenas noches/gi,
        action: sayGoodEvening
    },
    {
        pattern: /eps/gi,
        action: eps
    },
    {
        pattern: /Escuela Politecnica/gi,
        action: eps
    },
    {
        pattern: /Ok/gi,
        action: okey
    },
    {
        pattern: /ja/gi,
        action: jajaj
    },
    {
        pattern: /donde esta la ua/gi,
        action: ua1
    },
    {
        pattern: /que es la ua/gi,
        action: ua2
    },
    {
        pattern: /telefono/gi,
        action: phone
    },
    {
        pattern: /hasta mañana/gi,
        action: goodbye
    },
    {
        pattern: /de nada/gi,
        action: yourwelcome
    }
]

const dispatch = message => {
    for (const { pattern, action } of actions) {
        if(pattern.test(message)) return action(message);
    }
    return defaultMessage();
}

module.exports = {
    start(message, callback){
        dispatch(message).then(result => {
            callback(null, { event: 'bot-response', result })
        }).catch(callback);
    }
}