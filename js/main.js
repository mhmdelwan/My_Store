// S T A R T   L O A D I N G
document.querySelector(".main").style.display = "none";
document.getElementById("ring").classList.add("ring");

setTimeout(() => {
  document.querySelector(".main").style.display = "block";
  document.getElementById("ring").classList.remove("ring");
  document.getElementById("center").style.display = "none";
}, 1000);
// E N D   L O A D I N G

// S T A R T   A C T I V E   L I N K S
let list = document.querySelectorAll(".list");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}
// E N D   A C T I V E   L I N K S

// S T A R T   T O G G L E   S I D E B A R
let sidebar = document.querySelector(".menu");
let menu_btn = document.querySelector(".menu-btn");

menu_btn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
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

let homeBtn = document.getElementById("home");
let phoneBtn = document.getElementById("phones");
let tabletBtn = document.getElementById("tablet");
let laptopBtn = document.getElementById("laptop");
let headphoneBtn = document.getElementById("headphone");
let storeBtn = document.getElementById("store");
let searchBtn = document.getElementById("search");
let hide_home = document.querySelector(".hide-home");
let phone = document.querySelector(".phone");
let tablet = document.querySelector(".tablet");
let laptop = document.querySelector(".laptop");
let headphone = document.querySelector(".headphone");
let store = document.querySelector(".store");

phoneBtn.addEventListener("click", () => {
  phone.style = "display:block";
  hide_home.style = "display:none";
  tablet.style = "display:none";
  laptop.style = "display:none";
  headphone.style = "display:none";
  store.style = "display:none";
});

homeBtn.addEventListener("click", () => {
  hide_home.style = "display:block";
  phone.style = "display:none";
  tablet.style = "display:none";
  laptop.style = "display:none";
  headphone.style = "display:none";
  store.style = "display:none";
});

tabletBtn.addEventListener("click", () => {
  tablet.style = "display:block";
  hide_home.style = "display:none";
  phone.style = "display:none";
  laptop.style = "display:none";
  headphone.style = "display:none";
  store.style = "display:none";
});

laptopBtn.addEventListener("click", () => {
  laptop.style = "display:block";
  hide_home.style = "display:none";
  phone.style = "display:none";
  tablet.style = "display:none";
  headphone.style = "display:none";
  store.style = "display:none";
});

headphoneBtn.addEventListener("click", () => {
  headphone.style = "display:block";
  hide_home.style = "display:none";
  phone.style = "display:none";
  tablet.style = "display:none";
  laptop.style = "display:none";
  store.style = "display:none";
});

storeBtn.addEventListener("click", () => {
  store.style = "display:block";
  hide_home.style = "display:none";
  phone.style = "display:none";
  tablet.style = "display:none";
  laptop.style = "display:none";
  headphone.style = "display:none";
});

//load

window.onload = function () {
  phone.style = "display:none";
  laptop.style = "display:none";
  tablet.style = "display:none";
  headphone.style = "display:none";
  store.style = "display:none";
};

let group = document.querySelectorAll(".group");
let itemBox = document.querySelectorAll(".product");

var imgList = [];

for (let i = 0; i < group.length; i++) {
  group[i].addEventListener("click", function () {
    imgList = [];

    for (let j = 0; j < group.length; j++) {
      group[j].classList.remove("active");
    }
    this.classList.add("active");

    for (let k = 0; k < itemBox.length; k++) {
      // itemBox[k].classList.remove('active');
      itemBox[k].classList.remove("show-itemBox");

      let dataFilter = this.getAttribute("data-filter");

      if (itemBox[k].getAttribute("data-item") == dataFilter) {
        itemBox[k].classList.add("show-itemBox");
        // itemBox[k].classList.add('active');

        imgList.push(itemBox[k]);
      }
    }

    // imageClicked(imgList);
  });
}

window.addEventListener("load", () => {
  group.forEach((l) => {
    if (l.classList.contains("active")) {
      let attr = l.getAttribute("data-filter");

      itemBox.forEach((item) => {
        item.classList.remove("show-itemBox");
        // item.classList.remove('active');
        // item.classList.add('hide');

        if (item.getAttribute("data-item") == attr) {
          item.classList.add("show-itemBox");

          // item.classList.remove('hide');
          // item.classList.add('active');

          imgList.push(item);
        }
      });
    }
  });

  // imageClicked(imgList);
});









  









function addToCart( productName, productPrice, productImage){
  const cartItemsContainer = document.getElementById('products');
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "The product added to the cart",
    showConfirmButton: false,
    timer: 1500
  });

  // Add a new item to the cart
  const cartItem = document.createElement('div');
  cartItem.classList.add('product');


  const itemName = document.createElement('span');
  itemName.textContent = productName;

  const itemPrice = document.createElement('span');
  itemPrice.textContent = `$${productPrice}`;

  const itemImage = document.createElement('img');
  itemImage.setAttribute('src',`${productImage}`)
  itemImage.textContent = `${productImage}`;

  // const quantity = document.createElement('span');
  // quantity.classList.add('quantity');
  // quantity.textContent = '1';

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-btn');
  removeButton.onclick = function() {
    removeFromCart(cartItem);
  };

  cartItem.appendChild(itemImage);
  cartItem.appendChild(itemName);
  cartItem.appendChild(itemPrice);
  // cartItem.appendChild(quantity);
  cartItem.appendChild(removeButton);

  cartItemsContainer.appendChild(cartItem);
}

function removeFromCart(cartItem) {
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "The product removed from the cart",
    showConfirmButton: false,
    timer: 1500
  });
  const cartItemsContainer = document.getElementById('products');
  cartItemsContainer.removeChild(cartItem);
}



