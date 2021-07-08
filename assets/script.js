var myFoodList = ["tomato", "pasta","hamburger"]; //ARAY OF USER INPUT
var ingredient = [];//ARRAY OF MACROS IN EACH FOOD ITEM FROM myFoodList
  var getApi = function (foodItem) {
    
      fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query="+foodItem+"&pageSize=2&api_key=F6UkbBEMXf9Tv7SeAZsXU1ffIjQCnOMDniO1eteA", {
    
  })  
      .then(function (response) {
        if (response.ok) {
          
          response.json().then(function (data) {
            for(let i = 0; i<data.foods[0].foodNutrients.length ;i++){
            if((data.foods[0].foodNutrients[i].nutrientName == "Protein") || (data.foods[0].foodNutrients[i].nutrientName == "Total lipid (fat)") || (data.foods[0].foodNutrients[i].nutrientName =="Carbohydrate, by difference") || (data.foods[0].foodNutrients[i].nutrientName =="Sugars, total including NLEA") || (data.foods[0].foodNutrients[i].nutrientName =="Sodium, Na") || (data.foods[0].foodNutrients[i].nutrientName =="Fatty acids, total saturated") || (data.foods[0].foodNutrients[i].nutrientName =="Energy")){
            console.log(data.foods[0].foodNutrients[i]); 
            ingredient.push(data.foods[0].foodNutrients[i].nutrientName, data.foods[0].foodNutrients[i].value);
            
          }
          }
          
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Google');
      });
  };

var getCalories = function(){
  var myFoodObj = {};
  for(let i = 0; i <myFoodList.length; i++){
    var foodItem = myFoodList[i];
    getApi(foodItem);
      
    }
    console.log(ingredient);
    console.log(myFoodObj);
  }

 //getApi();
 getCalories();

 //Protein Fatty acids, total trans/ Carbohydrate, by difference/ Sugars, total including NLEA/ Sodium, Na/ Energy/ Total lipid (fat)/Fatty acids, total saturated/