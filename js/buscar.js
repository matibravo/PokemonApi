export default function buscar(){

    document.addEventListener("keyup", e=>{
        
        const $cards = document.querySelectorAll(".card");
                            
        //console.log(e.target.value);
        
        $cards.forEach(element => {

            //console.log(element.textContent);

            (element.textContent.includes(e.target.value.toLowerCase()))
            ? element.classList.remove("ocultar")
            : element.classList.add("ocultar");            
        });


    }); 

}