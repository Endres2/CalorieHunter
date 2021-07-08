


var getLatlon = function () { 
  fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query="+ingredient+"&pageSize=2&api_key=F6UkbBEMXf9Tv7SeAZsXU1ffIjQCnOMDniO1eteA", {
})  
    .then(function (response) {
      if (response.ok) {
        
        response.json().then(function (data) {
          console.log(data.foods[0].foodNutrients)
          console.log(data.foods[0].foodNutrients[0])
          console.log(data.foods[0].foodNutrients[1])
          console.log(data.foods[0].foodNutrients[2])
          console.log(data.foods[0].foodNutrients[3])
          console.log(data.foods[0].foodNutrients[4])
          
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Google');
    });
};
 getLatlon()