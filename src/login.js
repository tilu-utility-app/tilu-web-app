function login() {
    // Logged in till sign out
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
        // Authenticate with Google
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // Add the user to DB
            db = firebase.firestore();
            userRef = db.collection("users").doc(user.email);
            userRef.get().then(function(doc){
                if (!doc.exists) {
                    userRef.set({
                        utilities: []
                    }).then(function(){
                        window.location.href = "home.html"
                    });
                }
                else{
                    window.location.href = "home.html"
                }
            });
        });
    });
}
