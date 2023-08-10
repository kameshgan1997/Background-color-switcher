 const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');
btn.forEach(function(button) {
    console.log(button);
 button.addEventListener('click',function(ev){  
//    event obj se pata chata hai konsa event hua hau and isi me kise target kiya hai bh bhi show ho jata hai 

    console.log(ev);

    //  event.target se mujhe jis per event fire hua hai bh elememt milega 

    console.log(ev.target);

    //  yeh mujhe id return kar rha hai div ki jis par click event karunga
    console.log(ev.target.id);

     if(ev.target.id ==='grey'){
        body.style.backgroundColor = 'grey'
        //  body.style.backgroundColor = ev.target.id
    }
     if(ev.target.id ==='white'){
        body.style.backgroundColor = 'white'
       
    }
     if(ev.target.id ==='blue'){
        body.style.backgroundColor = 'blue'
       
    }
     if(ev.target.id ==='yellow'){
        body.style.backgroundColor = 'yellow'
      
    }


  }) });