// addon.js
import { defineStore } from 'pinia';

export const useAddonStore = defineStore({
  id: 'addon',
  state: () => ({
    showCTA: false,
    showSignoff: false,
    showMarketplace: false,
    showVideoConference: false,
    ctaButtonText: "",
    ctaButtonLink: "",
    ctaButtonFont: "Arial",
    signoffCustomization: "",
    customSignoffText: "",
    selectedRadioButtonText: "",
    marketplaceLink: "",
    isMarketplaceIconVisible: false,
    selectedPlatform: "",
    buttonText: {
    "Google Meet": "Meet me on Google Meet",
    "Zoom": "Meet me on Zoom",
    "Microsoft Teams": "Meet me on Microsoft Teams",
  },
    buttonLink: "",
    buttonFont: "Arial",
    marketplaces: [
      {
        title: "Marketplace 1",
        imageSrc: "https://img.mysignature.io/addons/v2/googleplay_shape1_black.png",
        imageAlt: "Buy on Playstore",
        link: "",
        linkPlaceholder: "Playstore Link",
        isIconVisible: false,
      },
      {
        title: "Marketplace 2",
        imageSrc: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",
        imageAlt: "Buy on Apple",
        link: "",
        linkPlaceholder: "Apple Link",
        isIconVisible: false,
      },
      {
        title: "Marketplace 3",
        imageSrc: "https://www.freeiconspng.com/uploads/amazon-icon-22.png",
        imageAlt: "Buy on Amazon",
        link: "",
        linkPlaceholder: "Amazon Link",
        isIconVisible: false,
      },
      // Add more marketplace sections as needed
    ],
    showMarketplaces: false,
  }),
  actions: {
    toggleSection(sectionName) {
      this[`show${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}`] = !this[
        `show${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}`
      ];
    },
    updateSelectedRadioButtonText(text) {
      if (this.signoffCustomization !== 'Custom') {
        this.selectedRadioButtonText = text;
      }
    },
    toggleMarketplaceIconVisibility() {
      this.isMarketplaceIconVisible = !!this.marketplaceLink;
    },
    selectPlatform(platform) {
      if (this.selectedPlatform === platform) {
        this.selectedPlatform = "";
      } else {
        this.selectedPlatform = platform;
      }
    },
    toggleMarketplaceSection() {
      this.showMarketplaces = !this.showMarketplaces;
    },
    toggleMarketplaceIconVisibility(index) {
      this.marketplaces[index].isIconVisible = !!this.marketplaces[index].link;
    },
    removeLink(index) {
      this.marketplaces[index].link = "";
      this.marketplaces[index].isIconVisible = false;
    },
    clearSignatureText() {
      this.selectedRadioButtonText = "";
      this.customSignoffText = "";
      this.signoffCustomization = "";
    },
  },
});
