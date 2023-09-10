<template>
  <div class="md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-32">
    <!-- Preview -->
    <div class="pt-4 sticky top-12 bg-white md:flex-1 md:pt-0">
      <div class="mb-4 border-blue-300 border rounded-lg mx-3 min-h-[220px] bg-white">
        <h1 class="bg-gray-100 py-2 rounded-tr-lg rounded-tl-lg px-2">Signature Preview</h1>
        <div class="p-2">

          <!-- Sign-off -->
          <p class="">{{ addonStore.signoffCustomization === 'Custom' ? addonStore.customSignoffText : addonStore.selectedRadioButtonText }}</p>
          <div class="grid grid-cols-4" >
            <!-- Image -->
            
              <div class="py-4" v-if="imageStore.imagePreviewUrl">
                <a :href="imageStore.imageLink" target="_blank" >
                  <img :src="imageStore.imagePreviewUrl" alt="Uploaded Image" class="" :style="{ width: imageStore.computedImageSize, height: imageStore.computedImageSize, 'border-radius': '55%',width: '100%', height: '100%', }">
                </a>
              </div>
            


          <!-- General -->
            <div class="col-span-2 mt-2 ml-2">
              <p :style="{ fontFamily: designStore.selectedFontFamily,fontSize: designStore.fontSize }">{{ generalStore.inputName }}</p>
              <p :style="{ fontFamily: designStore.selectedFontFamily,fontSize: designStore.fontSize }">{{ generalStore.inputCompany }} {{ generalStore.inputPosition }} {{ generalStore.inputDepartment }}</p>
              <div v-for="(field, index) in generalStore.inputFields" :key="index">
                <p :style="{ fontFamily: designStore.selectedFontFamily }">
                  <span style="color: rgb(54, 115, 238);">{{ field.type }}:</span> {{ field.value }}
                </p>
            </div>
            </div>

            <!-- Social Icons -->
            <div class="mt-2 flex items-center">
              <!-- Colored vertical line -->
              <div class="w-1 h-full bg-blue-500"></div>
              <div class="flex px-1 space-x-2 flex-col">
                <div v-for="(socialLink, index) in socialStore.socialLinks" :key="index" class="py-1">
                  <template v-if="socialLink.enabled">
                    <a :href="socialLink.link" target="_blank" class="text-blue-500">
                      <img :src="socialLink.imageSrc" height="25" width="25" class="clickable-image" alt="" />
                    </a>
                  </template>
                </div>
              </div>
            </div>


            
          
          </div>




          <div class="mt-4" v-if="imageStore.bannerPreviewUrl">
            <a :href="imageStore.bannerLink" target="_blank">
              <img :src="imageStore.bannerPreviewUrl" alt="Banner Image" class="rounded-xl" :style="{ width: imageStore.computedBannerWidth }">
            </a>
          </div>



          <!-- CTA -->
          <div class="mt-2" v-if="addonStore.ctaButtonText">
            <a :href="addonStore.ctaButtonLink" target="_blank">
              <button :style="{ fontFamily: addonStore.ctaButtonFont, backgroundColor: 'lightblue' }" class="px-3 py-1 rounded-md text-md">{{ addonStore.ctaButtonText }}</button>
            </a>
          </div>

        
          <!-- Video Conference -->
          <div class="mt-2" v-if="addonStore.buttonText[addonStore.selectedPlatform]">
            <a :href="addonStore.buttonLink" target="_blank">
              <button :style="{ fontFamily: addonStore.buttonFont, backgroundColor: 'lightblue' }" class="px-2 py-1 rounded-sm ">{{ addonStore.buttonText[addonStore.selectedPlatform] }}</button>
            </a>
          </div>


                    <!-- Marketplace Icon -->
          <div class="px-2 flex flex-row">
            <div v-for="(marketplace, index) in addonStore.marketplaces" :key="index">
              <div v-if="marketplace.isIconVisible">
                <a :href="marketplace.link" target="_blank">
                  <img
                    :src="marketplace.imageSrc"
                    :alt="marketplace.imageAlt"
                    class="mr-2 w-40"
                    style="width: 100px; height: 50px;"
                  >
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>



    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="pl-8 py-3 bg-slate-100 text-sm">Images</h1>

      <div class="">
        <div class="w-3/5 p-4 ml-4 mt-8 h-32 bg-white rounded shadow">
          <input type="file" id="profileImageInput" class="mb-4" @change="imageStore.handleImageUpload">
        </div>

          <!-- Image Width Slider and Link Input Section -->
        <div class="w-3/5 p-4 ml-4 mt-8 bg-white rounded">
          <!-- Image Width Slider -->
          <!-- Image Size Input Section -->
          <div class="w-3/5 p-4 ml-4 mt-8 bg-white rounded">
          <h2 class="text-sm font-normal mb-2 w-24">Image Size</h2>
          <input type="range" id="imageSizeSlider" min="10" max="300" step="1" v-model="imageStore.imageSize">
          </div>

          <!-- Link Input Section -->
          <h2 class="text-sm font-normal mt-4 mb-2">Link</h2>
          <input type="text" id="imageLinkInput" v-model="imageStore.imageLink" class="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="  Link">
        </div>

          </div>

          <h1 class="pl-8 py-3 bg-slate-100 text-sm">Banner</h1>

          <div class="w-3/5 p-4 ml-4 mt-4 bg-white rounded">
            <!-- Button to Open Canva -->
            <a href="https://www.canva.com/" target="_blank" class="px-4 py-2 w-full bg-blue-500 text-white text-center rounded inline-block">Design on Canva</a>
          </div>

          <div class="w-3/5 p-4 ml-4 my-4 h-32 bg-white rounded shadow">
            <!-- Full-width Image Selector -->
            <input type="file" id="bannerImageInput" class="mb-4" @change="imageStore.handleBannerImageUpload">
          </div>

          <!-- Banner Width Slider and Link Input Section -->
          <div class="w-3/5 p-4 ml-4 mt-8 bg-white rounded">
            <!-- Banner Width Slider -->
            <h2 class="text-sm font-normal mb-2 w-24">Banner Width</h2>
            <input type="range" id="bannerWidthSlider" min="10" max="100" step="1" v-model="imageStore.bannerWidth">

            <!-- Link Input Section -->
            <h2 class="text-sm font-normal mt-4 mb-2">Link</h2>
            <input type="text" v-model="imageStore.bannerLink" class="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="  Link">
          </div>
        </div>

  </div>
</template>

<script>
import { useGeneralStore } from '@/store/general';
import { useImageStore } from '@/store/images';
import { useSocialsStore } from '@/store/socials';
import { useAddonStore } from '@/store/addon';
import { useDesignStore } from '@/store/design';

export default {
  data() {
    return {
    generalStore: useGeneralStore(),
    imageStore: useImageStore(),
    socialStore: useSocialsStore(),
    addonStore: useAddonStore(),
    designStore: useDesignStore(),
    };


  },
};
</script>


