function add_item() {
    window.location.href = "add_item.html"
}

function buy() {
    // TODO: Open iframe
}
function getLink(id){
    var link_dict = {246: "https://www.coupang.com/", 248: "https://www.gmarket.co.kr/"};
    return link_dict[id];
}
var util_dict = {246: "facebook", 248: "twitter"};

function openNav() {
  document.getElementById("mySidebar").style.width = "450px";
  document.getElementById("main").style.marginRight = "450px";
    $("#close").show();
}

function openNavUtil(element){
    var link = getLink(element.id);
    $("iframe").attr("src", link);
    document.getElementById("mySidebar").style.width = "450px";
    document.getElementById("main").style.marginRight = "450px";
    $("#close").show();
}
function closeNav() {
    
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
    $("#close").hide();
}

function add(id, name, logo){
    var dv = document.createElement("div");
    dv.className = "col-md-2";
    var bt = document.createElement("button");
    bt.className = "btn btn-light btn-circle btn-xl util";
    bt.id = id;
    bt.name = name;
    bt.addEventListener("click", openNavUtil);
    bt.innerHTML = '<i class="fab fa-facebook-f" style="font-size:64px"></i>';
    dv.appendChild(bt);
    var bar = document.getElementById("bar");
    bar.insertBefore(dv, bar.firstChild);
}

function closeModal(){
    modal.style.display = "none";
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

