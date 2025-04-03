function createSwiper(swiperName){
    var swiper = new Swiper(swiperName, {
        slidesPerView: 1,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 40,
              }
        }
      });
}

createSwiper(".menProductSlide")
createSwiper(".womenProductSlide")
createSwiper(".kidsProductSlide")


// ------------- Get Product in json and put to men,women,kids product slide
async function getJsonData(){
  try{
    let data = await fetch('http://127.0.0.1:5500/src/javascript/dataAPI.json')
    if(!data.ok){
        throw new Error(`Response status :${data.status}`)
    }
    let getJsonProductData = await data.json()
    generateBoxProduct("men",getJsonProductData.products.men)
    generateBoxProduct("women",getJsonProductData.products.women)
    generateBoxProduct("kid",getJsonProductData.products.kid)
  }
  catch(err){
     console.log(err.message)
  }
}
getJsonData()

function generateBoxProduct(category,getJsonProductData){
    if(category && getJsonProductData){
        let getMenProductSlide = document.querySelector('.menProductSlide .swiper-wrapper')
        let getWomenProductSlide = document.querySelector('.womenProductSlide .swiper-wrapper')
        let getKidsProductSlide = document.querySelector('.kidsProductSlide .swiper-wrapper')
       
        if(category == "men"){
            let createProductBox = getJsonProductData.map((data) =>{
                return `
                  <div class="menProduct swiper-slide">
            <div class="image w-full relative duration-500 group overflow-hidden">
              <img src="${data.image}" alt="" class="w-full">
              <div class="popupBtnProduct absolute left-1/2 -bottom-20 -translate-x-1/2 flex items-center justify-center gap-4 duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-[30px]">
                <button class="bg-white hover:bg-darkGray2 hover:text-whiteColor hover:cursor-pointer text-[16px] px-5 py-3"><i class="ri-eye-fill"></i></button>
                <button class="bg-white hover:bg-darkGray2 hover:text-whiteColor hover:cursor-pointer text-[16px] px-5 py-3"><i class="ri-star-fill"></i></button>
                <button class="bg-white hover:bg-darkGray2 hover:text-whiteColor hover:cursor-pointer text-[16px] px-5 py-3"><i class="ri-shopping-cart-2-fill"></i></button>
              </div>
            </div>
            <div class="content flex justify-between mt-5 gap-4">
              <div class="leftBx">
                <h2 class="name md:text-[22px] text-[16px] font-semibold mb-2">${data.name}</h2>
                <p class="price md:text-[18px] sm:text-[16px] text-gray font-medium">${data.price}</p>
              </div>
              <div class="rightBx text-[14px] w-[120px] flex justify-end">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
            </div>
          </div>
                `
            }).join(' ')
            getMenProductSlide.innerHTML = "" 
            getMenProductSlide.innerHTML += createProductBox
        }
        else if(category == "women"){
            let createProductBox = getJsonProductData.map((data) =>{
                return `
                 <div class="womenProduct swiper-slide">
            <div class="image w-full relative duration-500 group overflow-hidden">
              <img src="${data.image}" alt="" class="w-full">
              <div class="popupBtnProduct absolute left-1/2 -bottom-20 -translate-x-1/2 flex items-center justify-center gap-4 duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-[30px]">
                <button class="bg-white hover:bg-darkGray2 hover:text-whiteColor hover:cursor-pointer text-[16px] px-5 py-3"><i class="ri-eye-fill"></i></button>
                <button class="bg-white hover:bg-darkGray2 hover:text-whiteColor hover:cursor-pointer text-[16px] px-5 py-3"><i class="ri-star-fill"></i></button>
                <button class="bg-white hover:bg-darkGray2 hover:text-whiteColor hover:cursor-pointer text-[16px] px-5 py-3"><i class="ri-shopping-cart-2-fill"></i></button>
              </div>
            </div>
            <div class="content flex justify-between mt-5 gap-4">
              <div class="leftBx">
                <h2 class="name md:text-[22px] text-[16px] font-semibold mb-2">${data.name}</h2>
                <p class="price md:text-[18px] sm:text-[16px] text-gray font-medium">${data.price}</p>
              </div>
              <div class="rightBx text-[14px] w-[120px] flex justify-end">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
            </div>
          </div>
                `
            }).join(" ")
            getWomenProductSlide.innerHTML = "" 
            getWomenProductSlide.innerHTML = createProductBox 
        }
        else if(category == "kid"){
            let createProductBox = getJsonProductData.map((data) =>{
                return `
                 <div class="kidProduct swiper-slide">
            <div class="image w-full relative duration-500 group overflow-hidden">
              <img src="${data.image}" alt="" class="w-full">
              <div class="popupBtnProduct absolute left-1/2 -bottom-20 -translate-x-1/2 flex items-center justify-center gap-4 duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-[30px]">
                <button class="bg-white hover:bg-darkGray2 hover:text-whiteColor hover:cursor-pointer text-[16px] px-5 py-3"><i class="ri-eye-fill"></i></button>
                <button class="bg-white hover:bg-darkGray2 hover:text-whiteColor hover:cursor-pointer text-[16px] px-5 py-3"><i class="ri-star-fill"></i></button>
                <button class="bg-white hover:bg-darkGray2 hover:text-whiteColor hover:cursor-pointer text-[16px] px-5 py-3"><i class="ri-shopping-cart-2-fill"></i></button>
              </div>
            </div>
            <div class="content flex justify-between mt-5 gap-4">
              <div class="leftBx">
                <h2 class="name md:text-[22px] text-[18px] font-semibold mb-2">${data.name}</h2>
                <p class="price md:text-[18px] sm:text-[16px] text-gray font-medium">${data.price}</p>
              </div>
              <div class="rightBx text-[14px] w-[120px] flex justify-end">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
            </div>
          </div>
                `
            }).join(" ")
          getKidsProductSlide.innerHTML = createProductBox 
        }
    }
}


