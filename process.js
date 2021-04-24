class ListNode{
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(head = null) {
        this.head = head;
    }
}

async function submitTime() {
    var time = document.getElementById("timeenter").value;
    console.log(time);
    return time;
}
async function submitAssign() {
    var numofAssignments = document.getElementById("assignments").value;
    console.log(numofAssignments);
    var i = 0;
    var j = i+1;
    for (i = 0; i < numofAssignments;i++) {
        var br = document.createElement('br');
        var br2 = document.createElement('br');
        var newList = document.createElement("INPUT");
        var newBtn = document.createElement("button");
        newBtn.innerHTML = "Next";
        newBtn.setAttribute("id", i);
        newList.setAttribute("type", "text");
        newList.setAttribute("placeholder", "Enter Assignment");
        newList.setAttribute("id", i);
        document.body.appendChild(br);
        document.body.appendChild(br2);
        document.body.appendChild(newList);
        document.body.appendChild(newBtn);
        j++;
        
        
        console.log(i);
    }
    var i = 0;
    var j = i + 1;
    //Loop to allow user to click each indivdual next button. Still a work in progress
    while (i < numofAssignments) {
        document.getElementById(j).onclick = function () {
            var name = document.getElementById(i).value;
            i++;
            j++;
            console.log(name);

        }  
    }
    
    
    
}
async function submitElement() {
    var i = 0;
}
