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
        text.innerHTML='<p>This is a skill This is a skill This is a skill This is a skill This is a skill</p>';
    });


    experience.addEventListener('click',()=>{
        text.innerHTML='<p>This is a experienceexperience This is a experience This is a experience This is a experience This is a experience</p>';
    });

    education.addEventListener('click',()=>{
        text.innerHTML='<p>This is a education This is a education This is a education This is a education This is a skill</p>';
    });


});