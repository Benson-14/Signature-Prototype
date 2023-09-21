<template>

  <div class=" px-2 pt-6 lg:pl-6 pl-1 items-start bg-white lg:mx-36 h-screen rounded-lg overflow-x-auto">


  <div v-if="dashboardAdded" class="border-blue-300 border sticky rounded-lg mx-3 w-86 bg-white flex flex-col md:w-96 lg:w-96">
      <!-- Signature Preview Heading -->

      <!-- Content Container -->
      <div class="p-2 h-48 overflow-y-auto "  >
          <!-- Sign-off -->
          <p class="">{{ userData.signoffCustomization === 'Custom' ? userData.customSignoffText : userData.selectedRadioButtonText }}</p>
          <div class="grid grid-cols-4 " >

            
            <!-- Image -->
            <div>
              <div class="py-4" v-if="userData.imagePreviewUrl">
                <a :href="userData.imageLink" target="_blank" >
                  <img :src="userData.imagePreviewUrl" alt="Uploaded Image" class="" :style="{ 'border-radius': '55%', width: '100%', height: '100%' }">
                </a>
              </div>
            </div>

            
          <!-- General -->
          <div class="col-span-2 mt-2 ml-2 grid-flow-col ">
              <p :style="{ fontFamily: userData.selectedFontFamily,fontSize: userData.fontSize + 'px', color: userData.textColor, }">{{ userData.name }}</p>
              <p :style="{ fontFamily: userData.selectedFontFamily,fontSize: userData.fontSize + 'px', color: userData.textColor, }">{{ userData.company }} {{ userData.position }} {{ userData.department }}</p>
              <div v-for="(field, index) in userData.selectedFields" :key="index">
                <p :style="{ fontFamily: userData.selectedFontFamily, fontSize: userData.fontSize + 'px', color: userData.textColor, }">
                  <span :style="{ color: userData.templateColor }">{{ field.type }}:</span> {{ field.value }}
                </p>
            </div>
            </div>

            <div class="mt-2 flex items-center ml-8" >
              <!-- Colored vertical line -->
              <div class="w-1 h-full rounded mr-2" :style="{ backgroundColor: userData.templateColor }"></div>
              <div class="flex space-y-0 flex-col " :style="{ transform: 'scale(' + (userData.iconSize / 25) + ')' }">
                <div v-for="(socialLink, index) in userData.socialLinks" :key="index">
                  <div class="flex items-center">
                    <template v-if="socialLink.enabled">
                      <a :href="socialLink.link" target="_blank" class="text-blue-500">
                        <img :src="socialLink.imageSrc" height="25" width="25" :style="{ backgroundColor: userData.iconColor, borderRadius: `${userData.selectedIconShape}%` }" class="clickable-image my-0.5" alt="" />
                      </a>
                    </template>
                  </div>
                </div>

                

            <!-- Display Gallery Icons Added to Social Link Section -->
            <div v-for="(textField, index) in userData.textFields" :key="index">
              <div class="flex items-center">
                <a :href="textField.text" target="_blank" class="text-blue-500">
                  <img :src="textField.imageSrc" height="25" width="25" :style="{ backgroundColor: userData.iconColor, borderRadius: `${userData.selectedIconShape}%`  }" class="clickable-image my-0.5 " alt="" />
                </a>
              </div>
            </div>

              </div>
            </div>

          </div>

          <div class="mt-4" v-if="userData.bannerPreviewUrl">
              <a :href="userData.bannerLink" target="_blank">
                <img :src="userData.bannerPreviewUrl" alt="Banner Image" class="rounded-xl" :style="{ width: userData.computedBannerWidth }">
              </a>
            </div>

          <div class="mt-2" v-if="userData.ctaButtonText">
            <a :href="userData.ctaButtonLink" target="_blank">
              <button :style="{ fontFamily: userData.ctaButtonFont, backgroundColor: 'lightblue' }" class="px-3 py-1 rounded-md text-md">{{ userData.ctaButtonText }}</button>
            </a>
          </div>

          <!-- Video Conference -->
         <div class="mt-2" v-if="userData.buttonText[userData.selectedPlatform]">
            <a :href="userData.buttonLink" target="_blank">
              <button :style="{ fontFamily: userData.buttonFont, backgroundColor: 'lightblue' }" class="px-2 py-1 rounded-sm ">{{ userData.buttonText[userData.selectedPlatform] }}</button>
            </a>
          </div>

          <!-- Marketplace Icon -->
          <div class="flex flex-row mt-2">
            <div v-for="(marketplace, index) in userData.marketplaces" :key="index">
              <div v-if="marketplace.isIconVisible">
                <a :href="marketplace.link" target="_blank">
                  <img
                    :src="marketplace.imageSrc"
                    :alt="marketplace.imageAlt"
                    class="mr-2 w-40 rounded-md"
                    style="width: 100px; height: 35px;"
                  >
                </a>
              </div>
            </div>
          </div>



          
      </div>

      
          <!-- Add to Dashboard and Cancel Buttons -->
    <div >    
    <div class="flex justify-end self-end my-2 mx-2 p-2 bg-slate-200 rounded-lg">
      <button class="px-3 py-1 rounded-lg text-md text-blue-500 mr-2">Delete</button>
      <button class=" px-3 py-1 rounded-md text-md text-white bg-blue-500">Install</button>
    </div></div>  

  </div>
  <div v-else class="text-center text-lg mt-4 text-gray-500">
      No signature added
    </div>



  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore';


export default {
  computed: {
    userData() {
      const userStore = useUserStore();
      return userStore.userData; // Access user data from the store
    },
    dashboardAdded() {
      const userStore = useUserStore();
      return userStore.dashboardAdded; // Access the dashboardAdded flag from the store
    },
  },
};
</script>