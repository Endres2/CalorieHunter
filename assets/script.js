
//  APIkey = "AIzaSyBcsnjRel5skeOozAeWPlYQHWA6D1skgCI"
// var googleAPI = function () {
//     // var apiUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcsnjRel5skeOozAeWPlYQHWA6D1skgCI&callback=initMap"
//     var script = document.createElement('script');
//     apiUrl = script.src = 'https://maps.googleapis.com/maps/api/js?key=' + APIkey + 'allback=initMap';
//     script.async = true;
//     fetch(apiUrl)
//       .then(function (response) {
//         if (response.ok) {
//           console.log(response);
//           response.json().then(function (data) {
//             // console.log(data); 
//            console.log(data);
            
           
//             // displayRepos(data, city);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to Google');
//       });
//   };
 
//   googleAPI()
  

//   fetch('https://instagram28.p.rapidapi.com/user_info?user_name=enzosnokedog', {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': 'd7d2bf74a6mshe490645974e1e6cp141a66jsn179e6e884056',
//     'x-rapidapi-host': 'instagram28.p.rapidapi.com'
//   } 
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

var getLatlon = function () {
  // var apiUrl = "https://maps.googleapis.com/maps/api/js?key=" + AIzaSyBcsnjRel5skeOozAeWPlYQHWA6D1skgCI + "&callback=initMap"
  fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=banana&pageSize=2&api_key=F6UkbBEMXf9Tv7SeAZsXU1ffIjQCnOMDniO1eteA", {
  // method: 'GET',
  // headers: {
  //   'x-rapidapi-key': 'd7d2bf74a6mshe490645974e1e6cp141a66jsn179e6e884056',
  //   'x-rapidapi-host': 'instagram28.p.rapidapi.com'
  // } 
})  
    .then(function (response) {
      if (response.ok) {
        // console.log(response);
        response.json().then(function (data) {
          console.log(data); 
         
          //displayRepos(data, city);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Google');
    });
};
// APIkey = "AIzaSyBcsnjRel5skeOozAeWPlYQHWA6D1skgCI"
 getLatlon()