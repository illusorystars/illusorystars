function jumpto(goal){
    spot = window.location.hash
    if (spot == goal){
        return -1
    } 
    if (spot == ""){
        hometo()
    }
    window.location.hash = goal
    readhash()
}
function readhash () {
    spot = window.location.hash
    mg = document.getElementById("main")
    mg.innerHTML = ""
    mg.className = ""
    switch (spot.slice(0, 7)) {
        case "gamelist":
            break
        case "bloglist":
            代码块
            break
        case "bookmark":

        case "toollist":


        default:

    }
}

function jsget(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
