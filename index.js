const labelInputfield=document.getElementById('labelValue');
const form=document.getElementById('form');
const inputType=document.getElementById('inputType');
labelInputfield.addEventListener('keyup', (event)=>{
const keyPressed=event.key;

if(keyPressed==='Enter'){
    //create input fields if user presses enter 
     const type=inputType.value;
     const label=labelInputfield.value;

     const labelInput=document.createElement("label");
     const div=document.createElement("div");

     let input=null;
     if(type==='textArea')
     input=document.createElement('textarea')
     else 
 input=document.createElement("input");
     
     labelInput.innerHTML=label;
     input.type=type;


     input.classList.add('form-control')
     labelInput.classList.add('form-label');
     div.classList.add('mb-3')

    
    
     if(type=='Submit'){
        input.classList.add('btn')
        input.classList.add('btn-success')
        input.value=label;
     }
     else 
     div.appendChild(labelInput);
     div.appendChild(input);

     form.appendChild(div);



}
})

