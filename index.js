    let addbutton=document.getElementById('add')
    let storetodo=document.getElementById('storetodos')
    let input=document.getElementById('input')

    addbutton.addEventListener('click',function(){
        var para=document.createElement('p');
        para.classList.add('paragraph-styling')
        para.innerHTML=input.value
        storetodo.appendChild(para)
        input.value="";
        para.addEventListener('click',function(){
            para.style.textDecoration='line-through'
        })
        para.addEventListener('dblclick',function(){
            storetodo.removeChild(para)
        })
    })
