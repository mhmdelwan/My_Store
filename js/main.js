// S T A R T   L O A D I N G
document.querySelector('.main').style.display = "none";
document.getElementById("ring").classList.add("ring");

setTimeout(()=>{
    document.querySelector('.main').style.display = "block";
    document.getElementById("ring").classList.remove("ring");
    document.getElementById('center').style.display = "none";

},1000)
// E N D   L O A D I N G


// S T A R T   A C T I V E   L I N K S
let list = document.querySelectorAll('.list');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');

  });
};
// E N D   A C T I V E   L I N K S


// S T A R T   T O G G L E   S I D E B A R
let sidebar = document.querySelector('.menu');
let menu_btn = document.querySelector('.menu-btn');

menu_btn.addEventListener('click', function(){
    sidebar.classList.toggle('active');
})
// E N D   T O G G L E   S I D E B A R






var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 30,
  // slidesPerGroup: 3,
  loop: true,
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
