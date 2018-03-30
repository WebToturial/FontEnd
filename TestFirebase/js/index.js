//
// Get the currently signed-in user
firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
      
        // User is signed in.
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if(user != null){
            
            var email_id = user.email;

            document.getElementById("user_para").innerHTML = "Welcome User: " + email_id;

        }


    } else {

        // No user is signed in.
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }

  });

function login(){
    
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert("Error: " + errorMessage);
    });

}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
    });
}

function register(){

    var userEmail = document.getElementById("reg_email").value;
    var userPass = document.getElementById("reg_password").value;
    var userConfirmPass = document.getElementById("reg_confirm_password").value;


    //if ((userEmail.length > 0) && (userPass.length > 0) && (userConfirmPass.length)){
    if( (!userEmail.checkValidity()) && (userPass.checkValidity()) && (userConfirmPass.checkValidity())){}

        if(userPass != userConfirmPass) {
            
            window.alert("Error! Mat khau va xac nhan mat khau khong trung khop.")
        }
        else{
            // Register Firebase
            firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                window.alert("Error: " + errorMessage);
            });

        }
    }
    else {

        window.alert("Error! Vui long dien day du thong tin!");

    }
}