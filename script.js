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

    skill.addEventListener('click',()=>{
        text.classList.toggle('toggle');
        text.innerHTML='<p>This is a skill This is a skill This is a skill This is a skill This is a skill</p>';
    });
    experience.addEventListener('click',()=>{
        text.classList.toggle('toggle');
        text.innerHTML='<p>This is a experienceexperience This is a experience This is a experience This is a experience This is a experience</p>';
    });

    education.addEventListener('click',()=>{
        text.classList.toggle('toggle');
        text.innerHTML='<p>This is a education This is a education This is a education This is a education This is a skill</p>';
    });


    /*Typing animations*/
    const words = ["Hey, there!","I am Anish Das", "Welcome to my portfolio.", "I hope you like it."," Follow me on social media.", "Kindly share your feedback.", "Thank you.","Have a nice day!"];
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
typingText();



});