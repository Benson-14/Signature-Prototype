<template>
  <div class=" md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-32">
    <!-- Preview -->
    <div class="pt-4 sticky top-12 bg-white md:flex-1 md:pt-0">
      <div class="mb-4 border-blue-300 border rounded-lg mx-3 min-h-[220px] bg-white">
        <h1 class="bg-gray-100 py-2 rounded-tr-lg rounded-tl-lg px-2">Signature Preview</h1>
        <div class="p-2">
          <!-- Signature Preview Content -->
          <div class="flex items-center space-x-2">
            <div v-for="(socialLink, index) in socialLinks" :key="index">
              <template v-if="socialLink.enabled">
                <a :href="socialLink.link" target="_blank" class="text-blue-500">
                  <img :src="socialLink.imageSrc" height="25" width="25" class="clickable-image" alt="" />
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="pl-8 py-3 bg-slate-100 text-sm">Add Social Links</h1>

      <!-- Add Social Link -->

      <div class="relative mx-8 mt-8">
        <label for="name" class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-light text-gray-900">Captions</label>
        <input
          v-model="caption"
          type="text"
          name="name"
          id="name"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder=""
        />

        <!-- Social Link Fields Container -->
        <div id="socialLinkContainer">
        <div v-for="(socialLink, index) in socialLinks" :key="index" class="flex items-center space-x-2 my-4">
          <img :src="socialLink.imageSrc" height="25" width="25" class="clickable-image" alt="" />
          <input
            v-model="socialLink.link"
            type="text"
            placeholder="Enter social link here"
            class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
          />
          <button @click="toggleSocialLink(index)" type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none" role="switch" :aria-checked="socialLink.enabled" :class="{'bg-blue-200': socialLink.enabled, 'bg-gray-200': !socialLink.enabled}">
            <span :class="{'translate-x-5': socialLink.enabled, 'translate-x-0': !socialLink.enabled}" aria-hidden="true" class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
          </button>

        </div>
      </div>
      </div>

      <div class="relative mx-8 mt-8">
        <!-- Text Field Container -->
        <div id="textFieldContainer">
          <div class="flex-1 relative">
          <!-- Dynamically generated text fields will be appended here -->
          <div v-for="(textField, index) in textFields" :key="index">
            <img :src="textField.imageSrc" height="25" width="25" class="clickable-image" alt="" />
            <input
              v-model="textField.text"
              type="text"
              placeholder="Enter text here"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            <button @click="removeTextField(index)" class="py-1 px-2 ml-2 text-red-500">Remove</button>
          </div>
        </div>
        </div>
      </div>

      <h1 class="pl-8 py-3 bg-slate-100 text-sm">Gallery</h1>

      <!-- Gallery -->
      <div class="relative mx-8 my-4">
        <div class="relative inline-block">
          <div id="imageContainer">
            <button @click="createTextField('../Icons/facebook.png')" class="py-1 px-2">
              <img src="../Icons/slack.png" height="25" width="25" class="clickable-image" alt="" />
            </button>
            <button @click="createTextField('../Icons/instagram.png')" class="py-1 px-2">
              <img src="../Icons/telegram.png" height="25" width="25" class="clickable-image" alt="" />
            </button>
            <button @click="createTextField('../Icons/linkedin.png')" class="py-1 px-2">
              <img src="../Icons/tiktok.png" height="25" width="25" class="clickable-image" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caption: '',
      textFields: [],
      socialLinks: [
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/4494/4494475.png', link: '', enabled: true },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/4138/4138124.png', link: '', enabled: true },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/4494/4494497.png', link: '', enabled: true },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/733/733585.png', link: '', enabled: true },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/4494/4494477.png', link: '', enabled: true },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png', link: '', enabled: true },
      ],
    };
  },
  methods: {
    createTextField(imageSrc) {
      // Create a new text field object
      const newTextField = {
        imageSrc: imageSrc,
        text: '',
      };

      // Add the new text field to the list
      this.textFields.push(newTextField);
    },
    removeTextField(index) {
      // Remove the text field at the specified index
      this.textFields.splice(index, 1);
    },
    toggleSocialLink(index) {
      // Toggle the enabled state of the social link at the specified index
      this.socialLinks[index].enabled = !this.socialLinks[index].enabled;
    },




  },
};
</script>

<style scoped>
/* Your component-specific CSS styles can be placed here */
</style>
