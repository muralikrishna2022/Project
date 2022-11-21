document.getElementById("btn-users").addEventListener('click', getUsers);

 function getUsers() {
  fetch("http://localhost:3000/users/")
   .then((res)=> res.json())
   .then((data) => console.log(data))
   .catch((err)=> console.log(err))
 }
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }
  
  // user class
  class User {
    constructor(userName, password, fullName) {
      this.userName = userName;
      this.password = password;
      this.fullName = fullName;
    }
  
    getUsername() {
      return this.userName;
    }
  }
  
  // grab the form, add event listener
  let loginForm = document.getElementById("login-form");
  if(loginForm) loginForm.addEventListener('submit', login);
  
  function login(e) {
    e.preventDefault();
  
    let userName = document.getElementById("user_name").value;
    let password = document.getElementById("password").value;
    let user = new User(userName, password);
  
    fetchData("/users/login", user, "POST")
    .then((data) => {
      console.log(data);
      window.location.href = "bmi.html";
    })
    .catch((err) => {
      console.log(`Error!!! ${err.message}`)
    }) 
  
  }