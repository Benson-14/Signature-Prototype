// src/store/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: {
      name: '',
      company: '',
      position: '',
      department: '',
      selectedFields: [],

      textColor: '',
      fontFamily: '',
      fontSize: null,
      templateColor: '',
      iconSize: null,
      iconColor: '',
      selectedIconShape: '',

      imagePreviewUrl: '',
      imageLink: '',
      bannerPreviewUrl: '',
      bannerLink: '',
      //computedImageSize: null,
      computedBandwidth: null,

      socialLinks: [],
      textFields: [],

      //CTA Button
      ctaButtonText: '',
      ctaButtonLink: '',
      ctaButtonFont: '',
      signoffCustomization: '',
      customSignoffText: '',
      selectedRadioButtonText: '',
      buttonText: '',
      selectedPlatform: '',
      buttonLink: '',
      buttonFont: '',
      marketplaces: [],
    },
    dashboardAdded: false,
  }),
  actions: {
    setUserData(userData) {
      this.userData = userData;
    },
    setDashboardAdded(value) {
      this.dashboardAdded = value;
    },
  },
});
