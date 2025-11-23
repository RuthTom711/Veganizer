function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


let recipeFormElement = document.querySelector("#reciep-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
