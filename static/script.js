function addYear() {
    var d = new Date();
    var y = " " + d.getFullYear();
    var E = document.getElementById("year");
    E.innerHTML += y;
}

function validate(){
    var msg = document.getElementById("validateMsg");
    var zip = document.getElementById("zip")
    var numbers = /^\d{5}$/;  
    if(zip.value != "" && !zip.value.match(numbers))  
    {  
        msg.innerHTML = "The ZIP must be five numbers :)";
        return;
    }
    var phone = document.getElementById("mobile-phone")
    if (phone.value !="" && isNaN(phone.value))
    {
        msg.innerHTML = "The phone number must be all numbers :)";
        return;
    }
    msg.innerHTML = "";
}

//Swiper API to create Carousel
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

function onload() {
    addYear();
}