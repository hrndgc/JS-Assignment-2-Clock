function currentTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    
    if(h >= 12){
        h -= 12;
        session = "PM";}

    if(h == 0){
        h = 12;}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("tr").innerText = time;
    document.getElementById("tr").textContent = time;
    setTimeout(currentTime, 1000);
}
currentTime();

function cetTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    h -= 1;

    if(h < 0){
        h += 24;
    }

    if(h >= 12){
        h -= 12;
        session = "PM";}

    if(h == 0){
        h = 12;}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("cet").innerText = time;
    document.getElementById("cet").textContent = time;
    setTimeout(cetTime, 1000);
}
cetTime();

function zuluTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    h -= 3;
    
    if(h < 0){
        h += 24;
    }
    
    if(h >= 12){
        h -= 12;
        session = "PM";}

    if(h == 0){
        h = 12;}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("zulu").innerText = time;
    document.getElementById("zulu").textContent = time;
    setTimeout(zuluTime, 1000);
}
zuluTime();


