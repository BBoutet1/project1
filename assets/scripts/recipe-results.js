$(document).ready(function() {
    

    var recipes = JSON.parse(localStorage.getItem("recipes"));
    console.log(recipes);

    $(".results-subtitle").append(localStorage.getItem("search"))

    printResults(recipes)

});


function printResults(recipes){

    for(i = 0; i < recipes.length; i++){
        printResult(recipes[i]);
    }
}

function printResult(recipe){

    var cardEl = $("<div>").addClass("card recipe-result");
    var cardContentEl = $("<div>").addClass("card-content recipe-result-content");
    var mediaEl = $("<div>").addClass("media");
    var mediaLeftEl = $("<div>").addClass("media-left");
    var figureEl = $("<figure>").addClass("image is-96x96");
    var imgEl = $("<img>").addClass("result-thumbnail").attr("src","https://spoonacular.com/recipeImages/" + recipe.image).attr("alt",recipe.title);
    
    figureEl.append(imgEl);
    mediaLeftEl.append(figureEl);

    var mediaContentEl = $("<div>").addClass("media-content");
    var recipeNameEl = $("<p>").addClass("is-6 recipe-name").text(recipe.title)
    
    recipeNameEl.click(function() {
        
        console.log(recipe.id);
    });

    var popoverEl = getPopOver();
    
    var contentEl = $("<div>").addClass("content is-small").text("placeholder text");

    mediaContentEl.append(recipeNameEl).append(popoverEl).append(contentEl);

    mediaEl.append(mediaLeftEl).append(mediaContentEl);

    cardContentEl.append(mediaEl);
    
    cardEl.append(cardContentEl);


    $(".results").append(cardEl);

}

function getPopOver(){

    var popoverEl = $("<div>").addClass("popover is-popover-bottom");
    var buttonEl = $("<button>").addClass("button is-info popover-trigger info-button").text("More Info");

    buttonEl.click(function(){

        event.preventDefault();
        event.stopPropagation();
    })

    var contentEl = $("<div>").addClass("popover-content");
    var iframeEl = $("<iframe>").addClass("info-frame");

    contentEl.append(iframeEl);
    buttonEl.append(contentEl);
    popoverEl.append(buttonEl).append(contentEl);

    return popoverEl;
}




