// const fileInput = document.querySelector('input[type="file"]');
// const eventLog = document.querySelector('.event-log-contents');
// const reader = new FileReader();

// function handleEvent(event){
//     eventLog.textContent = eventLog.textContent + `${event.type}: ${event.loaded} hello\n`;
//     if(event.type == "load"){
        
//     }
// }

// function onClick(event) {
//     filecontent = "";
//     var myFile = event.files[0];
//     var reader = new FileReader();

//     reader.addEventListener('load', function (e) {
//       filecontent = e.target.result;

//     });
//     reader.readAsBinaryString(myFile);
//   }

// creating the button
var button = document.createElement("button");
button.innerHTML = "CLICK ME";

// append the button to the html
var body = document.getElementById("demo");
body.appendChild(button);

    
 // Adding event handler
    button.addEventListener("click", function(){
    alert("did something");
})

