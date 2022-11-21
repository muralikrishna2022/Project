document.getElementById("btn-users").addEventListener('click', getUsers);

 function getUsers() {
  fetch("http://localhost:3000/notes/")
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
    constructor(NoteId, userId, Content) {
      this.NoteId = NoteId;
      this.userId = userId;
      this.Content = Content;
    }
  
    getNoteId() {
      return this.NoteId;
    }
  }
  
  // grab the form, add event listener
  let loginForm = document.getElementById("login-form");
  if(loginForm) loginForm.addEventListener('submit', login);
  
  function login(e) {
    e.preventDefault();
  
    let NoteId = document.getElementById("user_name").value;
    let userId = document.getElementById("password").value;
    let note= new User(NoteId, userId);
  
    fetchData("/notes/login", note, "POST")
    .then((data) => {
      console.log(data);
      window.location.href = "bmi.html";
    })
    .catch((err) => {
      console.log(`Error!!! ${err.message}`)
    }) 
  
  }