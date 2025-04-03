const navigationBar = document.querySelector('.navigationBar')

function navigationContent(){
    let navigationContent = `
     <div class="container mx-auto flex px-[45px] py-[20px]  items-center justify-between">
      <!-- Logo -->
        <div class="logo"><img src="/images/logo.png" alt=""></div>

        <!--  Nav Link Box -->
    <ul class="navLinkBox [clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)] duration-500 shadow-xl absolute left-0 top-[102%] w-full  bg-whiteColor text-center flex flex-col md:relative md:flex-row md:items-center md:justify-end md:open-navigation md:shadow-none md:overflow-visible md:[clip-path:none]">
        <li><a href="/src/index.html" class="block py-3.5 border-b border-lightGray font-semibold hover:bg-lightGray hover:text-lightGray2 duration-200 md:border-none md:px-2.5 md:hover:bg-whiteColor lg:px-4 xl:px-6">Home</a></li>
        <li><a href="" class="block py-3.5 border-b border-lightGray font-semibold hover:bg-lightGray hover:text-lightGray2 duration-200 md:border-none md:px-2.5 md:hover:bg-whiteColor lg:px-4 xl:px-6">Men's</a></li>
        <li><a href="" class="block py-3.5 border-b border-lightGray font-semibold hover:bg-lightGray hover:text-lightGray2 duration-200 md:border-none md:px-2.5 md:hover:bg-whiteColor lg:px-4 xl:px-6">Women's</a></li>
        <li><a href="" class="block py-3.5 border-b border-lightGray font-semibold hover:bg-lightGray hover:text-lightGray2 duration-200 md:border-none md:px-2.5 md:hover:bg-whiteColor lg:px-4 xl:px-6">Kid's</a></li>

        <li class="dropdownBx block pt-3.5 relative border-b border-lightGray font-semibold hover:bg-lightGray  duration-200 cursor-pointer md:border-none md:py-3.5 md:px-2.5 md:hover:bg-whiteColor   lg:px-4 xl:px-6 md:relative group">
          <p class="duration-200 md:flex md:flex-row md:items-center md:gap-1 md:hover:bg-whiteColor md:group-hover:text-lightGray2">
            <span class="font-medium">Pages</span> 
            <span class=""><i class="ri-arrow-down-s-line absolute right-[10px] md:relative md:right-[0px]"></i></span>
          </p>

          <!-- dropdownContent h-0  mt-3.5 bg-whiteColor md:absolute md:top-[5px] md:w-full -->
          <div class="dropdownContent h-0 mt-3.5 bg-white duration-200 md:absolute md:top-[55px] md:left-[-50px] md:w-[200px] md:h-auto md:block md:mt-0 md:shadow-md md:group-hover:opacity-100 md:opacity-0 md:invisible md:group-hover:visible active z-[99]">
            <ul class="box md:text-left">
              <li><a href="/src/pages/about.html" class="block py-3.5 border-t border-lightGray font-normal hover:bg-lightGray hover:text-lightGray2 duration-200 md:py-2 md:border-whiteColor md:px-6 md:text-sm">About Us</a></li>
              <li><a href="/src/pages/product.html" class="block py-3.5 border-t border-lightGray font-normal hover:bg-lightGray hover:text-lightGray2 duration-200 md:py-2 md:px-6 md:text-sm">Products</a></li>
              <li><a href="/src/pages/singlePage.html" class="block py-3.5 border-t border-lightGray font-normal hover:bg-lightGray hover:text-lightGray2 duration-200 md:py-2 md:px-6 md:text-sm">Single Products</a></li>
              <li><a href="/src/pages/contact.html" class="block py-3.5 border-t border-lightGray font-normal hover:bg-lightGray hover:text-lightGray2 duration-200 md:py-2 md:px-6 md:text-sm">Contact Us</a></li>
            </ul>
          </div>
        </li>
    </ul>

     <!--  Burger bar Menu -->
    <div class="burgerBar rotate-[-90deg] flex gap-1.5 cursor-pointer md:hidden">
        <span class="line1 w-[2px] h-[30px] bg-black duration-500 rotate-[0deg] origin-[0%_15%]"></span>
        <span class="line2 w-[2px] h-[40px] bg-black duration-500 opacity-100 origin-left"></span>
        <span class="line3 w-[2px] h-[30px] bg-black duration-500 rotate-[0deg] origin-[0%_10%]"></span>
    </div>
    </div>
    `

    navigationBar.innerHTML = navigationContent
}

navigationContent()

// navigation Bar Scroll
window.addEventListener('scroll',() =>{
    if(window.scrollY >= 300){
        navigationBar.classList.replace("relative","fixed")
        navigationBar.classList.add("top-0" ,"left-0","w-full" , "shadow-md")
    }else{
      navigationBar.classList.replace("fixed","relative")
      navigationBar.classList.remove("top-0" ,"left-0","w-full" , "shadow-md")
    }
})



const burgerBar = document.querySelector('.burgerBar')
burgerBar.addEventListener('click',() =>{
    const getNavLinkBox = document.querySelector('.navLinkBox')
    let getLine1 = burgerBar.querySelector('.line1')
    let getLine2 = burgerBar.querySelector('.line2')
    let getLine3 = burgerBar.querySelector('.line3')

    burgerBar.classList.toggle('active')
    navigationBar.classList.toggle('active')

    if( burgerBar.classList.contains("active")){
        getLine1.classList.replace("rotate-[0deg]" ,"rotate-[-45deg]")
        getLine2.classList.replace("opacity-100" ,"opacity-0")
        getLine2.classList.replace("h-[40px]" ,"h-[30px]")
        getLine3.classList.replace("rotate-[0deg]" ,"rotate-[45deg]")
        // -- open navLinkBox (Mobile)
        getNavLinkBox.classList.replace('[clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)]','[clip-path:polygon(0_0,_100%_0,_100%_100%,_0%_100%)]')
        console.log(getNavLinkBox)

    }else{
        getLine1.classList.replace("rotate-[-45deg]" ,"rotate-[0deg]")
        getLine2.classList.replace("opacity-0" ,"opacity-100")
        getLine2.classList.replace("h-[30px]" ,"h-[40px]")
        getLine3.classList.replace("rotate-[45deg]" ,"rotate-[0deg]")
          // -- close navLinkBox (Mobile)
          getNavLinkBox.classList.replace('[clip-path:polygon(0_0,_100%_0,_100%_100%,_0%_100%)]','[clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)]')
    }
})


// ----------- Dropdown (Pages Link)
const getDropdownBox = document.querySelector('.dropdownBx')
getDropdownBox.addEventListener('click',() =>{
    let getDropdownContent = document.querySelector('.dropdownContent')  

    getDropdownBox.classList.toggle('active')
    console.log('s')

    if(getDropdownBox.classList.contains("active")){
         getDropdownContent.classList.replace('h-0','h-full')
    }
    else{
        getDropdownContent.classList.replace('h-full','h-0')
    }
})



