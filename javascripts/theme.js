let sun = document.querySelector('.fa-circle-half-stroke');
let i = document.querySelector('.theme>i');
let nav_links = document.querySelectorAll('.nav-2>a');
let boxes = document.querySelectorAll('.box>p');
let txt = document.querySelectorAll('.txt>p');
let txt_h = document.querySelectorAll('.txt>h1');
let price_p = document.querySelectorAll('.price-1>p');
let price_h = document.querySelectorAll('.price-1>h1');
let contact_p = document.querySelectorAll('.contact1>p');
let contact_a = document.querySelector('.contact1>a');
console.log(nav_links[0]);
sun.addEventListener('click',()=>{
    sun.classList.toggle('fa-circle-half-stroke');
    sun.classList.toggle('fa-circle')
    if(i.classList.contains('fa-circle')){
        let main = document.querySelector('main');
        main.style.backgroundColor = 'black';
        if(document.querySelector('.black')){
            document.querySelector('.black').style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
        
        document.querySelector('h1').style.color = 'white';
        if(document.querySelector('.sec-1-con>p')){
        document.querySelector('.sec-1-con>p').style.color = 'white';     
        }
       
        // for (let i = 0; i < nav_links.length; i++) {
        //     const element = nav_links[i];
        //     element.style.color = 'white';
        // }
        // nav_links[nav_links.length-1].style.color = 'blue';
        // nav_links[nav_links.length-1].style.backgroundColor = 'white';
        // document.querySelector('h4').style.color = 'white';
        // document.querySelector('h5').style.color = 'white';
        document.querySelector('p').style.color = 'white';
        if(boxes){
            for (let i = 0; i < boxes.length; i++) {
            const element = boxes[i];
            element.style.color = 'white';
        }
        }
         if(txt){
            for (let i = 0; i < txt.length; i++) {
            const element = txt[i];
            element.style.color = 'white';
        }
         }
         
         if(price_p){
            for (let i = 0; i < price_p.length; i++) {
            const element = price_p[i];
            element.style.color = 'white';
        }
         }

         if(price_h){
             for (let i = 0; i < price_h.length; i++) {
            const element = price_h[i];
            element.style.color = 'white';
        }
         }
        
         if(contact_p){
            for (let i = 0; i < contact_p.length; i++) {
            const element = contact_p[i];
            element.style.color = 'white';
        }
         }
         
         if(txt_h){
             for (let i = 0; i < txt_h.length; i++) {
            const element = txt_h[i];
            element.style.color = 'white';
        }
         }
        if(contact_a){
                contact_a.style.backgroundColor = 'white'
        contact_a.style.color = 'black'
        }
    if(document.querySelector('.sec-1-con>a')){
       document.querySelector('.sec-1-con>a').style.backgroundColor = 'white'; 
    }
        
        
    }else{
        let main = document.querySelector('main');
        main.style.backgroundColor = 'white';
        if(document.querySelector('.black')){
       document.querySelector('.black').style.backgroundColor = 'rgba(219, 219, 219, 0.3)';     
        }
        
        document.querySelector('h1').style.color = 'black';
        if(document.querySelector('.sec-1-con>p')){
            document.querySelector('.sec-1-con>p').style.color = 'black';
        }
        
        // for (let i = 0; i < nav_links.length; i++) {
        //     const element = nav_links[i];
        //     element.style.color = 'black'
        // }
        // nav_links[nav_links.length-1].style.color = 'blue';
        // nav_links[nav_links.length-1].style.backgroundColor = 'black';
        if(boxes){
            for (let i = 0; i < boxes.length; i++) {
            const element = boxes[i];
            element.style.color = 'black';
        }
        }
        if(txt){
             for (let i = 0; i < txt.length; i++) {
            const element = txt[i];
            element.style.color = 'black';
        }
        }
       if(price_h){
        for (let i = 0; i < price_h.length; i++) {
            const element = price_h[i];
            element.style.color = 'black';
        }
       }
        if(price_p){
            for (let i = 0; i < price_p.length; i++) {
            const element = price_p[i];
            element.style.color = 'black';
        } 
        }
        if(contact_p){
              for (let i = 0; i < contact_p.length; i++) {
            const element = contact_p[i];
            element.style.color = 'black';
        }
        }
      if(contact_a){
       contact_a.style.backgroundColor = 'black'
        contact_a.style.color = 'white'  
      }
        if(document.querySelector('.sec-1-con>a')){
       document.querySelector('.sec-1-con>a').style.backgroundColor = 'black';     
        }
        if(txt_h){
             for (let i = 0; i < txt_h.length; i++) {
            const element = txt_h[i];
            element.style.color = 'black';
        } 
        }
        
    }
})