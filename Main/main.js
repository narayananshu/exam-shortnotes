// function to hide and show the subjects under respective classes
function openlink()
{
    let class6=document.getElementById('class6');
    let history6 =document.getElementById('history6');
    let geo6= document.getElementById('geo6');

    let pol6 = document.getElementById('pol6');
      
    if(history6.style.display !='none' && geo6.style.display !='none' && pol6.style.display !='none')
    {
        history6.style.display='none';
        geo6.style.display='none';
        pol6.style.display='none';
    }
    else
    {
        
        history6.style.display='block';
        geo6.style.display='block';
        pol6.style.display ='block';
    }

}
function class7_sub()
{
    let class7=document.getElementById('class7');
    let history7 =document.getElementById('history7');
    let geo7= document.getElementById('geo7');
      
    if(history7.style.display !='none' && geo7.style.display !='none')
    {
        history7.style.display='none';
        geo7.style.display='none';
    }
    else
    {
        
        history7.style.display='block';
        geo7.style.display='block';
    }

}

function part1()
{
    let part1= document.getElementById('part1');
    if(part1.style.display !='none'){
        part1
    }
}
 