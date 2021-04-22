async function submitTime(){
    var time = document.getElementById("timeenter").value;
    console.log(time);
    return time;
}
async function submitAssign() {
    var numofAssignments = document.getElementById("assignments").value;
    console.log(numofAssignments);
    for (i = 0; i < numofAssignments; i++) {
        var br = document.createElement('br');
        var br2 = document.createElement('br');
        var newList = document.createElement("INPUT");
        var newBtn = document.createElement("button");
        newBtn.innerHTML = "Next";
        newList.setAttribute("type", "text");
        newList.setAttribute("placeholder", "Enter Assignment");
        document.body.appendChild(br);
        document.body.appendChild(br2);
        document.body.appendChild(newList);
        document.body.appendChild(newBtn);
        console.log(i);
    }
}
async function submitElement() {
    var i = 0;
}
