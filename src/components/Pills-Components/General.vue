<template>
  <div class="h-screen md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-32">
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
              <p :style="{ fontFamily: designStore.selectedFontFamily,fontSize: designStore.fontSize + 'px', color: designStore.textColor, }">{{ generalStore.inputName }}</p>
              <p :style="{ fontFamily: designStore.selectedFontFamily,fontSize: designStore.fontSize + 'px', color: designStore.textColor, }">{{ generalStore.inputCompany }} {{ generalStore.inputPosition }} {{ generalStore.inputDepartment }}</p>
              <div v-for="(field, index) in generalStore.inputFields" :key="index">
                <p :style="{ fontFamily: designStore.selectedFontFamily, fontSize: designStore.fontSize + 'px', color: designStore.textColor, }">
                  <span :style="{ color: designStore.templateColor }">{{ field.type }}:</span> {{ field.value }}
                </p>
            </div>
            </div>

            <!-- Social Icons --> 
            <div class="mt-2 flex items-center">
              <!-- Colored vertical line -->
              <div class="w-1 h-full rounded mr-2" :style="{ backgroundColor: designStore.templateColor }"></div>
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

    <!-- Feature -->
    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="text-base mb-6 bg-slate-100 pl-4 py-2 rounded-tr-lg rounded-tl-lg">General</h1>
      <!-- Name -->
      <div class="relative mb-4 lg:mx-4 mx-2">
        <label for="name" class="absolute -top-2 left-2 inline-block px-1 text-xs bg-white font-light text-gray-900">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="generalStore.inputName"
          class="block w-full rounded-md border py-1.5 text-gray-900 px-2 shadow-sm outline-none sm:text-sm sm:leading-6"
          placeholder=""
        />
      </div>
      <!-- Company -->
      <div class="relative mb-4 lg:mx-4 mx-2">
        <label for="company" class="absolute -top-2 left-2 inline-block px-1 text-xs bg-white font-light text-gray-900">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          v-model="generalStore.inputCompany"
          class="block w-full rounded-md border py-1.5 text-gray-900 px-2 shadow-sm outline-none sm:text-sm sm:leading-6"
          placeholder=""
        />
      </div>
      <!-- Position -->
      <div class="relative mb-4 lg:mx-4 mx-2">
        <label for="position" class="absolute -top-2 left-2 inline-block px-1 text-xs bg-white font-light text-gray-900">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          v-model="generalStore.inputPosition"
          class="block w-full rounded-md border py-1.5 text-gray-900 px-2 shadow-sm outline-none sm:text-sm sm:leading-6"
          placeholder=""
        />
      </div>
      <!-- Department -->
      <div class="relative mb-4 lg:mx-4 mx-2">
        <label for="department" class="absolute -top-2 left-2 inline-block px-1 text-xs bg-white font-light text-gray-900">Department</label>
        <input
          type="text"
          name="department"
          id="department"
          v-model="generalStore.inputDepartment"
          class="block w-full rounded-md border py-1.5 text-gray-900 px-2 shadow-sm outline-none sm:text-sm sm:leading-6"
          placeholder=""
        />
      </div>

      <h1 class="text-base mb-4 bg-slate-100 pl-4 py-2">Contacts</h1>
      <div class="px-3">
        <div class="inline-block relative">
          <button class="py-1 px-2 bg-blue-500 text-white rounded-md" @click="generalStore.toggleAddFieldDropdown">
            Add Field
          </button>
          <div
            v-show="generalStore.isAddFieldDropdownVisible"
            class="absolute -top-[11.5rem] left-[5.4rem] mt-2 py-1 bg-white border rounded-md shadow-md" >
            <button
              class="block w-full py-2 px-4 text-gray-900 hover:bg-gray-100"
              v-for="fieldType in generalStore.fieldTypes"
              :key="fieldType"
              @click="generalStore.addFieldAndCloseDropdown(fieldType)"
            >
              {{ fieldType }}
            </button>
          </div>
        </div>

        <div id="inputFieldsContainer" class="mt-6">
          <div v-for="(field, index) in generalStore.inputFields" :key="index" class="mt-2 flex justify-between items-center" :style="{ paddingBottom: '10px' }">
            <div class="flex-1 relative">
              <label :for="field.type" class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-light text-gray-900">{{ field.type }}</label>
              <input :type="field.type" :name="field.type" :id="field.type" v-model="field.value" class="block w-full rounded-md border px-2 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 " @focus="removeOutline"  />
              <button class="absolute top-2 right-2 px-2 rounded-md text-lg bg-red-100 text-red-600" @click="generalStore.deleteField(index)">X</button>
            </div>
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
import { useDesignStore } from '../../store/design';

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
  methods: {
    toggleAddFieldDropdown() {
      this.generalStore.toggleAddFieldDropdown();
    },
    removeOutline() {
      // Your removeOutline method logic here
    },
  },
};
</script>


<style scoped>
.no-outline:focus {
  outline: none;
}
</style>


