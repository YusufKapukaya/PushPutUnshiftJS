const ausrustungen=["Hauptkart","Ram","GraphicKarte"];


var change=document.getElementsByClassName("change")[0];
var hinzufügen=document.getElementById("hinzufügen");
var hinzufügen1=document.getElementById("hinzufügen1");
var hinzufügen_btn=document.getElementById("hinzufügen_btn");
var hinzufügen_btn1=document.getElementById("hinzufügen_btn1");
var entfernen=document.getElementById("entfernen");
var entfernen1=document.getElementById("entfernen1");





ausrustungen.forEach((element,index)=>{
    change.innerHTML+=`<div class="alert alert-danger " role="alert"> ${index}.index: ${element} </div>`
});

hinzufügen_btn.addEventListener("click",function(){
    ausrustungen.push(hinzufügen.value);
    // console.log(ausrustungen);
    change.innerHTML="";
    ausrustungen.forEach((element,index)=>{
        change.innerHTML+=`<div class="alert alert-danger " role="alert"> ${index}.index: ${element} </div>`
    });
});

hinzufügen_btn1.addEventListener("click",function(){
    ausrustungen.unshift(hinzufügen.value);
    // console.log(ausrustungen);
    change.innerHTML="";
    ausrustungen.forEach((element,index)=>{
        change.innerHTML+=`<div class="alert alert-danger " role="alert"> ${index}.index: ${element} </div>`
    });
});

entfernen.addEventListener("click",()=>{
    ausrustungen.pop();
    change.innerHTML="";
    ausrustungen.forEach((element,index)=>{
        change.innerHTML+=`<div class="alert alert-danger " role="alert"> ${index}.index: ${element} </div>`
    });
});

entfernen1.addEventListener("click",()=>{
    ausrustungen.shift();
    change.innerHTML="";
    ausrustungen.forEach((element,index)=>{
        change.innerHTML+=`<div class="alert alert-danger " role="alert"> ${index}.index: ${element} </div>`
    });
});



var sortieren=document.getElementsByClassName("sortieren")[0];
var change1=document.getElementsByClassName("change1")[0]; 
var slice=document.getElementsByClassName("slice")[0]; 
var concat=document.getElementsByClassName("concat")[0]; 


const daten=["Jannik","Yusuf","Eliane","Miriam","Alex"];

daten.forEach((element)=>{
    change1.innerHTML+=`<div class="alert alert-danger " role="alert">${element}</div>`
})

sortieren.addEventListener("click",()=>{
    change1.innerHTML="";
    daten.sort().forEach((element)=>{
        change1.innerHTML+=`<div class="alert alert-danger " role="alert">${element}</div>`
    }) 
})


slice.addEventListener("click",()=>{
    change1.innerHTML="";
    daten.slice(1,3).forEach((element)=>{
        change1.innerHTML+=`<div class="alert alert-danger " role="alert">${element}</div>`
    }) 
});


concat.addEventListener("click",()=>{
    change1.innerHTML="";

    change1.innerHTML=ausrustungen.concat(daten).join("*");
    ausrustungen.concat(daten).forEach((element)=>{
        change1.innerHTML+=`<div class="alert alert-danger " role="alert">${element}</div>`
    }) 
});





