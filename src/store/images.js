// imageStore.js

import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
  state: () => ({
    imageSize: 30, // Initial image width
    imageLink: '',
    bannerWidth: 50, // Initial banner width
    bannerLink: '',
    imagePreviewUrl: null,
    bannerPreviewUrl: null, 
  }),
  getters: {
    computedImageSize: (state) => `${state.imageSize}%`,
    computedBannerWidth: (state) => `${state.bannerWidth}%`,
  },
  actions: {
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
    removeImage() {
      this.imagePreviewUrl = null;
    },
    removeBannerImage() {
      this.bannerPreviewUrl = null;
    },
  },
});
