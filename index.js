const nav = document.getElementById("navbar");
const bar = document.querySelector(".bar");
const closeBtn = document.getElementById("cross");

function menu() {
  nav.classList.add("active");
  bar.style.display = "none";
  nav.style.display = "block";
}

function closeMenu() {
  nav.classList.remove("active");
  bar.style.display = "block";
}

bar.addEventListener("click", menu);
closeBtn.addEventListener("click", closeMenu);

const form = document.querySelector("form");
function sendEmail() {
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const msg = document.getElementById("Msg").value;

  let body =
    "Name: " + name + "<br/> Email: " + email + "<br/> Message: " + msg;
  Email.send({
    SecureToken: "7f496236-4743-4409-9d94-58c53d2da661",
    To: "pokharelaishwarya22@gmail.com",
    From: "pokharelaishwarya22@gmail.com",
    Subject: "message from Contact from",
    Body: body,
  }).then((message) => alert(message));
}
