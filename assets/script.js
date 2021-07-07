var users = 'find_influence'

fetch('https://instagram28.p.rapidapi.com/user_info?user_name=' + users  , {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '0e38836ee3msh75e0c7b966ff27fp1d6f8fjsn836a36a493f8',
    'x-rapidapi-host': 'instagram28.p.rapidapi.com'
  } 
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

