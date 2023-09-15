<template>
  <div class="md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-36">
    <!-- Preview -->
    <Preview/>


    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="pl-8 py-3 bg-slate-100 text-sm">Images</h1>

        <div>
          <div class="w-auto p-4 ml-4 mt-8 h-52 bg-white rounded shadow flex flex-col md:w-3/5 lg:w-2/5 ">
            <div class="flex justify-end">
              <button v-if="imageStore.imagePreviewUrl" @click="imageStore.removeImage" class="text-white bg-red-500 rounded-full px-2">X</button>
            </div>

            <!-- Image Placeholder with Upload Message -->
            <div v-if="!imageStore.imagePreviewUrl" class="flex items-center justify-center w-full h-full border-dashed border-gray-300 border-2 rounded-md">
              <label for="profileImageInput" class="text-gray-500 text-center cursor-pointer">
                <div>Upload Your Image</div>
                <img src="@/assets/upload.png" alt="Upload Icon" class="w-16 h-16 mx-auto my-2" />
                <input type="file" id="profileImageInput" class="hidden" @change="imageStore.handleImageUpload">
              </label>
            </div>  
            <img v-if="imageStore.imagePreviewUrl" :src="imageStore.imagePreviewUrl" alt="Uploaded Image" class="w-full h-full object-cover" :style="{ 'border-radius': '55%', width: '100%', height: '100%' }" />
        </div>

        


          <!-- Image Width Slider and Link Input Section -->
        <div class="w-3/5 p-4 ml-4 mt-4 bg-white rounded">
          

          <!-- Image Width Slider -->
          <!-- Image Size Input Section -->
          <div class="w-4/5 p-4 mt-8 bg-white rounded">
            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Size</label>
            <input id="imageSizeSlide" type="range" min="10" max="300" step="1" v-model="imageStore.imageSize" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
          </div>

          <!-- Link Input Section -->
          <input type="text" id="imageLinkInput" v-model="imageStore.imageLink" class="w-full my-4 px-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="Link">
        </div>

          </div>

          <h1 class="pl-8 py-3 bg-slate-100 text-sm">Banner</h1>

          <div class="w-3/5 p-4 ml-4 mt-4 bg-white rounded">
            <!-- Button to Open Canva -->
            <a href="https://www.canva.com/" target="_blank" class="px-4 py-2 w-full bg-blue-500 text-white text-center rounded inline-block">Design on Canva</a>
          </div>

          <div class="w-auto p-4 ml-4 my-4 h-44 bg-white rounded shadow flex flex-col lg:w-3/5">
              <!-- Banner Remove Button -->
            <div class="flex justify-end">
              <button v-if="imageStore.bannerPreviewUrl" @click="imageStore.removeBannerImage" class="text-white bg-red-500 rounded-full px-2">X</button>
            </div>
            <!-- Banner Image Placeholder with Upload Message -->
            <div v-if="!imageStore.bannerPreviewUrl" class="flex items-center justify-center w-full h-full border-dashed border-gray-300 border-2 rounded-md">
              <label for="bannerImageInput" class="text-gray-500 text-center cursor-pointer">
                <div>Upload Your Banner</div>
                <img src="@/assets/upload.png" alt="Upload Icon" class="w-16 h-16 mx-auto my-2" />
                <input type="file" id="bannerImageInput" class="hidden" @change="imageStore.handleBannerImageUpload">
              </label>
            </div>

            <!-- Display Uploaded Banner -->
            <img v-if="imageStore.bannerPreviewUrl" :src="imageStore.bannerPreviewUrl" alt="Uploaded Banner" class="w-full h-full object-cover" />
          </div>

          <!-- Banner Width Slider and Link Input Section -->
          <div class="w-3/5 p-4 ml-4 mt-8 bg-white rounded">
            <!-- Banner Width Slider -->
            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Banner Size</label>
            <input id="bannerWidthSlider" type="range" min="10" max="100" step="1" v-model="imageStore.bannerWidth" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">


            <!-- Link Input Section -->
            
            <input type="text" v-model="imageStore.bannerLink" class="w-full my-4 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="  Link">
          </div>
        </div>

  </div>
</template>

<script>
import { useImageStore } from '@/store/images';
import Preview from '@/components/Preview.vue';

export default {
  components: { Preview },
  data() {
    return {
    imageStore: useImageStore(),
    };


  },
};

</script>


