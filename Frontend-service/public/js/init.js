window.onload = function(){
    controller.axios = axios.create({baseURL: "http://localhost:3000/api"});
    controller.view = view;

    let  submit_button = document.getElementById("submit");
    submit_button.addEventListener("click", handler.submit)
}