let registration = {
    create: function () {
        console.log("Creating user")
        let newUser = this.createUserObject();
        if (this.verifyUser(newUser) == true) {
            this.sendToAPI(newUser);
            // userStorage.data.push(user);
            console.log("Correct user")
        } else {
            console.log("Please fill up all information required.")
        };

    },

    createUserObject: function () {
        let new_user = {};

        let firstNameInput = document.getElementById("firstName");
        if (firstNameInput != undefined) {
            new_user.firstName = firstNameInput.value;
        } else {
            alert("You did not write your first name correctly.");
        };

        let lastNameInput = document.getElementById("lastName");
        if (lastNameInput != undefined) {
            new_user.lastName = lastNameInput.value;
        } else {
            alert("You did not write your last name correctly.");
        };

        let userNameInput = document.getElementById("userName");
        if (userNameInput != undefined) {
            new_user.userName = userNameInput.value;
        } else {
            alert("You did not write your user name correctly.");
        };

        let passwordInput = document.getElementById("password");
        if (passwordInput != undefined) {
            new_user.password = passwordInput.value;
        } else {
            alert("You did not write your password correctly.");
        };

        let emailInput = document.getElementById("email");
        if (emailInput != undefined) {
            new_user.email = emailInput.value;
        } else {
            alert("You did not write your e-mail correctly.");
        };

        let phoneNumberInput = document.getElementById("phoneNumber");
        if (phoneNumberInput != undefined) {
            new_user.phoneNumber = phoneNumberInput.value;
        } else {
            alert("You did not write your phone number correctly.");
        };

        let locationInput = document.getElementById("location");
        if (locationInput != undefined) {
            new_user.location = locationInput.value;
        } else {
            alert("You did not write your location correctly.");
        };

        let commentsAboutYouInput = document.getElementById("commentsAboutYou");
        if (commentsAboutYouInput != undefined) {
            new_user.commentsAboutYou = commentsAboutYouInput.value;
        } else {
            alert("You did not write 'your about' you correctly.");
        };

        console.log(new_user);
        return new_user;
    },
    verifyUser: function (new_user) {
        if(new_user == undefined){
            return false;
        }

        let isValid = true;

        if ((new_user.firstName == undefined || new_user.firstName == "") &&
            (new_user.lastName == undefined || new_user.lastName == "") &&
            (new_user.userName == undefined || new_user.userName == "") &&
            (new_user.password == undefined || new_user.password == "") &&
            (new_user.email == undefined || new_user.email == "") &&
            (new_user.phoneNumber == undefined || new_user.phoneNumber == "") &&
            (new_user.location == undefined || new_user.location == "") &&
            (new_user.commentsAboutYou == undefined || new_user.commentsAboutYou == "")
        ) {
            isValid = false;
        } else {
            
            console.log("It is valid.");
        };
        return isValid;
    },

    sendToAPI: function (new_user) {
        axios.post('http://localhost:3001/api/user',
                new_user
            )
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                if (error) {
                    console.log(error);
                }
            });
    }
}