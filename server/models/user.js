const users = [
    {
    userId :1,
    user_name:"Mur123",
    password:"Krish@123",
    first_name:- "Murali",
},
{
    userId :2,
    user_name:"Sri123",
    password:"Mur@li123",
    first_name:- "Srinivas",
},
{
    userId :3,
    user_name:"chan123",
    password:"Roj@123",
    first_name:- "Chandra",
}
];


function getAllUsers() {
    return users;
  }
  
  function login(user) { // {userName: "sda", password: "gsdhjsga"}
    let cUser = users.filter( u => u.user_name === user.user_name);
    
    if(!cUser[0]) throw Error("Username not found");
    if(cUser[0].password !== user.password) throw Error("Password incorrect");
  
    return cUser[0];
  }
  
  module.exports = { getAllUsers, login };