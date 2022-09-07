let boton = document.getElementById("boton");
let num1 = document.getElementById("formGroupExampleInput1");
let num2 = document.getElementById("formGroupExampleInput2");
let num3 = document.getElementById("formGroupExampleInput3");
let res = document.getElementById("alerta");

    

 boton.addEventListener("click", function(e){
        e.preventDefault();
 let cam1= parseInt(num1.value);
 let cam2= parseInt(num2.value);       
 let cam3= parseInt(num3.value);       

        if ((cam1<=100) && (cam2<=100) && (cam3<=100) && (cam1>=1) && (cam2>=1) && (cam3>=1)) {
                v=0;
                m=0;
            if (cam1>cam2) {
                 v=cam1
                 } else{
                     v=cam2
                }
                
             if (v>cam3) {
                     m=v
                 } else{
                     m=cam3
                     
                    }
              res.innerHTML = "El numero mayor es: "+ m + " .";

 }  else{ //else del menor que 100

            res.innerHTML = "Por favor, que tus numeros esten entre 1 y 100";
    
          }
         
 })
        

    
