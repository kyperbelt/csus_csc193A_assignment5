function showAlert() {
    document.getElementById("text-area").style.fontSize = "24pt";
}

function addStyles() {
    document.getElementById("text-area").style.fontWeight = "bold";
    document.getElementById("text-area").style.color = "blue";
    document.getElementById("text-area").style.textDecoration = "underline";
}

function removeStyles() {
    document.getElementById("text-area").style.fontWeight = "normal";
    document.getElementById("text-area").style.color = "black";
    document.getElementById("text-area").style.textDecoration = "none";
}

function toggleStyles() {
    if (document.getElementById("fancy").checked == true) {
        addStyles();
    } else {
        removeStyles();
    }
}

function mooFunc() {
    let text = document.getElementById("text-area").value;
    text = text.toUpperCase();
    let parts = text.split(".");
    text = parts.join("-Moo.");
    document.getElementById("text-area").value = text;
}



