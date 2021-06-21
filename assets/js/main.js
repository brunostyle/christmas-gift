/*==================== SHOW MENU ====================*/
let showMenu = (toggleId, navId) => {
    let toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    //Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/

let navLink = document.querySelectorAll('.nav__link');

function linkAction () {
    let navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(e => e.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

let sections = document.querySelectorAll('section[id]');

function scrollActive () {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader () {
    let nav = document.getElementById('header');

    if(this.scrollY > 200){
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 

function scrollTop () {
    let scrollTop = document.getElementById('scroll-top');
    if(this.scrollY > 500){
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTop);

/*==================== DARK LIGHT THEME ====================*/ 

let themeButton = document.getElementById('theme-button');
let darkTheme = 'dark-theme';
let iconTheme = 'bx-toggle-right';

let selectedTheme = localStorage.getItem('selected-theme');
let selectedIcon = localStorage.getItem('selected-icon');

let getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    console.log(getCurrentTheme());

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/

let sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, .home__img, 
           .decoration__data,
           .accessory__content,
           .footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})