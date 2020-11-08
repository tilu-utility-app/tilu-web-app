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
$(document).ready(function(){
    enter();
});

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
    dict["toiletpaper"] = tolietpaper;

    //dummy example
    document.getElementById("agg").innerHTML = dict[product][0]["title"] 
                            + dict[product][0]["thumbnail"] + dict[product][0]["link"];
    
    
    //
    
    $("#icons").slideUp(); //icons are gone
    setTimeout(function(){ $("#agg").show(); }, 400);

    let card = document.getElementsByTagName("div")[1];
    //description button for the product
    let des = document.createElement("button");
    des.innerHTML = "description";
    card.appendChild(des);

    //add button : adds icon to the home
    let add = document.createElement("button");
    add.innerHTML = "add";
    add.addEventListener('click', function() {
        icon_to_home(add.innerHTML);
    }, false);
    card.appendChild(add);
    
    
    //$(".card_columns").show()
}
//TODO: add the icon to the home inventory
/*
function icon_to_home(icon){
    var home = document.getElementsByTagName("home.html.body")[0];
    let iconButton = document.createElement("button");
    iconButton.innerHTML = icon;
    home.appendChild(iconButton);
}*/

//Go back to the icon search bar
function back(){
    $("#icons").show();
    $("#agg").slideUp();
}

//Back to home
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

$(document).ready(function(){
    create_icons();
});



var util = ["Toilet Paper", "Detergent", "Egg", "Diper", "Water","Milk",
        "apple","Oil","Soap","Toothpaste","Shampoo"];

//create a dictionary of {product : matching product card}
var dict = {}
for (i=0; i<util.length;i++){
    var item = util[i].toLowerCase().replace(/\s+/g, '');
    dict[item]=i;
}
//dummy dataset example for the result of the product search
var tolietpaper=[{"title":"soft paper","thumbnail":"img", "link":"#"}];







