$(function () {
console.log("It works.")
$("title").html("Home Acme, Inc.");
   
$.ajax({
    url: "js/acme.json"
    , dataType: "json"
    , success: function (data) {
      console.log(data);
      var anv = data.Links.link1;
      var exp = data.Links.link2;
      var dec = data.Links.link3;
      var traps = data.Links.link4;
      console.log(anv);
    console.log(exp);
    console.log(dec);
    console.log(traps);
        
      document.getElementById("anvils").innerHTML = anv;
      document.getElementById("explo").innerHTML = exp;
      document.getElementById("decoy").innerHTML = dec;
      document.getElementById("trap").innerHTML = traps;
    }
  });
  });

// Intercept the menu link clicks
$("#page-nav").on("click", "a", function (evt) {
  evt.preventDefault();
  // With the text value get the needed value from the weather.json file
  var acmeNav = $(this).text(); // Franklin, etc...
  
      if (acmeNav === "Home") {
        document.getElementById("page-main").style.display = "block";
        document.getElementById("product_content").style.display = "none";
          
        document.getElementById("titles").innerHTML = 
    "Home Acme, Inc.";
      }
      
      else {
          document.getElementById("page-main").style.display = "none";
          document.getElementById("product_content").style.display = "block";
          
      }
    
//  document.getElementById("page_content").style.display = "block";
    
  console.log('Name is ' + acmeNav);
  $.ajax({
    url: "js/acme.json"
    , dataType: "json"
    , success: function (data) {
      console.log(data);
      console.log(data[acmeNav]);
      
      var name = data[acmeNav].name;
      
      var picture = data[acmeNav].path;
      var descrip = data[acmeNav].description;
      var manufact = data[acmeNav].manufacturer;
      var review = data[acmeNav].reviews;    
      var price = data[acmeNav].price;
        
      console.log(name);
      console.log(descrip);
      console.log(manufact);
      console.log(review);
      console.log(price);
        
    document.getElementById("titles").innerHTML = name + 
    " Acme, Inc."
        
    document.getElementById("product_name").innerHTML = name;
    
    document.getElementById("product_picture").innerHTML = '<img src="' + picture + '" alt="pictures">';
     document.getElementById("product_description").innerHTML = descrip;
        
     document.getElementById("product_manufacturer").innerHTML = "Made by: " + manufact;
     document.getElementById("product_reviews").innerHTML = "Reviews: " + review + "/5 stars";
     document.getElementById("product_price").innerHTML = "price: $" + price;

     
    }
  });
});