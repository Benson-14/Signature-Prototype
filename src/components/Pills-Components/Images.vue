<template>
  <div class="md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-32">
    <!-- Preview -->
    <div class="pt-4 sticky top-12 bg-white md:flex-1 md:pt-0">
      <div class="mb-4 border-blue-300 border rounded-lg mx-3 min-h-[220px] bg-white">
        <h1 class="bg-gray-100 py-2 rounded-tr-lg rounded-tl-lg px-2">Signature Preview</h1>
        <div class="p-2">
          <p>{{ inputName }}</p>
          <p>{{ inputCompany }} {{ inputPosition }} {{ inputDepartment }}</p>
          <div v-for="(field, index) in inputFields" :key="index">
            <p>
              <span style="color: rgb(54, 115, 238);">{{ field.type }}:</span> {{ field.value }}
            </p>
          </div>
          <div class="mt-4" v-if="imagePreviewUrl">
            
            <a :href="imageLink" target="_blank">
              <img :src="imagePreviewUrl" alt="Uploaded Image" :style="{ width: computedImageWidth }">
            </a>
          </div>

          <div class="mt-4" v-if="bannerPreviewUrl">
            <a :href="bannerLink" target="_blank">
              <img :src="bannerPreviewUrl" alt="Banner Image" :style="{ width: computedBannerWidth }">
            </a>
          </div>
        </div>
      </div>
    </div>


    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="pl-8 py-3 bg-slate-100 text-sm">Images</h1>

      <div class="">
        <div class="w-3/5 p-4 ml-4 mt-8 h-32 bg-white rounded shadow">
          <input type="file" id="profileImageInput" class="mb-4" @change="handleImageUpload">
        </div>

          <!-- Image Width Slider and Link Input Section -->
        <div class="w-3/5 p-4 ml-4 mt-8 bg-white rounded">
          <!-- Image Width Slider -->
          <h2 class="text-sm font-normal mb-2 w-24">Image Width</h2>
          <input type="range" id="imageWidthSlider" min="10" max="100" step="1" v-model="imageWidth">

          <!-- Link Input Section -->
          <h2 class="text-sm font-normal mt-4 mb-2">Link</h2>
          <input type="text" id="imageLinkInput" v-model="imageLink" class="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="  Link">
        </div>

          </div>

          <h1 class="pl-8 py-3 bg-slate-100 text-sm">Banner</h1>

          <div class="w-3/5 p-4 ml-4 mt-4 bg-white rounded">
            <!-- Button to Open Canva -->
            <a href="https://www.canva.com/" target="_blank" class="px-4 py-2 w-full bg-blue-500 text-white text-center rounded inline-block">Design on Canva</a>
          </div>

          <div class="w-3/5 p-4 ml-4 my-4 h-32 bg-white rounded shadow">
            <!-- Full-width Image Selector -->
            <input type="file" id="bannerImageInput" class="mb-4" @change="handleBannerImageUpload">
          </div>

          <!-- Banner Width Slider and Link Input Section -->
          <div class="w-3/5 p-4 ml-4 mt-8 bg-white rounded">
            <!-- Banner Width Slider -->
            <h2 class="text-sm font-normal mb-2 w-24">Banner Width</h2>
            <input type="range" id="bannerWidthSlider" min="10" max="100" step="1" v-model="bannerWidth">

            <!-- Link Input Section -->
            <h2 class="text-sm font-normal mt-4 mb-2">Link</h2>
            <input type="text" v-model="bannerLink" class="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="  Link">
          </div>
        </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      inputName: '',
      inputCompany: '',
      inputPosition: '',
      inputDepartment: '',
      inputFields: [],
      imagePreviewUrl: null,
      imageWidth: 50, // Initial image width
      imageLink: '',
      bannerWidth: 50, // Initial banner width
      bannerLink: '',
    };
  },
  computed: {
    computedImageWidth() {
      return `${this.imageWidth}%`;
    },
    computedBannerWidth() {
      return `${this.bannerWidth}%`;
    },
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviewUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleBannerImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.bannerPreviewUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>


