var aktolor;
aktolor = 0;

function ok() {
    alert("discord: flop.geming")
}

document.getElementById("kolor").onclick = function() {
    if(aktolor == 0){
        document.getElementById("bd").style.backgroundColor = "#FFBB5C";
        document.getElementById("n").style.backgroundColor = "#FF9B50";
        document.getElementById("bd").style.color = "black";
        document.getElementById("navbar").style.backgroundColor = "#FF9B50";
        document.getElementById("main").style.backgroundColor = "#E25E3E";
        aktolor = 1;
    }
    else if(aktolor == 1){
        document.getElementById("bd").style.backgroundColor = "#ECEE81";
        document.getElementById("n").style.backgroundColor = "#8DDFCB";
        document.getElementById("bd").style.color = "black";
        document.getElementById("navbar").style.backgroundColor = "#8DDFCB";
        document.getElementById("main").style.backgroundColor = "#82A0D8";
        aktolor = 2;
    }
    else if(aktolor == 2){
        document.getElementById("bd").style.backgroundColor = "#116D6E";
        document.getElementById("n").style.backgroundColor = "#321E1E";
        document.getElementById("bd").style.color = "white";
        document.getElementById("navbar").style.backgroundColor = "#321E1E";
        document.getElementById("main").style.backgroundColor = "#4E3636";
        aktolor = 3;
    }
    else {
        document.getElementById("bd").style.backgroundColor = "#35155D";
        document.getElementById("n").style.backgroundColor = "#892CDC";
        document.getElementById("bd").style.color = "white";
        document.getElementById("navbar").style.backgroundColor = "#892CDC";
        document.getElementById("main").style.backgroundColor = "#512B81";
        document.getElementById("bd").style.backgroundImage = "none"
        aktolor = 0;
    }
    console.log(aktolor)
}
//#FF9B50
//#E25E3E
//#C63D2F

//
//
//
//