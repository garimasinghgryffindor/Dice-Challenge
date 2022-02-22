var string1=(Math.floor(Math.random()*6)+1);
var string2=(Math.floor(Math.random()*6)+1);


document.querySelector(".img1").setAttribute("src",("images/dice"+string1+".png"));
document.querySelector(".img2").setAttribute("src",("images/dice"+string2+".png"));


if(string1>string2)
{
        document.querySelector(".container h1").textContent="🚩 Player 1 Wins!";
}
else if(string2>string1)
{
        document.querySelector(".container h1").textContent="Player 2 Wins! 🚩";
}
else
{
        document.querySelector(".container h1").textContent="Oops! It's a tie";
}
