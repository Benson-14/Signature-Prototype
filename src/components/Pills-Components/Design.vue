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
              <div class="w-1 h-full bg-blue-500 rounded mr-2"></div>
              <div class="flex space-y-0 flex-col"> <!-- Remove px-1 class -->
                <div v-for="(socialLink, index) in socialStore.socialLinks" :key="index">
                  <div class="flex items-center "> <!-- Add this div -->
                    <template v-if="socialLink.enabled">
                      <a :href="socialLink.link" target="_blank" class="text-blue-500">
                        <img :src="socialLink.imageSrc" height="25" width="25" class="clickable-image py-1" alt="" />
                      </a>
                    </template>
                  </div>
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
          <div class="flex flex-row mt-2">
            <div v-for="(marketplace, index) in addonStore.marketplaces" :key="index">
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

      </div>


    </div>




  
      <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
        <h1 class="pl-8 py-3 bg-slate-100 text-sm font-normal">General Styles</h1>

<div class="flex justify-center">
  <div class="flex w-full">
    <!-- Left Side for Style Options -->
    <div class="w-full p-8 bg-white">
        <!-- Font Family -->
        <div class="mb-6 flex">
            <label class="block pt-2 text-sm font-light w-1/3">Font Family</label>
            <select class="block w-2/3 p-1 border border-gray-300 rounded" v-model="designStore.selectedFontFamily">
                <!-- Add your font family options here -->
                <option value="Arial, sans-serif">Arial, sans-serif</option>
                <option value="Helvetica, sans-serif">Helvetica, sans-serif</option>
                <option value="Verdana, sans-serif">Verdana, sans-serif</option>
                <option value="Georgia, serif">Georgia, serif</option>
                <option value="Times New Roman, serif">Times New Roman, serif</option>
                <option value="Courier New, monospace">Courier New, monospace</option>
            </select>
        </div>

        <!-- Font Size -->
        <div class="mb-6 flex">
          <label class="block pt-2 text-sm font-light w-1/3">Font Size</label>
          <input
            type="range"
            class="block w-2/3 p-2 rounded"
            min="10"
            max="50"
            step="1"
            :value="designStore.fontSize"
            @input="designStore.setFontSize($event.target.value)"
          />
        </div>

        <!-- Template Color -->
        <div class="mb-6 flex">
            <label class="block pt-2 text-sm font-light w-1/3">Template Color</label>
            <div class="rounded-full overflow-hidden">
              <input type="color" class="block w-8 border-none" value="#3574e8" >
          </div>
        </div>

        <!-- Text Color -->
        <div class="mb-6 flex">
          <label class="block pt-2 text-sm font-light w-1/3">Text Color</label>
          <div class="rounded-full overflow-hidden">
            <input type="color" class="block w-8 border-none" value="#3574e8" >
        </div>
      </div>
    </div>
</div>


</div>

<h1 class="pl-8 py-3 bg-slate-100 text-sm font-normal">Social Icons</h1>


<div class="flex justify-center pt-8">
  <div class="flex w-full">
    <!-- Left Side for Style Options -->
    <div class="w-full px-8 bg-white flex flex-wrap justify-start">
      <div class="flex items-center">
        <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-indigo-600">
        <label for="email" class="ml-3 block text-xs font-light leading-6 text-gray-900 bg-blue-400 rounded-full px-4">Branded</label>
      </div>
      <div class="flex items-center">
        <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 ml-4 border-gray-300 text-blue-600 focus:ring-indigo-600">
        <label for="email" class="ml-3 block text-xs font-light leading-6 text-gray-900 bg-gray-300 rounded-full px-4">Colored</label>
      </div>

    </div>

</div>


</div>

<div class="flex justify-center ml-0">
  <div class="flex w-full">
    <!-- Left Side for Style Options -->
    <div class="w-full p-8 bg-white">

        <!-- Icon Shape -->
        <div class="mb-6 flex">
          <label class="block pt-2 text-sm font-light w-1/3">Icon Shape</label>
          <div class="ml-2 flex items-center space-x-4">
              <input id="square" name="icon-shape" type="radio" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-indigo-600 rounded-md">
              <input id="circle" name="icon-shape" type="radio" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-indigo-600 rounded-full">
          </div>
        </div>


        <!-- Icon Size -->
        <div class="mb-6 flex">
          <label class="block pt-2 text-sm font-light w-1/3">Icon Size</label>
          <input type="range" class="block w-2/3 p-2 rounded" min="10" max="100" step="1" value="16" style="background: linear-gradient(to right, blue, blue) no-repeat; background-size: calc(((16 - 10) / (100 - 10)) * 100% + 1px) 100%;">
      </div>

        <!-- Icon Color -->
        <div class="mb-6 flex">
            <label class="block pt-2 text-sm font-light w-1/3">Icon Color</label>
            <div class="rounded-full overflow-hidden">
              <input type="color" class="block w-8 border-none" value="#3574e8" >
          </div>
        </div>

        <!-- Icon Background -->
        <div class="mb-6 flex">
          <label class="block pt-2 text-sm font-light w-1/3">Icon Background</label>
          <div class="rounded-full overflow-hidden">
            <input type="color" class="block w-8 border-none" value="#3574e8" >
        </div>
      </div>
    </div>
</div>


</div>

<h1 class="pl-8 py-3 bg-slate-100 text-sm font-normal">Reset Settings</h1>

    <!-- Reset Layout Design -->
    <div class="my-6 flex px-8 justify-between">
      <div class="flex">
          <span class="pt-1.5 text-sm font-light text-gray-900">Reset layout design to default styles</span>
      </div>
      <button class="px-2 py-1 bg-blue-600 text-white rounded">Reset Design</button>
    </div>

    <!-- Reset User Info and Images -->
    <div class="my-6 flex px-8 justify-between">
      <div class="flex">
          <span class="pt-1.5 text-sm font-light text-gray-900">Reset all including user information and images</span>
      </div>
      <button class="px-2 py-1 bg-blue-600 text-white rounded">Reset All</button>
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