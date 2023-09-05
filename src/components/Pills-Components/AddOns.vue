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
          <!-- Button in Preview Section -->
            <div class="mt-4" v-if="ctaButtonText">
              <a :href="ctaButtonLink" target="_blank">
                <button :style="{ fontFamily: ctaButtonFont,backgroundColor: 'lightblue' }" class="px-2">{{ ctaButtonText }}</button>
              </a>
            </div>
          <p class="mt-4">{{ selectedRadioButtonText || customSignoffText }}</p>
        </div>
              <!-- Marketplace Icon -->
      <div class="mt-4" v-if="isMarketplaceIconVisible">
        <a :href="marketplaceLink" target="_blank">
        <img
          src="../Images/playstore.png"
          alt="Buy on Amazon"
          class="mr-2 w-40"
          style="width: 100px; height: 50px;"
        >
      </a>
      </div>
      </div>
    </div>

    <!-- Add-ON -->

    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="pl-8 py-3 bg-slate-100 text-sm mb-2">Add-Ons</h1>
      <!-- CTA Section -->
      <div class="relative mb-4 lg:mx-4 mx-2">
        <button class="w-full text-left hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white px-4 py-2 rounded-lg" @click="toggleSection('CTA')">CTA</button>
        <div v-if="showCTA" class="mt-2 bg-slate-200">
          <!-- Customization fields for CTA -->
          <div class="mb-2 mr-4"> <!-- Added 'mr-4' class for spacing -->
            <label class="block mb-1">Button Text:</label>
            <input type="text" v-model="ctaButtonText" placeholder="Button Text">
          </div>
          <div class="mb-2">
            <label class="block mb-1">Button Link:</label>
            <input type="text" v-model="ctaButtonLink" placeholder="Button Link">
          </div>
          <div class="mb-2">
            <label class="block mb-1">Button Font:</label>
            <select v-model="ctaButtonFont" class="w-full px-4 py-2 border rounded-lg">
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Times New Roman">Times New Roman</option>
              <!-- Add more font options as needed -->
            </select>
          </div>
          
        </div>
      </div>

    <!-- Sign-off Section -->
    <div class="relative mb-4 lg:mx-4 mx-2">
      <button class="w-full text-left hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white px-4 py-2 rounded-lg" @click="toggleSection('signoff')">Sign-off</button>
      <div v-if="showSignoff" class="mt-2 mx-2 px-2 bg-slate-200 rounded-lg">
        <!-- Customization fields for Sign-off -->
            <div class="flex flex-wrap">
              <div class="w-1/2 mb-2">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="signoffCustomization" value="Option 1" @change="updateSelectedRadioButtonText('Best Regards')"> Best Regards
                </label>
              </div>
              <div class="w-1/2 mb-2">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="signoffCustomization" value="Option 2" @change="updateSelectedRadioButtonText('Sincerely')"> Sincerely
                </label>
              </div>
              <div class="w-1/2 mb-2">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="signoffCustomization" value="Option 3" @change="updateSelectedRadioButtonText('Regards')"> Regards
                </label>
              </div>
              <div class="w-1/2 mb-2">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="signoffCustomization" value="Option 4" @change="updateSelectedRadioButtonText('Best Wishes')"> Best Wishes
                </label>
              </div>
              <div class="w-1/2 mb-2">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="signoffCustomization" value="Option 5" @change="updateSelectedRadioButtonText('')"> Custom
                </label>
              </div>

          </div>
              <!-- Custom text input for "Custom" option -->
              <div v-if="signoffCustomization === 'Option 5'">
                <input
                  type="text"
                  v-model="customSignoffText"
                  class="w-50 px-4 mb-2 border rounded-lg"
                  placeholder="Custom Text"
      
                >
              </div>
      </div>
    </div>

    <!-- Marketplace Section -->
    <div class="relative mb-4 lg:mx-4 mx-2">
      <button class="w-full text-left hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white px-4 py-2 rounded-lg" @click="toggleSection('marketplace')">Marketplace</button>
      <div v-if="showMarketplace" class="mt-2 flex items-center ">
        <!-- Conditionally render the icon based on visibility -->
        <img
          src="../Images/playstore.png"
          alt="Buy on Amazon"
          class="mr-2 w-40"
          style="width: 100px; height: 50px;"
        >
        <!-- Input for Link -->
        <input
          type="text"
          v-model="marketplaceLink"
          placeholder="Playstore Link"
          class="w-full px-4 py-2 border rounded-lg"
          @input="toggleMarketplaceIconVisibility"
        >
      </div>

    </div>

    <!-- Video Conference Section -->
    <div class="relative mb-4 lg:mx-4 mx-2">
      <button class="w-full text-left hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white px-4 py-2 rounded-lg" @click="toggleSection('calendar')">Video Conference</button>
      <div v-if="showCalendar" class="mt-2">
        <!-- Customization fields for Calendar -->
        <input type="text" v-model="calendarCustomization" placeholder="Calendar Customization">
      </div>
    </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showCTA: false,
      showSignoff: false,
      showMarketplace: false,
      showCalendar: false,
      ctaCustomization: "",
      signoffCustomization: "",
      marketplaceCustomization: "",
      calendarCustomization: "",
      selectedRadioButtonText: "",
      marketplaceLink: "", // Input value for the marketplace link
      isMarketplaceIconVisible: false, // Control the visibility of the icon
      ctaButtonText: "", // Button Text
      ctaButtonLink: "", // Button Link
      ctaButtonFont: "Arial", // Default button font
    };
  },
  methods: {
    toggleSection(sectionName) {
      // Toggle the visibility of the selected section
      this[`show${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}`] = !this[
        `show${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}`
      ];
    },
    updateSelectedRadioButtonText(text) {
      this.selectedRadioButtonText = text;
    },
    toggleMarketplaceIconVisibility() {
    this.isMarketplaceIconVisible = !!this.marketplaceLink; // Toggle visibility based on input value
  },
  },
};
</script>



