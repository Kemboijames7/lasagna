function cookingStatus(remainingTime) {
    if (remainingTime === 0) {
      return 'Lasagna is done.';
    }
    if (!remainingTime) {
      return 'You forgot to set the timer.';
    }
    return 'Not done, please wait.';
  }
  
  function preparationTime(layers, averagePreparationTime = 2) {
    return layers.length * averagePreparationTime;
  }
  
  function quantities(layers) {
    return {
      noodles: layers.filter((layer) => layer === 'noodles').length * 50,
      sauce: layers.filter((layer) => layer === 'sauce').length * 0.2,
    };
  }
  
  function addSecretIngredient(friendsList, myList) {
    const secretIngredient = friendsList[friendsList.length - 1];
    myList.push(secretIngredient);
  }
  
  function scaleRecipe(recipe, newPortions) {
    let scaleFactor = newPortions / 2;
    let scaledRecipe = {};
    for (let ingredient in recipe) {
      scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
    }
    return scaledRecipe;
  }
  
  // Functions for interacting with the webpage
  function checkCookingStatus() {
    const time = parseInt(document.getElementById('timer').value);
    document.getElementById('statusOutput').innerText = cookingStatus(time);
  }
  
  function calculatePrepTime() {
    const layers = document.getElementById('layers').value.split(',');
    const prepTime = parseInt(document.getElementById('prepTime').value) || 2;
    document.getElementById('prepOutput').innerText = `Total Preparation Time: ${preparationTime(layers, prepTime)} minutes`;
  }
  
  function calculateQuantities() {
    const layers = document.getElementById('quantitiesLayers').value.split(',');
    const { noodles, sauce } = quantities(layers);
    document.getElementById('quantitiesOutput').innerText = `Noodles: ${noodles}g, Sauce: ${sauce}L`;
  }
  
  function addIngredient() {
    const friendsList = document.getElementById('friendIngredients').value.split(',');
    const myList = document.getElementById('myIngredients').value.split(',');
    addSecretIngredient(friendsList, myList);
    document.getElementById('ingredientOutput').innerText = `Your Ingredients: ${myList.join(', ')}`;
  }
  
  function scaleRecipeForPortions() {
    const recipe = JSON.parse(document.getElementById('recipe').value);
    const newPortions = parseInt(document.getElementById('newPortions').value);
    const scaled = scaleRecipe(recipe, newPortions);
    document.getElementById('scaleOutput').innerText = `Scaled Recipe: ${JSON.stringify(scaled, null, 2)}`;
  }
  