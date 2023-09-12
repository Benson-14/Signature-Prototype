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
          <div class=" flex flex-row mt-2">
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


    <!-- Add-ON -->

    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="pl-8 py-3 bg-slate-100 text-sm mb-2">Add-Ons</h1>
      <!-- CTA Section -->
      <div class=" mb-4 lg:mx-4 mx-2">
        <button class="border w-full text-left hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white px-4 py-2 rounded-lg" @click="addonStore.toggleSection('CTA')">CTA</button>
        <div v-if="addonStore.showCTA" class="mt-2 border border-blue-500 rounded-lg px-4 py-4">
          <!-- Customization fields for CTA -->
          <div class="mb-2 flex items-center">
            <label class="block mb-1 mr-2 w-26">Button Text:</label>
            <input type="text" v-model="addonStore.ctaButtonText" placeholder="Button Text" class="w-50 px-4 py-2 border rounded-lg">
          </div>
          <div class="mb-2 flex items-center">
            <label class="block mb-1 mr-2 w-26">Button Link:</label>
            <input type="text" v-model="addonStore.ctaButtonLink" placeholder="Button Link" class="w-50 px-4 py-2 border rounded-lg">
          </div>
          <div class="mb-2 flex items-center">
            <label class="block mb-1 mr-2">Button Font:</label>
            <select v-model="addonStore.ctaButtonFont" class="w-56 px-4 py-2 border rounded-lg">
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Times New Roman">Times New Roman</option>
              <!-- Add more font options as needed -->
            </select>
          </div>
        </div>
      </div>

      <!-- Sign-off Section -->
      <div class="mb-4 lg:mx-4 mx-2">
        <button class="border w-full text-left hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white px-4 py-2 rounded-lg" @click="addonStore.toggleSection('signoff')">Sign-off</button>
        <div v-if="addonStore.showSignoff" class="mt-2 px-4 py-4 border border-blue-500 rounded-lg">
          <!-- Customization fields for Sign-off -->
          <div class="flex flex-wrap">
            <div class="w-1/2 mb-2">
              <label class="inline-flex items-center">
                <input type="radio" v-model="addonStore.signoffCustomization" value="Option 1" @change="addonStore.updateSelectedRadioButtonText('Best Regards,')"> Best Regards
              </label>
            </div>
            <div class="w-1/2 mb-2">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="addonStore.signoffCustomization" value="Option 2" @change="addonStore.updateSelectedRadioButtonText('Sincerely,')"> Sincerely
                </label>
              </div>
              <div class="w-1/2 mb-2">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="addonStore.signoffCustomization" value="Option 3" @change="addonStore.updateSelectedRadioButtonText('Regards,')"> Regards
                </label>
              </div>
              <div class="w-1/2 mb-2">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="addonStore.signoffCustomization" value="Option 4" @change="addonStore.updateSelectedRadioButtonText('Best Wishes,')"> Best Wishes
                </label>
              </div>
            <!-- ... Repeat for other radio options ... -->
            <!-- Custom radio button -->
            <div class="w-1/2 mb-2">
              <label class="inline-flex items-center">
                <input type="radio" v-model="addonStore.signoffCustomization" value="Custom"> Custom
              </label>
            </div>
            <!-- Input field for custom signoff text -->
            <div class="w-full mb-2" v-if="addonStore.signoffCustomization === 'Custom'">
              <input type="text" v-model="addonStore.customSignoffText" placeholder="Custom Sign-off Text" class="border rounded-md">
            </div>
          </div>
          <div class="mb-2">
            <button @click="addonStore.clearSignatureText" class="px-2 bg-red-500 rounded-lg text-white font-normal">Clear Text</button>
          </div>
        </div>
      </div>

      <!-- Marketplace Section -->
      <div class="mb-4 lg:mx-4 mx-2">
        <button class="border w-full text-left hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white px-4 py-2 rounded-lg" @click="addonStore.toggleSection('marketplace')">Marketplace</button>
        <div v-if="addonStore.showMarketplace" class="mt-2 flex flex-wrap items-center border border-blue-500 rounded-lg px-4 py-4">
          <div
            v-for="(marketplace, index) in addonStore.marketplaces"
            :key="index"
            class="flex items-center"
            style="width: 100%;"
          >
            <img
              :src="marketplace.imageSrc"
              :alt="marketplace.imageAlt"
              class="mr-2 flex-shrink-0 my-2 rounded-md"
              style="width: 20%; max-width: 20%; height: 35px;"
              
            >
            <!-- Input for Link -->
            <input
              type="text"
              v-model="marketplace.link"
              :placeholder="marketplace.linkPlaceholder"
              class="w-full px-4 py-2 border rounded-lg flex-grow"
              @input="addonStore.toggleMarketplaceIconVisibility(index)"
            >
            <!-- Remove button -->
            <button
              @click="addonStore.removeLink(index)"
              class="ml-2 p-2 text-red-500 hover:text-red-700"
            >
              X
            </button>
          </div>
        </div>
      </div>

      <!-- Video Conference Section -->
      <div class="mb-4 lg:mx-4 mx-2">
        <button class="border w-full text-left hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white px-4 py-2 rounded-lg" @click="addonStore.toggleSection('videoConference')">Video Conference</button>
        <div v-if="addonStore.showVideoConference" class="mt-2 border border-blue-500 rounded-lg px-4">
          <!-- Customization fields for Video Conference -->
          <div class="mb-2 py-4">
            <div class="flex">
              <button @click="addonStore.selectPlatform('Google Meet')" :class="{ 'bg-blue-500 text-white': addonStore.selectedPlatform === 'Google Meet' }" class="flex-1 p-2 mr-2 rounded-lg border border-blue-500">Google Meet</button>
              <button @click="addonStore.selectPlatform('Zoom')" :class="{ 'bg-blue-500 text-white': addonStore.selectedPlatform === 'Zoom' }" class="flex-1 p-2 mr-2 rounded-lg border border-blue-500">Zoom</button>
              <button @click="addonStore.selectPlatform('Microsoft Teams')" :class="{ 'bg-blue-500 text-white': addonStore.selectedPlatform === 'Microsoft Teams' }" class="flex-1 p-2 rounded-lg border border-blue-500">Microsoft Teams</button>
            </div>
          </div>
          <div class="mb-2 flex items-center">
            <label class="block mb-1 mr-2 w-26">Button Text:</label>
            <input type="text" v-model="addonStore.buttonText[addonStore.selectedPlatform]" placeholder="Button Text" class="w-50 px-4 py-2 border rounded-lg">
          </div>
          <div class="mb-2 flex items-center">
            <label class="block mb-1 mr-2">Link:</label>
            <input type="text" v-model="addonStore.buttonLink" placeholder="Button Link" class="w-72 px-4 py-2 border rounded-lg">
          </div>
          <div class="mb-2 flex items-center">
            <label class="block mb-1 mr-2">Font:</label>
            <select v-model="addonStore.buttonFont" class="w-72 px-4 py-2 border rounded-lg">
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Times New Roman">Times New Roman</option>
              <!-- Add more font options as needed -->
            </select>
          </div>
        </div>

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







