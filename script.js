const form = document.getElementById("signup");
const name = form.elements["name"];
const adress = form.elements["adress"];
const email = form.elements["email"];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let a = name.value;
  let b = adress.value;
  let c = email.value;
  alert(
    `mailto:contact.whataguide@gmail.com?
    &subject=Je souhaite devenir betâ testeur !
               &body=${a}, ${b}, ${c}`
  );
  document.getElementById("valeur1").textContent = name;
  document.getElementById("valeur2").textContent = adress;
  document.getElementById("valeur3").textContent = email;
});
