let view = {
    submit: function(){
        let container = this.clear_container();

        let input_div = document.createElement("div");
        input_div.setAttribute("id", "container");

        let 
    },
    clear_container: function(){
        let container = document.getElementById("container");
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
        return container;
    }
}