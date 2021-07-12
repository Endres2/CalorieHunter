var nameInputEl = document.querySelector('#ingredientName');
var nameRinputEl = document.querySelector("#recipesName")
var foodFormEl = document.querySelector('#ingredient-form');
var  gramsFormEl = document.querySelector('#grams-form');
var gramsEl = document.querySelector("#numberGrams");
var nutrientsContainerEl = document.querySelector('#nutrients-container');
var ingredientEl = document.querySelector("#ingredient");
var recipesContainerEl = document.querySelector('#recipes-container');
var ingredientRecipesEl = document.querySelector("#ingredientName");
var recipesFormEl = document.querySelector("#recipes-form");
var titleGrams = document.querySelector("#howManyGrams");


foodFormEl.addEventListener('submit', function(event){
  
  event.preventDefault();

  var foodname = "'"+nameInputEl.value.trim().toUpperCase()+"'";
  var foodnameButton = nameInputEl.value.trim().toUpperCase();
  var grams = "'"+gramsEl.value.trim().toUpperCase()+"'";
  ingredient = [];
  
  getApi(foodname)
  getGrams(grams);


  addButton(foodnameButton)
  nameInputEl.value = '';
  
  titleGrams.textContent = gramsEl.value;
  gramsEl.value = '';

  addButton(foodnameButton)
  nameInputEl.value = '';
  titleGrams.textContent = gramsEl.value;
  //gramsEl.value = '';

});

recipesFormEl.addEventListener('submit', function(event){
  
  event.preventDefault();

  var foodname = "'"+nameRinputEl.value.trim().toUpperCase()+"'";
  
  getRecipesApi(foodname)
  nameRinputEl.value = '';
});

function getGrams(grams) {
  console.log(grams);
  return grams;
}


var ingredient = [];

function getApi(foodname) {
    
      fetch('https://api.nal.usda.gov/fdc/v1/foods/search?query='+foodname+'&pageSize=2&api_key=F6UkbBEMXf9Tv7SeAZsXU1ffIjQCnOMDniO1eteA&dataType=Survey (FNDDS)', {
    
  })  
      .then(function (response) {
        
        if (response.ok) {
          
          response.json().then(function (data) {
            console.log(data);
            console.log(data.foods[0]);
            
            for(let i = 0; i<data.foods[0].foodNutrients.length ;i++){
            if((data.foods[0].foodNutrients[i].nutrientName == "Protein") || (data.foods[0].foodNutrients[i].nutrientName == "Total lipid (fat)") || (data.foods[0].foodNutrients[i].nutrientName =="Carbohydrate, by difference") || (data.foods[0].foodNutrients[i].nutrientName =="Sugars, total including NLEA") || (data.foods[0].foodNutrients[i].nutrientName =="Sodium, Na") || (data.foods[0].foodNutrients[i].nutrientName =="Energy")){
            ingredient.push(data.foods[0].foodNutrients[i].nutrientName, data.foods[0].foodNutrients[i].value); 
          }
          }
          
          displayNutrient(foodname,ingredient,getGrams( gramsEl.value))
          
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Google');
      });
  };
  function getRecipesApi(foodname) {
    
    fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=40b1f48ac55044009a17dc2c587befba&ingredients='+foodname+"&number=50",{
  
})  
    .then(function (response) {
      
      if (response.ok) {
        
        response.json().then(function (data) {
          
          displayRecipes(data)

        });
      } 
    })
    .catch(function (error) {
      alert('Unable to connect to Google');
    });
};



function addButton(foodname){
     
        var addCity = document.createElement("button")
        ingredientEl.appendChild(addCity) 
        addCity.textContent = foodname;
        addCity.setAttribute("class", "btn btn-lg")
        
      }

      function displayNutrient(foodname,ingredient, grams){
        
        var protein = ingredient[1]
        var fat = ingredient[3]
        var Carbohydrate = ingredient[5]
        var Energy = ingredient[7]
        var Sugars = ingredient[9]
        var Sodium = ingredient[11]
        console.log(grams);
      
        var food = document.createElement("div")
        food.setAttribute("class","col-12 col-md-3 back-border")
        var ingredient1 = document.createElement("button")
        ingredient1.setAttribute("class"," btn background-white justify-center")
        food.appendChild(ingredient1)
        console.log(foodname);

        ingredient1.textContent = grams +" g " +foodname ;


        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", "  background-white")
        ingredient2.textContent = "protein: "+ ((protein/100)*grams).toFixed(2) + " g"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " background-white")
        ingredient2.textContent = "fat: "+ ((fat/100)*grams).toFixed(2) + " g"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " background-white")
        ingredient2.textContent = "Carbs: "+ ((Carbohydrate/100)*grams).toFixed(2) + " g"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " background-white")
        ingredient2.textContent = "Energy: "+ ((Energy/100)*grams).toFixed(2) + " kcal"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " background-white")
        ingredient2.textContent = "Sugars: "+ ((Sugars/100)*grams).toFixed(2) + " g"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " background-white")
        ingredient2.textContent = "Sodium: "+ ((Sodium/100)*grams).toFixed(2) + " mg"
        food.appendChild(ingredient2)
        nutrientsContainerEl.appendChild(food)
      }


      function displayRecipes(recipesData){
        
        var random= Math.floor(Math.random()*50)
        console.log(random);
        console.log(recipesData[random]);
        var containerR = document.createElement("div")
        containerR.setAttribute("class","col-md-6 text-align-center")
        var title = document.createElement("h4")
        title.textContent = recipesData[random].title
        title.setAttribute("class","text-align-center btn " )
        
        
        var aTag = document.createElement("a")
        aTag.setAttribute("href","https://www.youtube.com/results?search_query="+recipesData[random].title)
        aTag.setAttribute("target","_blank")
        var image = document.createElement("img")
        image.setAttribute("src",recipesData[random].image)
        aTag.appendChild(image)
      
        containerR.appendChild(title)
        containerR.appendChild(aTag)
        recipesContainerEl.appendChild(containerR)
      }