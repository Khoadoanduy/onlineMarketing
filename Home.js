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
    let circle1 = document.querySelector(".color-option1");
 
    circle1.addEventListener("click", (e)=>{
      let target = e.target;
      if(target.classList.contains("circle1")){
        circle1.querySelector(".active1").classList.remove("active1");
        target.classList.add("active1");
        document.querySelector(".main-images1 .active1").classList.remove("active1");
        document.querySelector(`.main-images1 .${target.id}`).classList.add("active1");
      }
    });
    let circle2 = document.querySelector(".color-option2");
 
    circle2.addEventListener("click", (e)=>{
      let target = e.target;
      if(target.classList.contains("circle2")){
        circle2.querySelector(".active2").classList.remove("active2");
        target.classList.add("active2");
        document.querySelector(".main-images2 .active2").classList.remove("active2");
        document.querySelector(`.main-images2 .${target.id}`).classList.add("active2");
      }
    });
    let circle3 = document.querySelector(".color-option3");
 
    circle3.addEventListener("click", (e)=>{
      let target = e.target;
      if(target.classList.contains("circle3")){
        circle3.querySelector(".active3").classList.remove("active3");
        target.classList.add("active3");
        document.querySelector(".main-images3 .active3").classList.remove("active3");
        document.querySelector(`.main-images3 .${target.id}`).classList.add("active3");
      }
    });
