import { defineStore } from 'pinia';

export const useDesignStore = defineStore('design', {
  state: () => ({
    selectedFontFamily: 'Arial, sans-serif',
    fontSize: 16,
    templateColor: '#3574e8',
    textColor: '#3574e8',
    selectedStyle: 'Branded',
    selectedIconShape: 0 ,
    iconColor: '#ffffff',
    iconSize: 25,
    // Add other design-related state properties here
  }),


});