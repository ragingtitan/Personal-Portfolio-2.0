//Mobile optimization script
document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const services = document.getElementById('services');
    const contact = document.getElementById('contact');
    const feedback = document.getElementById('feedback');
    const skill = document.getElementById('skill');
    const experience = document.getElementById('experience');
    const education = document.getElementById('education');
    const text = document.getElementById('text');

    /* Populating skillset section */
    skill.addEventListener('touchstart', () => {
        text.classList.toggle('toggle');
        text.innerHTML = '<p>HTML, CSS, JavaScript, Responsive Design, node.js, React.js, Python UI/UX Principles and figma.</p>';
    });

    experience.addEventListener('touchstart', () => {
        text.classList.toggle('toggle');
        text.innerHTML = '<p>I am currently doing an internship at OASIS Infobyte.</p>';
    });

    education.addEventListener('touchstart', () => {
        text.classList.toggle('toggle');
        text.innerHTML = '<p>Completed 10th and 12th and currently doing BTECH in ECE.</p>';
    });

    // Rest of your code...

    // Scroll to top
    const target2 = document.getElementById("go-up");
    target2.addEventListener('touchstart', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Hiding scroll at top
    target2.style.display = 'none';
    document.addEventListener('scroll', () => {
        if (window.scrollY == 0) {
            target2.style.display = 'none';
        } else {
            target2.style.display = 'block';
        }
    });

    // Scroll to the sections
    // Scroll to home
    const aboutme = document.querySelector(".body");
    about.addEventListener('touchstart', () => {
        aboutme.scrollIntoView({ behavior: 'smooth' });
    });

    const servicesgo = document.querySelector(".services");
    services.addEventListener('touchstart', () => {
        servicesgo.scrollIntoView({ behavior: 'smooth' });
    });

    const projectgo = document.querySelector(".project");
    project.addEventListener('touchstart', () => {
        projectgo.scrollIntoView({ behavior: 'smooth' });
    });

    const contactgo = document.querySelector(".contact");
    contact.addEventListener('touchstart', () => {
        contactgo.scrollIntoView({ behavior: 'smooth' });
    });
});
