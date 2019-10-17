var counter = 3;

function upvote() {
counter = counter + 1;
document.getElementById("votes").innerHTML = counter + " Votes";

}

function downvote() {
    counter = counter - 1;
    document.getElementById("votes").innerHTML = counter + " Votes";
}