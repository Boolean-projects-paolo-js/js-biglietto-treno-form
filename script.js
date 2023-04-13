 const eleCalc = document.querySelector(".genera")
 eleCalc.addEventListener("click", function() {
    const name = document.getElementById("nome").value;
    const Kmdistanza = document.getElementById("distanza").value; 
    const età = document.getElementById("selezione-età").value;

    const prezzo = (Kmdistanza * 0.21);
    const prezzoMinore = (Kmdistanza * 0.21) - ((Kmdistanza * 0.21) * 20 / 100);
    const prezzoMaggiorenne = (Kmdistanza * 0.21) - ((Kmdistanza * 0.21) * 40 / 100);
    
    
    if (età == "minorenne") {
        document.getElementById("offerta").innerHTML = "Offerta Minori";
        document.getElementById("price").innerHTML = prezzoMinore.toFixed(2);
    }
    if (età == "over") {
        document.getElementById("offerta").innerHTML = "Offerta Over";
        document.getElementById("price").innerHTML = prezzoMaggiorenne.toFixed(2);
    }
    if (età == "standard") {
        document.getElementById("offerta").innerHTML = "Offerta Standard";
        document.getElementById("price").innerHTML = prezzo.toFixed(2);
    }
    

    document.getElementById("nome_pass").innerHTML = name ;
 })