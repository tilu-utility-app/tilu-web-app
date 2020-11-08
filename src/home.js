function add_item() {
    window.location.href = "add_item.html"
}

function buy() {
    // TODO: Open iframe
}

// TODO: Show the utilities
function show_utilities() {
    console.log(user_email);
    db = firebase.firestore();
    userRef = db.collection("users").doc(user_email);
    userRef.get().then(function(userDoc){
    userData = userDoc.data();
    console.log(userData);
});
}

var user_email;

// If not logged in, go back to log-in page.
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      // No user is signed in.
      window.location.href = "login.html"
    }
    else {
        user_email = firebase.auth().currentUser.email;
        console.log(user_email);
        show_utilities();
    }
});

