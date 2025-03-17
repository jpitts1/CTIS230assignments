myitem = document.getElementById("firsttest"); // Returns a reference back to "firsttest".

myitem.addEventListener("click", onClick); // Makes an action happen when you click the text.

function onClick() {  // When you click the text, it turns it green.
    myitem.style.color = "green";  
    myitem.style.fontSize = "36px" 
}
    
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
    otheritem.style.color = "red";  
    anotherbutton.style.fontSize = "48px"
}

anotherbutton = document.getElementById("anotherbuttontest");

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}

myitem = document.getElementById("finaltest"); // Returns a reference back to "firsttest".

myitem.addEventListener("click", onClick); // Makes an action happen when you click the text.

function onClick() {  // When you click the text, it turns it green.
    myitem.style.color = "blue";   
}