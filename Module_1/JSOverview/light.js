function controlLight() {
    if (document.getElementById("btnControl").innerText == "Turn On") {
        document.getElementById("light").src = "images/on.png";
        document.getElementById("btnControl").innerText = "Turn Off";
    }
    else {
        document.getElementById("light").src = "images/off.png";
        document.getElementById("btnControl").innerText = "Turn On";
    }
}