function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

  let apiKey = "2bf02005obb4ft73c247eba0b4e8f73d"; 
  
let recipeFormElement = document.querySelector("#reciep-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
