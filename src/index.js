firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.location.href = "home.html"
    } else {
      // No user is signed in.
      window.location.href = "login.html"
    }
});
