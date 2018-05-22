var controller = {
    add_user: function (_newUser) {
        axios.post('http://localhost:3001/addUser', {
                newUser: _newUser
            })
            .then((response) => {
                console.log(response);
                //this.view.render_add(response.data);
            })
            .catch((error) => {
                if (error) {
                    console.log(error);
                }
            });
    },

    submit: function(){
        this.view.submit();
    }
};