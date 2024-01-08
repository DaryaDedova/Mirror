$(document).ready(function(){ 
    let one  = document.querySelector('.one');
    let two = document.querySelector('.two');
    let quan = document.querySelector('.quan');
    
    let a = 1;
    
        
        two.onclick = () =>{
            a = a + 1;
            quan.innerHTML = a;
        }
    
        one.onclick = () => {
            if(a >= 1){
                a = a - 1;
            }
            else{
                a = 0;
            }
            quan.innerHTML = a;
        }    
 })


