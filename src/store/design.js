import { defineStore } from 'pinia';

export const useDesignStore = defineStore('design', {
  state: () => ({
    selectedFontFamily: 'Arial, sans-serif',
    fontSize: 16,
    templateColor: '#3574e8',
    textColor: '#3574e8',
    // Add other design-related state properties here
  }),
  methods: {
    setFontSize(fontSize) {
        this.fontSize = fontSize;
      },
  },
    getters: {
    fontSizeStyle: (state) => {
      return {
        fontFamily: state.selectedFontFamily,
        fontSize: `${state.fontSize}px`, // Convert to a string with "px" unit
      };
    },
  },

});