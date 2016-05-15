//Initiate the requirements
var express          = require("express"),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    methodOverride   = require("method-override"),
    app              = express();
    
    
//App Configuration    
mongoose.connect("mongodb://localhost/recipe_world");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extend:true}));
app.use(methodOverride("_method"));//overrride method


//Database Setup
//2- Create a Schema
var recipeSchema = new mongoose.Schema({
    title:String,
    image: String,
    time:String,
    calories:String,
    ingredient:String,
    recipe:String,
    created:{type:Date, default:Date.now}
});
//3- Create model
var Recipe = mongoose.model("Recipe", recipeSchema);

////TESTING
// Recipe.create({
//     title:"new recipe",
//     image:"https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/10/106/106398/pgmvtg2ha1c72fci4wroqtguaxaqzrcgnse82yop7njq4i0mjjbbql68y7xa0he0-f.jpg",
//     time:"20 minutes",
//     calories:"400",
//     ingredient:"eggs, milk, water",
//     recipe: "1- cooking everything on oven"
// }, function(error,recipeCreated){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(recipeCreated);
//     }
// });


//ROUTES
//HOME PAGE
app.get("/", function(req,res){
   res.render("Home"); 
});


//INDEX ROUTE
app.get("/recipes", function(req, res) {
    //Display all the recipes that stored in the database
    Recipe.find({}, function(error, recipes){
        if(error){
            console.log("There is something wrong !!!!");
            console.log(error);
        }else{
            res.render("index", {recipes:recipes});
        }
    });
});

//NEW ROUTE // 
app.get("/recipes/new", function(req, res) {
   res.render("new") ;
});

//CREATE ROUTE
app.post("/recipes", function(req, res){
    //Add new receipe:
   Recipe.create(req.body.recipe , function(error, recipe){
       if(error){
           console.log("Somthing is wrong !!");
           console.log(error);
       }else{
           res.redirect("/recipes");
       }
   });
});


//SHOW ROUTE:
app.get("/recipes/:id", function(req, res) {
    
    Recipe.findById(req.params.id, function(error, recipes){
       if(error){
           console.log(error);
       } else{
           res.render("show", {recipe:recipes});
       }
    });
});

//EDIT ROUTE: This route will show an editable page
app.get("/recipes/:id/edit", function(req, res) {
    var post = req.params.id;
    
    Recipe.findById(post, function(error, foundPost) {
        if (error){
            res.render("/recipes");
        }else{
             res.render("edit",{recipe:foundPost}); 
        }
    });
  
});


//UPDATE ROUTE
app.put("/recipes/:id", function(req,res){
    var id = req.params.id;
    var post = req.body.recipe;
    //req.body.blog.body= req.sanitize(req.body.blog.body);// for sanitization
    
    Recipe.findByIdAndUpdate(id, post, function(error, updatedPost){
       if(error){
           res.redirect("/recipes")
       } else{
           res.redirect("/recipes/" +id);
       }
    });
});


//DELETE ROUTE:
app.delete("/recipes/:id", function(req,res){
   var recipe_id = req.params.id;
   
   Recipe.findByIdAndRemove(recipe_id, function(error, removedRcecipe){
      if(error){
          console.log(error);
          res.redirect("/recipes");
      } else{
          res.redirect("/recipes");
      }
   });
});


//SERVER LISTENER
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server starts");
});