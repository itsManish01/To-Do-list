var i=1;
var pending=0;
function create(){
    let input=document.getElementById("input").value;
    let tsk=input.toUpperCase();
    let tab=document.getElementById("main");
    if(input=='' || input==' ' || input=='  ' || input=='   '){
        alert("Please Enter Something!!");
        return;
    }
    
    tab.innerHTML+=`<div class="row" id="r${i}">
            <div class="task" id="t${i}">${tsk}</div>
            <div class="done">
                <button type="button" onclick="done(${'t'+i},r${i})" id="btnD">Done</button>
            </div>
            <div class="remove">
                <button type="button" onclick="remove(r${i})" id="btnR">Remove</button>
            </div>
        </div>`;  
i++;
pending++;
}
function clr(){
    document.getElementById("input").value='';
}

function done(iden,idenr){
    iden.style="text-decoration: line-through;";
    pending--;
    idenr.style="background-color: rgba(221, 25, 74, 0.767);";
}
function remove(iden){
    // iden.style="transform:scale(0);transition: 0.5s;"
   iden.style="display:none;";    
}