function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    axios.get('http://localhost:3001/login',{
        params:{
            'email': email, 
            'password': password
        }
    })
    .then((response) =>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}
