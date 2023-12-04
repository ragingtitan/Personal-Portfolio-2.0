document.addEventListener('DOMContentLoaded',()=>{
    const home=document.getElementById('home');
    const about=document.getElementById('about');
    const services=document.getElementById('services');
    const contact=document.getElementById('contact');
    const feedback=document.getElementById('feedback');
    /*Border animation*/
    home.addEventListener('mouseenter',()=>{
        home.classList.toggle('border');
    });
    home.addEventListener('mouseleave',()=>{
        home.classList.toggle('border');
    });
    

    about.addEventListener('mouseenter',()=>{
        about.classList.toggle('border');
    });
    about.addEventListener('mouseleave',()=>{
        about.classList.toggle('border');
    });


    services.addEventListener('mouseenter',()=>{
        services.classList.toggle('border');
    });
    services.addEventListener('mouseleave',()=>{
        services.classList.toggle('border');
    });


    contact.addEventListener('mouseenter',()=>{
        contact.classList.toggle('border');
    });
    contact.addEventListener('mouseleave',()=>{
        contact.classList.toggle('border');
    });


    feedback.addEventListener('mouseenter',()=>{
        feedback.classList.toggle('border');
    });
    feedback.addEventListener('mouseleave',()=>{
        feedback.classList.toggle('border');
    });
});