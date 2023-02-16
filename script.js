let random1 = Math.floor(Math.random() * 6) + 1;
let random2 = Math.floor(Math.random() * 6) + 1;
let img1 = document.getElementsByClassName('cube1-img');
img1[0].setAttribute("src", `Assests/dice${random1}.png`);
let img2 = document.getElementsByClassName('cube2-img');
img2[0].setAttribute("src", `Assests/dice${random2}.png`);
if (random1 > random2) {
    document.getElementsByClassName('heading')[0].innerHTML = "Player 1 wins";
}else if(random1 < random2){
    document.getElementsByClassName('heading')[0].innerHTML = 'Player 2 wins';
}else{
    document.getElementsByClassName('heading')[0].innerHTML = 'Draw!';
}

