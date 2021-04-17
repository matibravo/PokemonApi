export default function btnUp(){

    const $btnUp = document.querySelector(".btnUp");

    window.addEventListener("scroll", e=>{        

        console.log(scrollY);

        (scrollY > 350)
        ? $btnUp.classList.remove("hidden")
        : $btnUp.classList.add("hidden"); 

    });
    
    document.addEventListener("click", e=>{

        if(e.target === $btnUp){
            window.scroll(0, 0);
        }
    });
}