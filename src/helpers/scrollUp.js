


export const scrollUp = () => {
    const scrollTopBtn = document.getElementById("top");
    scrollTopBtn.addEventListener("click",function(){
        window.scrollTo(0,0);
    });

    scrollTopBtn.removeEventListener("click",function(){
        window.scrollTo(0,0);
    });

}
