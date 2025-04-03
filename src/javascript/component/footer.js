let footer = document.querySelector('footer')


let footerContent = `
 <div class="container p-10">
      <div class="footer_top mb-12 grid gap-12 lg:grid-cols-4">
        <div class="footerBx">
          <div class="image mb-6 flex justify-center md:justify-start"><img src="/images/white-logo.png" alt=""></div>
          <p class="mb-3 text-[14px]">16501 Collins Ave, Sunny lsles Beach, FL 33160, United States</p>
          <p class="mb-3 text-[14px]">example123@gmail.com</p>
          <p class="text-[14px]">010-020-0340</p>
        </div>
        <div class="footerBx">
          <h2 class="title font-bold text-[17px] mb-3">Shopping & Categories</h2>
          <ul class="text-[15px]">
          <li class="mb-3">Men's Shopping</li>
          <li class="mb-3">Women's Shopping</li>
          <li class="mb-3">Kid's Shopping</li>
        </ul></div>
        <div class="footerBx">
          <h2 class="title font-bold text-[17px] mb-3 ">Useful Links</h2>
          <ul class="text-[15px]">
            <li class="mb-3">Homepages</li>
            <li class="mb-3">About Us</li>
            <li class="mb-3">Help</li>
            <li class="mb-3">Contact Us</li>
          </ul>
        </div>
        <div class="footerBx">
          <h2 class="title font-bold text-[17px] mb-3">Help & Information</h2>
          <ul class="text-[15px]">
            <li class="mb-3">Help</li>
            <li class="mb-3">FAQ's</li>
            <li class="mb-3">Shipping</li>
            <li class="mb-3">Tracking ID</li>
          </ul>
        </div>
      </div>
      <div class="footer_down border-t border-gray text-center pt-8">
                <p class="text-[15px] text-gray mb-2">Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.</p>
                <p class="text-[15px] text-gray mb-2">Design By : <a href="https://templatemo.com/tm-571-hexashop" class="text-blue-300 hover:text-red-300 cursor-pointer mb-">templateMo</a></p>
                <p class="text-[15px] text-gray">Copy By : CCW_NTW</p>
                <div class="socialBx mt-5 flex gap-5 justify-center">
                  <i class="ri-facebook-fill text-[23px] text-blue-300 hover:text-red-300 cursor-pointer"></i>
                  <i class="ri-twitter-fill text-[23px] text-blue-300 hover:text-red-300 cursor-pointer"></i>
                  <i class="ri-instagram-fill text-[23px] text-blue-300 hover:text-red-300 cursor-pointer"></i>
                  <i class="ri-linkedin-fill text-[23px] text-blue-300 hover:text-red-300 cursor-pointer"></i>
                </div>
      </div>
    </div>
`

footer.innerHTML = footerContent