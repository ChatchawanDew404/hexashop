let subscribeBox = document.querySelector('.subscribe')

let subscribeContent = `
 <div class="container">
      <div class="sub_contianer lg:flex lg:gap-14">

      <div class="sub_leftBx mb-8">
        <h2 class="text-[34px] font-bold text-darkGray">By Subscribing To Our Newsletter You Can Get 30% Off</h2>
        <p class="text-[15px] italic text-gray2 mb-6 mt-2">Details to details is what makes Hexashop different from the other themes.</p>
        <div class="bx lg:flex lg:gap-5">
          <div class="inputBx lg:flex lg:gap-7 lg:grow">
            <input type="text" placeholder="your Name..." class="w-full border-black border p-2.5 text-darkGray mb-4">
            <input type="text" placeholder="your Email Address..." class="w-full border-black border p-2.5 text-darkGray mb-4">
          </div>
          <button class="w-full duration-200 border border-white bg-darkGray text-whiteColor hover:border-darkGray hover:bg-whiteColor hover:text-darkGray2 hover:cursor-pointer p-2 lg:h-[46px] lg:w-[46px]"><i class="ri-send-plane-fill"></i></button>
        </div>
      </div>


      <div class="sub_rightBx grid grid-cols-2 gap-7">
        <div class="content">
          <h3 class="text-darkGray font-semibold text-[17px]">Store Location:</h3>
          <p class="text-[14px] text-gray">Sunny Isles Beach, FL 33160, United States</p>
        </div>
        <div class="content">
          <h3 class="text-darkGray font-semibold text-[17px]">Work Hours:</h3>
          <p class="text-[14px] text-gray">07:30 AM - 9:30 PM Daily</p>
        </div>
        <div class="content">
          <h3 class="text-darkGray font-semibold text-[17px]">Phone:</h3>
          <p class="text-[14px] text-gray">010-020-0340</p>
        </div>
        <div class="content">
          <h3 class="text-darkGray font-semibold text-[17px]">Email:</h3>
          <p class="text-[14px] text-gray">info@company.com</p>
        </div>
        <div class="content">
          <h3 class="text-darkGray font-semibold text-[17px]">Office Location:</h3>
          <p class="text-[14px] text-gray">North Miami Beach</p>
        </div>
        <div class="content">
          <h3 class="text-darkGray font-semibold text-[17px]">Social Media:</h3>
          <p class="text-[14px] text-gray">Facebook, Instagram, Behance, Linkedin</p>
        </div>
      </div>
    </div>
    </div>
`

subscribeBox.innerHTML = subscribeContent