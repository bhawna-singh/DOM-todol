window.onload=function()
{
    let newtask=document.getElementById('newtask');
    let addtask=document.getElementById('addtask');
    let todolist=document.getElementById('todolist');
    addtask.onclick=function()
    {
        let li=document.createElement('li');
        //to delete an element'x' 
        let xbtn=document.createElement('button');
        xbtn.innerText='x';
        xbtn.onclick=function(event)
        {event.target. parentElement.remove();}
// up button to move an element upwards'^'

    let upbtn=document.createElement("button");
    upbtn.innerText='^';
    upbtn.onclick=function(event)
    {event.target.parentElement.parentElement.insertBefore(event.target.parentElement,event.target.parentElement.previousElementSibling);}
    let downbtn=document.createElement("button");
// down button to move an element downwards'>'

    downbtn.innerText='>';
    downbtn.onclick=function(event)
    {event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling,event.target.parentElement);} 

let taskspan=document.createElement('span');
taskspan.innerText=newtask.value;
li.appendChild(xbtn);
li.appendChild(upbtn);
li.appendChild(downbtn);
li.appendChild(taskspan);
todolist.appendChild(li);
    }

}