document.addEventListener('DOMContentLoaded',()=>{
    const home=document.getElementById('home');
    const about=document.getElementById('about');
    const services=document.getElementById('services');
    const contact=document.getElementById('contact');
    const feedback=document.getElementById('feedback');
    const skill=document.getElementById('skill');
    const experience=document.getElementById('experience');
    const education=document.getElementById('education');
    const text=document.getElementById('text');
    /*Populating skillset section*/ 
    skill.addEventListener('click',()=>{
        text.classList.toggle('toggle');
        text.innerHTML='<p>HTML, CSS, JavaScript,   Responsive Design, node.js, UI/UX Principles and figma</p>';
    });
    experience.addEventListener('click',()=>{
        text.classList.toggle('toggle');
        text.innerHTML='<p>I am currently doing an internship at OASIS Infobyte.</p>';
    });

    education.addEventListener('click',()=>{
        text.classList.toggle('toggle');
        text.innerHTML='<p>Completed my class 10 from St. Marys orphanage and day school, and class 12 from Indira Gandhi Memorial High School. Doing BTECH at Heritage Institute of Technology, Kolkata.</p>';
    });

/*
    //Typing animations
    const words = ["Hey, there!","Welcome!","I am Anish Das.","Follow me on","Facebook","Instagram","LinkedIn","and Github.","Contact me below.", "Thank you.","Have a nice day!"];
    let index = 0;
    let wordIndex = 0;
    let intervalId;

    function typingText() {
    const target = document.getElementById("type");
    const currentWord = words[wordIndex];
    const currentWordLength = currentWord.length;

    if (index < currentWordLength) {
        target.textContent += currentWord.charAt(index);
        index++;
        setTimeout(typingText, 50);
    } else {
        setTimeout(() => {
        intervalId = setInterval(removeText, 20);
        }, 1500);
    }
}
//To remove text after typing
    function removeText() {
        const target = document.getElementById("type");
        const currentWord = words[wordIndex];
        const currentWordLength = currentWord.length;

         if (index > 0) {
            target.textContent = currentWord.substring(0, index - 1);
            index--;
         } 
        else {
            clearInterval(intervalId);
            wordIndex = (wordIndex + 1) % words.length;
            index = 0;
            setTimeout(typingText, 1000);
        }
    }
typingText();*/

const words = ["Hey, there!","Welcome!","I am Anish Das.","Follow me on","Facebook","Instagram","LinkedIn","and Github.","Contact me below.", "Thank you.","Have a nice day!"];
let index = 0;
let wordIndex = 0;
let intervalId;

function typingText() {
    const target = document.getElementById("type");
    const currentWord = words[wordIndex];
    const currentWordLength = currentWord.length;

    if (index < currentWordLength) {
        target.textContent += currentWord.charAt(index);
        index++;
        setTimeout(typingText, 50);
    } else {
        setTimeout(() => {
            intervalId = setInterval(removeText, 20);
        }, 1500);
    }
}

// To remove text after typing
function removeText() {
    const target = document.getElementById("type");
    const currentWord = words[wordIndex];
    const currentWordLength = currentWord.length;

    if (index > 0) {
        target.textContent = currentWord.substring(0, index - 1);
        index--;
    } else {
        clearInterval(intervalId);
        wordIndex = (wordIndex + 1) % words.length;
        index = 0;
        setTimeout(typingText, 1000);
    }
}

// Add a delay before typing the first sentence
setTimeout(typingText, 2500);



});