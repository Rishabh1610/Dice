//alert("hi")
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage= "dice" + randomNumber1 +".png"
var randomImage1="images/"+randomImage;

var no=document.querySelectorAll("img")[0]
//console.log(no)
no.setAttribute("src",randomImage1)

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2= "dice" + randomNumber2 +".png"
var randomImage2="images/"+randomImage2;

var no2=document.querySelectorAll("img")[1]
//console.log(no)
no2.setAttribute("src",randomImage2)


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Won"

}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Won";
}

else{
    document.querySelector("h1").innerHTML="Tie"
}