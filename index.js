const nav = document.getElementById("nav");
const bar = document.querySelector('.bar');
function menu(){
  nav.style.display = "block";
  bar.style.display = "none";   
}
function closeMenu(){
  nav.style.display = "none";
  bar.style.display = "block";   
}
const form= document.querySelector('form');
function sendEmail(){
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const msg = document.getElementById("Msg").value;


  let body = "Name: " + name + "<br/> Email: " + email + "<br/> Message: " + msg;
  Email.send({
    SecureToken : "7f496236-4743-4409-9d94-58c53d2da661",
    To : 'pokharelaishwarya22@gmail.com',
    From : "pokharelaishwarya22@gmail.com",
    Subject : "message from Contact from",
    Body : body,
}).then(
  message => alert(message)
);
}
