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
    var numofHours = document.getElementById("timeenter").value;
    var percent = 100 / numofAssignments;
    var timeEach = (numofHours / numofAssignments)*60;
    console.log(numofAssignments);
    var i = 0;
    for (i = 0; i < numofAssignments;i++) {
        var br = document.createElement('br');
        var br2 = document.createElement('br');
        var newList = document.createElement("INPUT");
        var newDate = document.createElement("INPUT");
        newList.setAttribute("type", "text");
        newList.setAttribute("placeholder", "Enter Assignment");
        newList.setAttribute("id", i);
        /*newList.setAttribute("width", "300px");
        newList.setAttribute("height", "300px");*/
        newDate.setAttribute("type", "text");
        newDate.setAttribute("placeholder", "Due Date (YYYY-MM-DD)");
        /*newDate.setAttribute("height", "300px");
        newDate.setAttribute("width", "300px");*/
        newDate.setAttribute("id", "a"+i);
        document.body.appendChild(br);
        document.body.appendChild(br2);
        document.body.appendChild(newList);
        document.body.appendChild(newDate);
    }
    //Creating Add Assignments Button
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "div1");
    var newBtn = document.createElement("button");
    newBtn.innerHTML = "Add Assignments";
    newBtn.setAttribute("id", "sub");
    var br3 = document.createElement('br');
    var br4 = document.createElement('br');
    document.body.appendChild(br3);
    document.body.appendChild(br4);
    document.body.appendChild(newDiv);
    document.getElementById("div1").appendChild(newBtn);
    var i = 0;
    var assignments = new Array();
    var listHeader = document.createElement('h2');
    listHeader.setAttribute("id", "titleList");
    listHeader.innerHTML="Order to work on Assignments:";
    var br5 = document.createElement('br');
    var ol1 = document.createElement('ol');
    ol1.setAttribute("id","myOl1")
    
    //var dueDates = new Array();
    //Reading input in each of Assignment Boxes
        document.getElementById("sub").onclick = function () {
            while (i < numofAssignments) {
                console.log(document.getElementById(i).value);
                console.log(document.getElementById("a" + i).value);
                var temp = [document.getElementById(i).value, document.getElementById("a" + i).value];
                assignments.push(temp);
                
                i++;
            }
            //sorts dates using '-' in between and in Year-Month-Day
            assignments.sort(function(a, b) {
                var dateA = new Date(a[1]), dateB = new Date(b[1]);
                return dateA - dateB;
            });
            console.log(assignments);
            document.body.appendChild(listHeader);
            document.body.appendChild(ol1);
            for (i = 0; i < numofAssignments; i++){
                var li1 = document.createElement('li');
                console.log(assignments[i][0]);
                li1.innerHTML = assignments[i][0]+ " - "+ Math.round(percent*100)/100+"%"+" - "+timeEach+" mins";
                document.getElementById("myOl1").appendChild(li1);
            }

            
    }
    
    
    
    
}
compare_dates = function(date1,date2){

    d1= new Date(date1[1]);
    d2= new Date(date2[1]);
    if (d1>d2) return 1;
     else if (d1<d2)  return -1;
     else return 0;
  }
