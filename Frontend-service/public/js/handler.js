let handler = {
    create_newUser: function () {
        if (controller.verify_registration_newUser() == true) {
            console.log(new_user);
        } else {
            alert("This user already exists.")
        }
    },

    create: function () {
         controller.add_user(_newUser)
        /* 
            1. Create User Object
            2. Validate User Object
            3. If valid, send to controller
        */
    },

    /*
        @returns - user object
    */
    createUserObject: function () {
        //create new user object from fields on website

    }

    let __profilePicture = document.getElementById("profilePicture").value;
    if (__profilePicture == null) {
        alert("You did not load your profile picture correctly.");
    } else {
        new_user.profilePicture = __profilePicture;
    };

    // because your frontend controller will have a method that axios'es this to the backend


}