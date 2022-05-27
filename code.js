//action/adventure, sci-fi, horror, comedy
//list of action movies
//list = [(2, PG), (2.5,PG),(2, PG-13), (2.5, PG-13),(2, R), (2.5,R)]
var actionMov = ["National Treasure", "Harry Potter and the Sorcerer's Stone", "Everest", "Black Panther", "John Wick", "The Revenant"];

//list of sci-fi movies
var sciFiMov = ["Tron: Legacy", "Star Wars: Episode VI - Return of the Jedi", "Doctor Strange in the Multiverse of Madness", "Avatar", "The Matrix", "Blade Runner"];

//list of comedy movies
var comedyMov = ["Sonic the Hedgehog", "Home Alone 2: Lost in New York", "Jumanji: The Next Level", "Forret Gump", "Step Brothers", "Funny People"];

//genreButtons
for(var i = 1; i < 4; i++) {
  buttonHighlight("genre" + i, "preferenceScreen", "customBtnCustom", rgb(40, 48, 68));
}

//button bar controls
//homeScreen
buttonHighlight("customBtnHome", "preferenceScreen", "customBtnCustom", rgb(40, 48, 68));
buttonHighlight("resultBtnHome", "movieScreen", "resultBtnResult", rgb(73, 17, 28));
//preferencescreen
buttonHighlight("homeBtnCustom", "homeScreen", "homeBtnHome", rgb(252, 186, 4));
buttonHighlight("resultBtnCustom", "movieScreen", "resultBtnResult", rgb(73, 17, 28));
//movieScreen
buttonHighlight("homeBtnResult", "homeScreen", "homeBtnHome", rgb(252, 186, 4));
buttonHighlight("customBtnResult", "preferenceScreen", "customBtnCustom", rgb(40, 48, 68));

//function for which button will be high lighted when a button is pressed
function buttonHighlight(button1, screen, button2, color) {
  onEvent(button1, "click", function( ) {
    setScreen(screen);
    setProperty(button2, "icon-color", color);
    
  });
}

//log the genre the use clicked
var genre = "";
onEvent("genre1", "click", function() {
  genre = "actionMov";
});
onEvent("genre2", "click", function() {
  genre = "sciFiMov";
});
onEvent("genre3", "click", function() {
  genre = "comedyMov";
});

//appLogic
onEvent("movieRevealBtn", "click", function( ) {
  //movieReveal Button
  setScreen("movieScreen");
  setProperty("resultBtnResult", "icon-color", rgb(73, 17, 28));
  MovieReveal();
});

//function for the conditions within the code
function MovieReveal() {
  //if genre equals actionMov
  if(genre == "actionMov") {
    console.log("test2");
    if(getProperty("ratingdropdown2", "text") == "PG") {
      if(getProperty("lengthdropdown", "value") == 2){
        console.log("test1");
        setProperty("resultTxt", "text", actionMov[0]);
        moviePage("https://www.youtube.com/watch?v=vqUPxNT8io4", "assets/nationalTreasure.png");
      }
      else {
        setProperty("resultTxt", "text", actionMov[1]);
        moviePage("https://www.youtube.com/watch?v=VyHV0BRtdxo", "assets/Philostone.png");
      } 
    } 
    
    else if(getProperty("ratingdropdown2", "text") == "PG-13") {
      if(getProperty("lengthdropdown", "value") == 2){
        setProperty("resultTxt", "text", actionMov[2]);
        moviePage("https://www.youtube.com/watch?v=5ZQVpPiOji0", "assets/everest.png");
      }
      else {
        setProperty("resultTxt", "text", actionMov[3]);
        moviePage("https://www.youtube.com/watch?v=xjDjIWPwcPU", "assets/blackPanther.png");
      }  
    } 
    
    else {
      if(getProperty("lengthdropdown", "value") == 2){
        setProperty("resultTxt", "text", actionMov[4]);
        moviePage("https://www.youtube.com/watch?v=2AUmvWm5ZDQ", "assets/wick.png");
      }
      else {
        setProperty("resultTxt", "text", actionMov[5]);
        moviePage("https://www.youtube.com/watch?v=LoebZZ8K5N0", "assets/revenant.png");
      }
    }
  }
  
  //if genre equals sciFiMov
  else if(genre == "sciFiMov") {
    if(getProperty("ratingdropdown2", "text") == "PG") {
      if(getProperty("lengthdropdown", "value") == 2){
        setProperty("resultTxt", "text", sciFiMov[0]);
        moviePage("https://www.youtube.com/watch?v=L9szn1QQfas", "assets/tron.png");
      }
      else {
        setProperty("resultTxt", "text", sciFiMov[1]);
        moviePage("https://www.youtube.com/watch?v=p4vIFhk621Q", "assets/jedi.png");
      }
    } 
    
    else if(getProperty("ratingdropdown2", "text") == "PG-13") {
      if(getProperty("lengthdropdown", "value") == 2){
        setProperty("resultTxt", "text", sciFiMov[2]);
        moviePage("https://www.youtube.com/watch?v=Rt_UqUm38BI", "assets/strange.png");
      }
      else {
        setProperty("resultTxt", "text", sciFiMov[3]);
        moviePage("https://www.youtube.com/watch?v=5PSNL1qE6VY", "assets/avatar.png");
      }  
    } 
    
    else {
      if(getProperty("lengthdropdown", "value") == 2){
        setProperty("resultTxt", "text", sciFiMov[4]);
        moviePage("https://www.youtube.com/watch?v=vKQi3bBA1y8", "assets/matrix.png");
      }
      else {
        setProperty("resultTxt", "text", sciFiMov[5]);
        moviePage("https://www.youtube.com/watch?v=dZOaI_Fn5o4", "assets/bladeRunner.png");
      }
    }
  }
  
  //if genre equals comedyMov
  else {
    if(getProperty("ratingdropdown2", "text") == "PG") {
      if(getProperty("lengthdropdown", "value") == 2){
        setProperty("resultTxt", "text", comedyMov[0]);
        moviePage("https://www.youtube.com/watch?v=szby7ZHLnkA", "assets/sonic.png");
      }
      else {
        setProperty("resultTxt", "text", comedyMov[1]);
        moviePage("https://www.youtube.com/watch?v=5h9VDUNtoto", "assets/homeAlone.png");
      }
    } 
    
    else if (getProperty("ratingdropdown2", "text") == "PG-13") {
      if(getProperty("lengthdropdown", "value") == 2){
        setProperty("resultTxt", "text", comedyMov[2]);
        moviePage("https://www.youtube.com/watch?v=rBxcF-r9Ibs", "assets/jumanji.png");
      }
      else {
        setProperty("resultTxt", "text", comedyMov[3]);
        moviePage("https://www.youtube.com/watch?v=bLvqoHBptjg", "assets/gump.png");
      }
    } 
    
    else {
      if(getProperty("lengthdropdown", "value") == 2){
        setProperty("resultTxt", "text", comedyMov[4]);
        moviePage("https://www.youtube.com/watch?v=8QKE96wZTkw", "assets/stpBrothers.png");
      }
      else {
        setProperty("resultTxt", "text", comedyMov[5]);
        moviePage("https://www.youtube.com/watch?v=kzciY15Q3BA", "assets/funnyPeople.png");
      }
    }
  }
}

function moviePage(link, img) {
  setProperty("trailerLinkTxt", "text", link);
  setProperty("moviePoster", "image", img);
  openLink();
}
function openLink() {
  onEvent("trailerLinkTxt", "click", function( ) {
    var link = getProperty("trailerLinkTxt", "text");
    open(link);
  });
}


