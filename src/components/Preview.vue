<template>
  <div class="pt-4 mb-4 sticky top-12 bg-white md:flex-1 md:pt-0">
    <!-- Parent Div with Blue Border -->
    <div class="border-blue-300 border rounded-lg mx-3  bg-white flex flex-col">
      <!-- Signature Preview Heading -->
      <div class="mb-0">
        <h1 class="bg-gray-100 py-2 rounded-tr-lg rounded-tl-lg px-2">Signature Preview</h1>
      </div>

      <!-- Content Container -->
      <div class="p-2 "  >
          <!-- Sign-off -->
          <p class="">{{ addonStore.signoffCustomization === 'Custom' ? addonStore.customSignoffText : addonStore.selectedRadioButtonText }}</p>
          <div class="grid grid-cols-4" >
            <!-- Image -->
            
              <div class="py-4" v-if="imageStore.imagePreviewUrl">
                <a :href="imageStore.imageLink" target="_blank" >
                  <img :src="imageStore.imagePreviewUrl" alt="Uploaded Image" class="" :style="{ 'border-radius': '55%', width: '100%', height: '100%' }">
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
            <div class="mt-2 flex items-center" >
              <!-- Colored vertical line -->
              <div class="w-1 h-full rounded mr-2" :style="{ backgroundColor: designStore.templateColor }"></div>
              <div class="flex space-y-0 flex-col " :style="{ transform: 'scale(' + (designStore.iconSize / 25) + ')' }">
                <div v-for="(socialLink, index) in socialStore.socialLinks" :key="index">
                  <div class="flex items-center">
                    <template v-if="socialLink.enabled">
                      <a :href="socialLink.link" target="_blank" class="text-blue-500">
                        <img :src="socialLink.imageSrc" height="25" width="25" :style="{ backgroundColor: designStore.iconColor, borderRadius: `${designStore.selectedIconShape}%` }" class="clickable-image my-0.5" alt="" />
                      </a>
                    </template>
                  </div>
                </div>

                

                            <!-- Display Gallery Icons Added to Social Link Section -->
            <div v-for="(textField, index) in socialStore.textFields" :key="index">
              <div class="flex items-center">
                <a :href="textField.text" target="_blank" class="text-blue-500">
                  <img :src="textField.imageSrc" height="25" width="25" :style="{ backgroundColor: designStore.iconColor, borderRadius: `${designStore.selectedIconShape}%`  }" class="clickable-image my-0.5 " alt="" />
                </a>
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

      
          <!-- Add to Dashboard and Cancel Buttons -->
    <div class="flex justify-end self-end my-4 pt-4 mx-3">
      <button class="px-3 py-1 rounded-lg text-md text-blue-500 mr-2" @click="cancel">Cancel</button>
      <button class=" px-3 py-1 rounded-md text-md text-white bg-blue-500" @click="addToDashboard">Add to Dashboard</button>
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
import { useUserStore } from '@/store/userStore';


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
  computed: {
    galleryIconsAddedToSocialLinks() {
      // Use a computed property to filter gallery icons that have been added to the social link section
      return this.socialStore.galleryIcons.filter(icon => !icon.enabled);
    },
  },

  methods: {
    addToDashboard() {
      const userStore = useUserStore();
      const userData = {
        // General
        name: this.generalStore.inputName,
        company: this.generalStore.inputCompany,
        position: this.generalStore.inputPosition,
        department: this.generalStore.inputDepartment,
    
        selectedFields: this.generalStore.inputFields.map(field => ({
          type: field.type,
          value: field.value,
        })),

        // Design
        textColor: this.designStore.textColor,
        fontFamily: this.designStore.selectedFontFamily,
        fontSize: this.designStore.fontSize,
        templateColor: this.designStore.templateColor,
        iconSize: this.designStore.iconSize,
        iconColor: this.designStore.iconColor,
        selectedIconShape: this.designStore.selectedIconShape,

        // Image
        imagePreviewUrl: this.imageStore.imagePreviewUrl,
        imageLink: this.imageStore.imageLink,
        bannerPreviewUrl: this.imageStore.bannerPreviewUrl,
        bannerLink: this.imageStore.bannerLink,
        computedImageSize: this.imageStore.computedImageSize,
        computedBandwidth: this.imageStore.computedBandwidth,
        
        socialLinks: this.socialStore.socialLinks.map(socialLink => ({
        link: socialLink.link,
        imageSrc: socialLink.imageSrc,
        enabled: socialLink.enabled,
        // Add more properties from socialLink as needed
        })),
        textFields: this.socialStore.textFields.map(textField => ({
          text: textField.text,
          imageSrc: textField.imageSrc,
          // Add more properties from textField as needed
        })),

        // Add-ons
        ctaButtonText: this.addonStore.ctaButtonText,
        ctaButtonLink: this.addonStore.ctaButtonLink,
        ctaButtonFont: this.addonStore.ctaButtonFont,
        signoffCustomization: this.addonStore.signoffCustomization,
        customSignoffText: this.addonStore.customSignoffText,
        selectedRadioButtonText: this.addonStore.selectedRadioButtonText,
        buttonText: this.addonStore.buttonText,
        selectedPlatform: this.addonStore.selectedPlatform,
        buttonLink: this.addonStore.buttonLink,
        buttonFont: this.addonStore.buttonFont,

        marketplaces: this.addonStore.marketplaces.map(marketplace => ({
          link: marketplace.link,
          imageSrc: marketplace.imageSrc,
          imageAlt: marketplace.imageAlt,
          isIconVisible: marketplace.isIconVisible,
          // Add more properties from marketplace as needed
        })),


          // Add more properties as needed
        };


        // Clear all data
        //General
        this.generalStore.inputName = '',
        this.generalStore.inputCompany = '',
        this.generalStore.inputPosition = '',
        this.generalStore.inputDepartment = '',
        this.generalStore.inputFields = [],
        // Design
        this.designStore.textColor = '',
        this.designStore.selectedFontFamily,
        this.designStore.fontSize,
        this.designStore.templateColor,
        this.designStore.iconSize,
        this.designStore.iconColor,
        this.designStore.selectedIconShape,
        // Images
        this.imageStore.imagePreviewUrl = '';
        this.imageStore.imageLink = '';
        this.imageStore.bannerPreviewUrl = '';
        this.imageStore.bannerLink = '';
        //this.imageStore.computedImageSize = null; 
        this.imageStore.computedBandwidth = null;
        this.socialStore.socialLinks.forEach(socialLink => {
          socialLink.link = '';
          socialLink.enabled = false;
        });
        
        this.socialStore.textFields.forEach(textField => {
          textField.text = '';
        
        });

        // CTA
        this.addonStore.ctaButtonText = '';
        this.addonStore.ctaButtonLink = '';
        this.addonStore.ctaButtonFont = '';
        this.addonStore.signoffCustomization = '',
        this.addonStore.customSignoffText = '';
        this.addonStore.selectedRadioButtonText = '';
        this.addonStore.buttonText = '',
        this.addonStore.selectedPlatform = '',
        this.addonStore.buttonLink = '',
        this.addonStore.buttonFont = '',
        this.addonStore.marketplaces.forEach(marketplace => {
          marketplace.link = ''; // Clear the link property
          marketplace.isIconVisible = false;
        });
      
      userStore.setUserData(userData); // Update the user data in the store
      userStore.setDashboardAdded(true);
      this.$router.push({ name: 'Home' }); // Navigate to the "Home" route
    },
    cancel() {
      // Clear all data
      // General
      this.generalStore.inputName = '';
      this.generalStore.inputCompany = '';
      this.generalStore.inputPosition = '';
      this.generalStore.inputDepartment = '';
      this.generalStore.inputFields = [];
      // Design
      this.designStore.textColor = '';
      this.designStore.selectedFontFamily = '';
      this.designStore.fontSize = '';
      this.designStore.templateColor = '';
      this.designStore.iconSize = '';
      this.designStore.iconColor = '';
      this.designStore.selectedIconShape = '';
      // Images
      this.imageStore.imagePreviewUrl = '';
      this.imageStore.imageLink = '';
      this.imageStore.bannerPreviewUrl = '';
      this.imageStore.bannerLink = '';
      // Social Links
      this.socialStore.socialLinks.forEach(socialLink => {
        socialLink.link = '';
        socialLink.enabled = false;
      });
      // Text Fields
      this.socialStore.textFields.forEach(textField => {
        textField.text = '';
      });
      // CTA
      this.addonStore.ctaButtonText = '';
      this.addonStore.ctaButtonLink = '';
      this.addonStore.ctaButtonFont = '';
      this.addonStore.signoffCustomization = '';
      this.addonStore.customSignoffText = '';
      this.addonStore.selectedRadioButtonText = '';
      this.addonStore.buttonText = '';
      this.addonStore.selectedPlatform = '';
      this.addonStore.buttonLink = '';
      this.addonStore.buttonFont = '';
      // Marketplaces
      this.addonStore.marketplaces.forEach(marketplace => {
        marketplace.link = '';
        marketplace.isIconVisible = false;
      });

      // Navigate back to the home page
      this.$router.push({ name: 'Home' });
    },
  },

};
</script>


<style>

</style>