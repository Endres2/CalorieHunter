var nameInputEl = document.querySelector('#ingredientName');
var userFormEl = document.querySelector('#city-form');
var weatherContainerEl = document.querySelector('#weathers-container');
var cityEl = document.querySelector("#city")
var weatherCityEl = document.querySelector("#cityOfWeather")


userFormEl.addEventListener('submit', function(event){
  
  event.preventDefault();

  var cityname = "'"+nameInputEl.value.trim().toUpperCase()+"'";
  var citynameButton = nameInputEl.value.trim().toUpperCase()
  console.log(cityname);
  // search(cityname)
  ingredient = [];
  getApi(cityname)
  addButton(citynameButton)
  nameInputEl.value = '';
});




var ingredient = [];
//ARRAY OF MACROS IN EACH FOOD ITEM FROM myFoodList
tomato = 'tomato'
function getApi(cityname) {
    
      fetch('https://api.nal.usda.gov/fdc/v1/foods/search?query='+cityname+'&pageSize=2&api_key=F6UkbBEMXf9Tv7SeAZsXU1ffIjQCnOMDniO1eteA&dataType=Survey (FNDDS)', {
    
  })  
      .then(function (response) {
        
        if (response.ok) {
          
          response.json().then(function (data) {
            console.log(data.foods[0]);
            
            for(let i = 0; i<data.foods[0].foodNutrients.length ;i++){
            if((data.foods[0].foodNutrients[i].nutrientName == "Protein") || (data.foods[0].foodNutrients[i].nutrientName == "Total lipid (fat)") || (data.foods[0].foodNutrients[i].nutrientName =="Carbohydrate, by difference") || (data.foods[0].foodNutrients[i].nutrientName =="Sugars, total including NLEA") || (data.foods[0].foodNutrients[i].nutrientName =="Sodium, Na") || (data.foods[0].foodNutrients[i].nutrientName =="Energy")){
            // console.log(data.foods[0].foodNutrients[i]); 
            ingredient.push(data.foods[0].foodNutrients[i].nutrientName, data.foods[0].foodNutrients[i].value);
            
            
          }
          }
          console.log(cityname);
          displayWeather(cityname,ingredient)
          console.log(ingredient);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Google');
      });
  };

// var getCalories = function(){
//   var myFoodObj = {};
//   for(let i = 0; i <myFoodList.length; i++){
//     var foodItem = myFoodList[i];
//     getApi(foodItem);
      
//     }
//     console.log(ingredient);
//     console.log(myFoodObj);
//   }

//  //getApi();
//  getCalories();



function addButton(cityname){
     
          
 
  
  console.log({cityname}); 
      var addCity = document.createElement("button")
        cityEl.appendChild(addCity) 
        addCity.textContent = cityname;
        addCity.setAttribute("class", "btn btn-lg")
        // addCity.addEventListener("click", function (event){
        //   cityname = event.target.textContent ; 
        //   search(cityname)
        // })
      }

      function displayWeather(cityname,ingredient){
        var protein = ingredient[1]
        var fat = ingredient[3]
        var Carbohydrate = ingredient[5]
        var Energy = ingredient[7]
        var Sugars = ingredient[9]
        var Sodium = ingredient[11]
        
         
        
        
          
          // weathrDay1 = weatherWeek[1]
          
          
           
      
      
      
        var food = document.createElement("div")
        food.setAttribute("class","col-12 col-md-2 back-border")

        var ingredient1 = document.createElement("button")
        ingredient1.setAttribute("class"," btn flex-row justify-center")
        food.appendChild(ingredient1)
        console.log(cityname);
        ingredient1.textContent = cityname;
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " flex-row")
        ingredient2.textContent = "protein: "+ protein + " g"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " flex-row")
        ingredient2.textContent = "fat: "+ fat + " g"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " flex-row")
        ingredient2.textContent = "Carbs: "+ Carbohydrate + " g"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " flex-row")
        ingredient2.textContent = "Energy: "+ Energy + " g"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " flex-row")
        ingredient2.textContent = "Sugars: "+ Sugars + " g"
        food.appendChild(ingredient2)
        var ingredient2 = document.createElement("div")
        ingredient2.setAttribute("class", " flex-row")
        ingredient2.textContent = "Sodium: "+ Sodium + " g"
        food.appendChild(ingredient2)
        weatherContainerEl.appendChild(food)
        // var weathers3 = document.createElement("h5")
        // weathers3.setAttribute("class","flex-row padding")
        // container.appendChild(weathers3)
        // weathers3.textContent ="Temp: " + temp + " °F";
      
        // var weathers4 = document.createElement("h5")
        // weathers4.setAttribute("class","flex-row padding")
        // container.appendChild(weathers4)
        // // weathers4.setAttribute("class","flex-row padding")
        // weathers4.textContent ="Wind: " + wind + " MPH";
      
        // var weathers5 = document.createElement("h5")
        // weathers5.setAttribute("class","flex-row padding")
        // container.appendChild(weathers5)
        // weathers5.textContent ="Humidity: " + humidity + "%";
        
        // var weathers6 = document.createElement("h5")
        // weathers6.setAttribute("class","flex-row margin")
        // container.appendChild(weathers6)
        // weathers6.textContent ="UV index: " + uvi;
        // console.log(typeof uvi);
        // if (uvi < 3) {
        //   weathers6.style.backgroundColor = "#5D8233";
        // }
        // else if( uvi >=3  && uvi <6 ){
        //   weathers6.style.backgroundColor = "#E8E46E";
        // }
        // else if( uvi >=6 && uvi <8){
        //   weathers6.style.backgroundColor = "#F3C583";
        // }
        // else if( uvi >=8 && uvi <11){
        //   weathers6.style.backgroundColor = "#DF5E5E";
        // }
        // else{
        //   weathers6.style.backgroundColor = "#D62AD0";
        // }
      }