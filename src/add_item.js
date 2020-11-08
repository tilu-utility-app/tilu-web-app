function search_item() {
    $("#icons").slideUp();
    $("#agg").show();
}

function go_home() {
    window.location.href = "home.html";
}

// If not logged in, go back to log-in page.
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      // No user is signed in.
      window.location.href = "login.html"
    }
    else {
        user_email = firebase.auth().currentUser.email;
        console.log(user_email);
    }
});

