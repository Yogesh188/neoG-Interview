var like = document.querySelector("#likeBtn");
var dislike = document.querySelector("#dislikeBtn");

var likeDiv = document.querySelector("#likeCounter");

var likeCounter = 0;

function increseLike(){
    likeCounter++;
    likeDiv.innerText=likeCounter;
    console.log(likeCounter);
}

function decreseLike(){
    likeCounter--;
    likeDiv.innerText=likeCounter;
    console.log(likeCounter);
}


like.addEventListener("click",increseLike);
dislike.addEventListener("click",decreseLike);