var controller = {
    add_user: function (_newUser) {
        axios.post('http://localhost:3001/api/user', {
            newUser: _newUser
        })
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                if (error) {
                    console.log(error);
                } 
            });
    },

    submit: function(){
        this.view.submit();
    },

    verify_registration_newUser: function (){
        let new_user = {};
        let isValid = true;

        let __firstName = document.getElementById("firstName").value;
        if (__firstName == "") {
            alert("You did not write your first name correctly.");
            isValid = false;
        } else {
            new_user.firstName = __firstName;
        };

        let __lastName = document.getElementById("lastName").value;
        if (__lastName == "") {
            alert("You did not write your last name correctly.");
            isValid = false;
        } else {
            new_user.lastName = __lastName;
        };

        let __userName = document.getElementById("userName").value;
        if (__userName == "") {
            alert("You did not write your user name correctly.");
            isValid = false;
        } else {
            new_user.userName = __userName;
        };

        let __password = document.getElementById("password").value;
        if (__password == "") {
            alert("You did not write your password correctly.");
        } else {
            new_user.password = __password;
        };

        let __email = document.getElementById("email").value;
        if (__email == "") {
            alert("You did not write your e-mail correctly.");
            isValid = false;
        } else {
            new_user.email = __email;
        };

        let __phoneNumber = document.getElementById("phoneNumber").value;
        if (__phoneNumber == "") {
            alert("You did not write your phone number correctly.");
            isValid = false;
        } else {
            new_user.phoneNumber = __phoneNumber;
        };

        let __location = document.getElementById("location").value;
        if (__location == "") {
            alert("You did not write your location correctly.");
            isValid = false;
        } else {
            new_user.location = __location;
        };

        let __commentsAboutYou = document.getElementById("commentsAboutYou").value;
        if (__commentsAboutYou == "") {
            alert("You did not write 'your about' you correctly.");
            isValid = false;
        } else {
            new_user.commentsAboutYou = __commentsAboutYou;
        };

        console.log(new_user);
        //do it only when isValid is true, otherwise ...
        if(isValid == true){
            handler.create_newUser(new_user);
        }else{
            console.error("error");
        }
        
    }

};


 /*
                    1. If response is correct, redirect to new page as logged user
                    2. Otherwise, report error information
                */
                //this.view.render_add(response.data);

// if (req.body.newUser.firstName == undefined || lastName == undefined ||
//     userName == undefined || mail == undefined ||
//     password == undefined) {
//   res.send("Error");
// } else {
//   res.send()
// }