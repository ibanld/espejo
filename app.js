const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

const hablar = [
    'esta es una prueba',
    'del espejito magico',
    'gracias por participar'
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
    if(message.includes('probando')) {
        const finalText = 
        hablar[Math.floor(Math.random() * hablar.length)];
        speech.text = finalText;
    }

    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch= 1;
    
    window.speechSynthesis.speak(speech);
}


let myFullpage = new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});