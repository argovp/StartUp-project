$(document).ready(function () {
// ***Preloader***
document.body.onload = function(){

    setTimeout(function() {
        let loader = document.getElementById('page-preloader');
        if( !loader.classList.contains('done')){
            loader.classList.add('done');
        }
    }, 1000);
}

// **header**
let navMenu = document.querySelector('.nav-menu');
let burger = document.querySelector('.burger');
let headerOverlay = document.querySelector('.header-overlay');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    headerOverlay.classList.toggle('hidden');
});
document.querySelectorAll('.nav-link').forEach((elem)=>elem.addEventListener('click',()=>{
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    headerOverlay.classList.add('hidden');
}));
headerOverlay.addEventListener('click', ()=>{
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    headerOverlay.classList.add('hidden');    
});



// ***work***
let btn = document.querySelectorAll('.work-overlay-container button');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let overlay = document.querySelector('.overlay');

let bgImg = [
    'url(img/works/work-1.png)',
    'url(img/works/work-2.png)',
    'url(img/works/work-3.png)',
    'url(img/works/work-4.png)',
    'url(img/works/work-5.png)',
    'url(img/works/work-6.png)',
    'url(img/works/work-7.png)',
    'url(img/works/work-8.png)',
    'url(img/works/work-9.png)'
]
for(let i=0; i<bgImg.length; i++){
    const openModal = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    const closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    btn[i].addEventListener('click',openModal);
    close.addEventListener('click',closeModal);
    overlay.addEventListener('click', closeModal);
    modal.style.backgroundImage = bgImg[i];
}

// **clients**
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      clientsSlides = document.querySelectorAll('.clients-container'),
      clientsDots = document.querySelectorAll('.client-dots-item');
let index = 0;
const activeSlide = n => {
    for(let slide of clientsSlides){
        slide.classList.remove('active');
    };
    clientsSlides[n].classList.add('active');
}
const activeDot = n => {
    for(let dot of clientsDots){
       dot.classList.remove('active');
    };
    clientsDots[n].classList.add('active');
}
const nextSlide = () => {
    if(index == clientsSlides.length-1){
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);        
    }
};
const prevSlide = () => {
    if(index == 0){
        index = clientsSlides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
};

clientsDots.forEach((itemDot, indexDot)=>{
    itemDot.addEventListener('click', ()=>{
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
setInterval(nextSlide, 3000);

// **contact***

const nameError = document.getElementById('name-error'),
      phoneError = document.getElementById('phone-error'),
      emailError = document.getElementById('email-error'),
      messageError = document.getElementById('message-error'),
      submitError = document.getElementById('submit-error');

      function validateName(){
        const name = document.getElementById('contact-name').value;        

        if(name.length == 0){
            nameError.innerHTML = "name is required";
            return false;
        }
        else if(!name.match(/^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/gm)){
            nameError.innerHTML = "write full Name";
            return false;
        }
        else{
            nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            return true;
        }        
      }

      function validatePhone(){
        const phone = document.getElementById('contact-phone').value;
        if(phone.length == 0){
            phoneError.innerHTML = "phone is required";
            return false;
        }
        if(!phone.length == 10){
            phoneError.innerHTML = "phone should be 10 digits";
            return false;
        }
        if(!phone.match(/^[0-9]{10}$/)){
            phoneError.innerHTML = "only digits please";
            return false;
        }
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
      }


      function validateEmail(){
        const email = document.getElementById('contact-email').value;
        if(email == ""){
            emailError.innerHTML = "email is required";
            return false;
        }
        if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
            emailError.innerHTML = "enter correct email";
            return false;
        }
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validateMessage(){
        const message = document.getElementById('contact-message').value;
        const required = 100;
        let left = required - message.length;

        if(left > 0){
            messageError.innerHTML = left + "more characters required";
            return false;
        }
        messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validateForm(){
        if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
            submitError.style.display = "block";
            submitError.innerHTML = "Please fix errors";
            setTimeout(function(){
                submitError.style.display = "none"
            },3000)
            return false;
        }
    }    


//ADD HEADER

    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('header').addClass('add_header');
        }
        else {
            $('header').removeClass('add_header');
        }
    });


    //BUTTON UP

    $('.button_up').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.button_up').addClass('active');
        }
        else {
            $('.button_up').removeClass('active');
        }
    });
})  
 