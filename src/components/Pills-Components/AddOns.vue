<template>
  <div class="md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-32">
    <!-- Preview -->
    <Preview/>


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
import { useAddonStore } from '@/store/addon';
import Preview from '@/components/Preview.vue';



export default {
  components: { Preview },
  data() {
    return {
    addonStore: useAddonStore(),

    };


  },
};
</script>







