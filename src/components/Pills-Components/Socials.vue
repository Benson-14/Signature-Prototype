<template>
  <div class="md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-36">
    <!-- Preview -->
    <Preview/>


    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="pl-8 py-3 bg-slate-100 text-sm">Add Social Links</h1>

      <!-- Add Social Link -->
    
      <div class=" mx-8 mt-6">
        <!--
        <label for="name" class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-light text-gray-900">Captions</label>
        <input
          v-model="socialStore.caption"
          type="text"
          name="name"
          id="name"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder=""
        />  -->

        <!-- Social Link Fields Container -->
        <div id="socialLinkContainer">
          <div v-for="(socialLink, index) in socialStore.socialLinks" :key="index" class="flex items-center space-x-2 my-4">
            <img :src="socialLink.imageSrc" height="25" width="25" class="clickable-image rounded-sm" alt="" />
            <input
              v-model="socialLink.link"
              type="text"
              placeholder="Enter social link here"
              class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
            <button @click="socialStore.toggleSocialLink(index)" type="button" class="bg-gray-200 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none" role="switch" :aria-checked="socialLink.enabled" :class="{'bg-blue-200': socialLink.enabled, 'bg-gray-200': !socialLink.enabled}">
              <span :class="{'translate-x-5': socialLink.enabled, 'translate-x-0': !socialLink.enabled}" aria-hidden="true" class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>

      <div class=" mx-8 mt-2">
        <!-- Text Field Container -->
        <div id="textFieldContainer">
          <div class="flex-1">
            <!-- Dynamically generated text fields will be appended here -->
            <div v-for="(textField, index) in socialStore.textFields" :key="index" class="flex items-center space-x-2 py-2">
              <img :src="textField.imageSrc" height="25" width="25" class="clickable-image" alt="" />
              <input
                v-model="textField.text"
                type="text"
                placeholder="Enter social link here"
                class="flex-1 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              <button @click="socialStore.removeTextField(index)" class="py-1 px-4 ml-2 text-red-500">X</button>
            </div>
          </div>
        </div>
      </div>  

      <h1 class="pl-8 py-3 bg-slate-100 text-sm">Gallery</h1>

      <!-- Gallery -->
      <div class=" mx-8 my-4">
        <div class="inline-block">
          <div id="imageContainer">
            <button @click="socialStore.createTextField('../Icons/facebook.png')" class="py-1 px-2">
              <img src="@/assets/Icons/slack.png" height="25" width="25" class="clickable-image" alt="" />
            </button>
            <button @click="socialStore.createTextField('../Icons/instagram.png')" class="py-1 px-2">
              <img src="@/assets/Icons/telegram.png" height="25" width="25" class="clickable-image" alt="" />
            </button>
            <button @click="socialStore.createTextField('../Icons/linkedin.png')" class="py-1 px-2">
              <img src="@/assets/Icons/tiktok.png" height="25" width="25" class="clickable-image" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { useSocialsStore } from '@/store/socials';
import Preview from '@/components/Preview.vue';

export default {
  components: { Preview },
  data() {
    return {
    socialStore: useSocialsStore(),

    };


  },
};
</script>

<style scoped>
/* Your component-specific CSS styles can be placed here */
</style>
