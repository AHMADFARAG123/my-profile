//           <!-- 3 -section ocordion by height -->okokokokokokokokokokokokokokokook

const btn = document.getElementsByClassName('btnn');
let f;

for( f=0;f<btn.length;f++){

    btn[f].addEventListener('click',function(){
        this.classList.toggle("active");
       var para= this.nextElementSibling;
        
        if(para.style.maxHeight){
            
           para.style.maxHeight=null; 
           }else{
           para.style.maxHeight=para.scrollHeight+"px";
           } 
    });
}

//------------------------------------/


   




// <!-- 4 -section ocordion by height -->

const btnall = document.getElementsByClassName("btnall")
const deskss = document.getElementsByClassName("desk")
const spanss = document.getElementsByClassName("spans")
let desk,
g,i,spane,y;




for( i=0;i<btnall.length;i++){

   btnall[i].onclick = function(){
       
         desk= this.nextElementSibling;
         spane = this.firstElementChild;
        
        if(desk.style.height==""){  //لو ارتفاع البرجراف ده بيساوى فاضى 
            
            for(g = 0 ; g < desks.length ; g++){
                    deskss[g].style.height="";
            }
           desk.style.height=desk.scrollHeight + "px";   //خلى ارتفاع بيساوى سكرول هاى   87
           for(y = 0 ; y < spanss.length ; y++){
            spane[y].sinnerHTML="+";
          }

            spane.innerHTML="-"
           }else{
            desk.style.height="";
            spane.innerHTML="+"
           } 
    }
}



// <------------------------->okokokokokokokokokokookokokokokok

           // section slide show
  let mydivs = document.getElementsByClassName("divs");
  let removeActive;
  i = 0;
  
  
  function slide() {
  
      i = i+1;
      removeActive = document.querySelector(".active");
      removeActive.classList.remove("active");
     
      if( i == mydivs.length ) {
          i = 0;
  
      }
      mydivs[i].classList.add("active");
  }
     setInterval(slide,2000);

  // <------------------------->okokokokokokokokokokokokokokokook
  //section نبذه مختصره عنى

  const btnnbza = document.getElementById("btnnbza")
const desks = document.getElementsByClassName("desk")
const spans = document.getElementsByClassName("spans")
let pargrafNbza,
t,h,span,z;



    btnnbza.onclick = function(){
       
        pargrafNbza= this.nextElementSibling;
        
        
        if( pargrafNbza.style.height==""){  //لو ارتفاع البرجراف ده بيساوى فاضى 
         pargrafNbza.style.height= pargrafNbza.scrollHeight + "px"; 
           
            }
                    
                 else{
                  pargrafNbza.style.height="";
           
           }
        }