function displayRecipe (response) {
    console.log("recipe generated")

     new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    html: true
  });
}

function generateRecipe(event) {
  event.preventDefault();
      let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2bf02005obb4ft73c247eba0b4e8f73d"; 

  let context = 
  "You are a great vegan chef able to infuse spice and ingredients to give the known meat flavour in vegan dishes in short simple steps,Your mission is to generate a 6 line recipe in basic HTML respond ONLY with HTML, no backticks, no code block formatting ensure to follow users instructions REMOVE HEADING! sign 'SheCodes AI' inside a <strong> element";
  
  let prompt = `user instructions:generate vegan versions of meat recipe with vegan substitutions ${instructionsInput.alue}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  console.log("Generating recipe");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

axios.get(apiURL).then(displayRecipe);


}
 

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
