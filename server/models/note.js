const Note = [
    {
    NoteId : 1,
    userId :1,
    Content :"keyboard",
    
},
{
    NoteId : 2,
    userId :2,
    Content:"Mouse",
},
{
    NoteId : 3,
    userId :3,
    Content:"Headset",
}
];


function getAllUsers() {
    return Note;
  }
  
  function login(user) { // {userName: "sda", password: "gsdhjsga"}
    let cUser = Note.filter( u => u.userId === Note.userId);
    
    if(!cUser[0]) throw Error("Username not found");
    if(cUser[0].password !== user.password) throw Error("Password incorrect");
  
    return cUser[0];
  }
  
  module.exports = { getAllUsers, login };