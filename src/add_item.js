//For searching input : enter == onclick
function enter(){
    $(document).ready(function(){
    var input = document.getElementById("product_input");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById("myBtn").click();
      }
    })
});
}

//For Searched input : get input from search bar, and search
function get_input(){
    var product = document.getElementById("product_input").value;  
    search_item(product);
}

//For making icon buttons
function create_icons(){
    $(document).ready(function(){
    let body = document.getElementsByTagName("div")[0];
    var col = 0;

    for (i=0 ; i < util.length; i++) {
        let button = document.createElement("button");
        button.innerHTML = util[i];
        button.addEventListener('click', function() {
            match_name(button.innerHTML);
        }, false);
        
        if(col >5){ //change line
            var br = document.createElement("br");
            body.appendChild(br);
            col = 0;
        }
        body.appendChild(button); 
        col = col+1;
  }; 
});
}

//For searched Icons : put name into the search bar for consistency, and search
function match_name(name){ 
    document.getElementById("product_input").value = name;
    search_item(name);
}

function search_item(p) {
    var product = p.toLowerCase().replace(/\s+/g, '');
    document.getElementById("agg").innerHTML = dict[product];
    $("#icons").slideUp(); //icons are gone
    setTimeout(function(){ $("#agg").show(); }, 400);
}

function back(){
    $("#icons").show();
    $("#agg").slideUp();
}

function go_home() {
    window.location.href = "home.html";
}

// Get the products under a category
// The products catalogue for a category is obtained via an API call
var db = firebase.firestore();

async function get_products(product_category){
    cat_list = [];
    await db.collection("products").doc(product_category).collection("catalogue").get().then(function(cat){
        cat.forEach(function(item){
            cat_list.push(item.data());
        });
    }); 
    return cat_list;
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

$(document).ready(function(){
    create_icons();
});

$(document).ready(function(){
    enter();
});

var util = ["Toilet Paper", "Detergent", "Egg", "Diper", "Water","Milk",
        "apple","thanh","hunger","pain","sleeep"];

//create a dictionary of { product : matching product card}
var dict = {}
for (i=0; i<util.length;i++){
    var item = util[i].toLowerCase().replace(/\s+/g, '');
    dict[item]=i;
}

get_products("toilet-paper").then(console.log);
