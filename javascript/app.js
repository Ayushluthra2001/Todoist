// if user add a not , added to local storage 
let addBtn=document.getElementById('addBtn');

// when someone click on this button
addBtn.addEventListener("click",function(e){
    let addTxt =document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);

})  