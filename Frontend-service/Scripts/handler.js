let handler = {
    create: function () {
        let new_user = {};

        let __firstName = document.getElementById("firstName").value;
        if (__firstName == null) {
            alert("You did not write your first name correctly.");
        } else {
            new_user.firstName = __firstName;
        };

        let __lastName = document.getElementById("lastName").value;
        if (__lastName == null) {
            alert("You did not write your last name correctly.");
        } else {
            new_user.lastName = __lastName;
        };

        let __userName = document.getElementById("userName").value;
        if (__userName == null) {
            alert("You did not write your user name correctly.");
        } else {
            new_user.userName = __userName;
        };

        let __password = document.getElementById("password").value;
        if (__password == null) {
            alert("You did not write your password correctly.");
        } else {
            new_user.password = __password;
        };

        let __email = document.getElementById("email").value;
        if (__email == null) {
            alert("You did not write your e-mail correctly.");
        } else {
            new_user.email = __email;
        };

        let __phoneNumber = document.getElementById("phoneNumber").value;
        if (__phoneNumber == null) {
            alert("You did not write your phone number correctly.");
        } else {
            new_user.phoneNumber = __phoneNumber;
        };

        let __location = document.getElementById("location").value;
        if (__location == null) {
            alert("You did not write your location correctly.");
        } else {
            new_user.location = __location;
        };

        let __commentsAboutYou = document.getElementById("commentsAboutYou").value;
        if (__commentsAboutYou == null) {
            alert("You did not write 'your about' you correctly.");
        } else {
            new_user.commentsAboutYou = __commentsAboutYou;
        };

        console.log(new_user)
        controller.add_user(new_user);
    },

    submit: function(){
        controller.submit();
    },

        // let __profilePicture = document.getElementById("profilePicture").value;
        // if (__profilePicture == null) {
        //     alert("You did not load your profile picture correctly.");
        // } else {
        //     new_user.profilePicture = __profilePicture;
        // };

        // because your frontend controller will have a method that axios'es this to the backend
        
    
}