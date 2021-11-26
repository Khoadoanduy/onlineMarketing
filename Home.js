let circle = document.querySelector(".color-option");
 
    circle.addEventListener("click", (e)=>{
      let target = e.target;
      if(target.classList.contains("circle")){
        circle.querySelector(".active").classList.remove("active");
        target.classList.add("active");
        document.querySelector(".main-images .active").classList.remove("active");
        document.querySelector(`.main-images .${target.id}`).classList.add("active");
      }
    });
let circle = document.querySelector(".color-option1");
 
    circle.addEventListener("click", (e)=>{
      let target = e.target;
      if(target.classList.contains("circle1")){
        circle.querySelector(".active").classList.remove("active");
        target.classList.add("active");
        document.querySelector(".main-images .active1").classList.remove("active1");
        document.querySelector(`.main-images .${target.id}`).classList.add("active1");
      }
    });