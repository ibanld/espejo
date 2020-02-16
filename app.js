const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

const hablar = [
    'tu eres la persona más bonita del mundo',
    'tu, no hay nadie más guapa que tu',
    'eres preciosa, en el universo eres inigualable'
];

const caty = [
    'tu, Catalina eres nuestra emperatriz',
    'Catalina, tu nos guiarás a la victoria',
    'contigo Catalina, seremos invencibles',
    'gracias a ti Catalina, nuestro imperio no tendrá limites'
];

const espejo = [
    'tú, tu lo eres',
    'tu eres esa persona',
    'lo eres, que nadie te diga lo contrario'
];

const mirror = [
 'you, you are',
 'yes you are',
 'nobody but you'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    // content.textContent = transcript;
    readOutLoud(transcript);

};

btn.addEventListener('click', () =>{
    recognition.start();
});

function readOutLoud (message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'No te he escuchado bien, repite por favor';
    if(message.includes('bonita')) {
        const finalText = 
        hablar[Math.floor(Math.random() * hablar.length)];
        speech.text = finalText;
    }else if(message.includes('guapa')) {
        const finalText = 
        hablar[Math.floor(Math.random() * hablar.length)];
        speech.text = finalText;

    }else if(message.includes('preciosa')) {
        const finalText = 
        hablar[Math.floor(Math.random() * hablar.length)];
        speech.text = finalText;

    }else if(message.includes('espejito')) {
        const finalText = 
        espejo[Math.floor(Math.random() * espejo.length)];
        speech.text = finalText;
    }

    //editado para la emperatriz
    if(message.includes('emperatriz')) {
        const finalText = 
        caty[Math.floor(Math.random() * caty.length)];
        speech.text = finalText;
    }

    //editado para la emperatriz
    if(message.includes('mirror')) {
        const finalText = 
        mirror[Math.floor(Math.random() * mirror.length)];
        speech.text = finalText;
    }

    //editamos la voz para que suene como queramos
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch= 1;
    
    window.speechSynthesis.speak(speech);
}


let myFullpage = new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    parallax: true
});
