function fetchThatStuffYo(){
    fetch('https://api.kanye.rest') 
    .then(function(kanyesBest) {
        return kanyesBest.json();
      })
      .then(function(jsonData) {
        let kanye = jsonData.quote
        let best = document.getElementById("kanyesbest")
        best.textContent = '"' +kanye+'"' + " - Kanye West"
        console.log(kanye)
      });
}
document.getElementById("wisdomgiver").addEventListener("click",fetchThatStuffYo)