begincheck = function(){
  iso()
}

iso = function(){
  ha = window.location.hash
  console.log(ha)
  window.location.hash = ""
  if (ha == "#link") {
    turnlink()
} else if (ha == "#so") {

 } else {
}
}

cleanmain = function(){
  mg = document.getElementById("main")
    mg.innerHTML=""
    mg.className=""
}
hideico = function(id){document.getElementById(id).className = "nav-link h4 m-1 p-0 d-none";}
showico = function(id){document.getElementById(id).className = "nav-link h4 m-1 p-0";}

turnhome = function(){
  cleanmain()
  hideico("homeico")
  window.location.hash = ""
}



































turnlink = function (){
  if (window.location.hash != "#link"){
    cleanmain()
    if(window.location.hash == ""){
      showico("homeico");
    }
    window.location.hash = "#link"
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        filllink(this);
      }
    };
    xhttp.open("GET", "resources/xml/link.xml", true);
    xhttp.send();
  }
}
function filllink(xml){
  var i,d;
  var a = ""
  var xmlDoc = xml.responseXML;
  var c = xmlDoc.getElementsByTagName("CELL")[0].childNodes[0].nodeValue
  var x = xmlDoc.getElementsByTagName("LINE");
  var xlength =x.length
  for (i = 0; i <xlength;  i++) {
    d = c
    d =d.replace("$ICON",x[i].getElementsByTagName("ICON")[0].childNodes[0].nodeValue)
    d =d.replace("$LINK",x[i].getElementsByTagName("LINK")[0].childNodes[0].nodeValue)
    d= d.replace("$TITLE",x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue)
    d= d.replace("$MORE",x[i].getElementsByTagName("MORE")[0].childNodes[0].nodeValue)
    a += d
  }
  var f = xmlDoc.getElementsByTagName("FRAME")[0].childNodes[0].nodeValue
  f = f.replace("$MAIN",a)
  mg = document.getElementById("main")
  mg.className = "container-lg mx-auto"
  mg.innerHTML = f;
}


//real run
begincheck()