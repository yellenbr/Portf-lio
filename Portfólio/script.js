const nameField = document.querySelector("input");
const button = document.querySelector("button")

nameField.addEventListener("input", () => {
  nameField.setCustomValidity("");
  nameField.checkValidity();
  console.log(nameField.checkValidity());
});

nameField.addEventListener("invalid", () => {
  nameField.setCustomValidity("Esqueceu do seu orçamento, oxi!");
});

button.addEventListener("click",function(){
    nameField.style.color = "green"
}
)