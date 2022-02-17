/*=============== LOADER ===============*/


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener('scroll', () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 
        ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
})

/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
})


/* Default filter products */ 
mixerProducts.filter('.delicacies')

/* Link active products */ 
const linkProducts = document.querySelectorAll('.products__item')

linkProducts.forEach(link => link.addEventListener('click', function() {
    linkProducts.forEach(l => l.classList.remove('active-product'))
    this.classList.add('active-product')
}))

/*=============== SHOW SCROLL UP ===============*/ 
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up');
    (this.scrollY >= 350) 
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
