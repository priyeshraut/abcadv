burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', () => {
  navbar.classList.toggle('h-nav');
  navList.classList.toggle('v-class');
  rightNav.classList.toggle('v-class');
})


// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// middle text animation
var string = "Looking for a marketing agency that can simplify your brand communication and make your advertising campaigns effective? Look no further than our agency! We are experts in digital marketing, content creation, and graphic design, and we have the skills to help you stand out from the competition. With a personalized approach to every project and a commitment to staying ahead of the curve, we are the best choice for your comprehensive advertising requirements. Let us help you achieve your marketing goals and take your brand to the next level."; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
      }
  loopTimer = setTimeout('frameLooper()',30); /* change 70 for speed */

}
frameLooper();


// Contact page code
function sendEmail() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let body = "Name: " + name + "<br> Phone No: " + phone + "<br> Email: " + email + "<br> Message: " + message;

  Email.send({
    SecureToken : "4cff710a-2743-4cb8-b278-887ca3e5d4fc",
    To : 'priyeshraut5@gmail.com',
    From : "priyeshraut25@gmail.com",
    Subject : "This is the subject",
    Body : body
}).then(
  message => alert("Thanks for contacting us! We will be in touch with you shortly.")
);
}



