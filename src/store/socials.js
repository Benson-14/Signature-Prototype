import { defineStore } from 'pinia';

export const useSocialsStore = defineStore('socials', {
  state() {
    return {
      caption: '',
      textFields: [],
      socialLinks: [
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/4494/4494475.png', link: '', enabled: false },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/4138/4138124.png', link: '', enabled: false },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/4494/4494497.png', link: '', enabled: false },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/733/733585.png', link: '', enabled: false },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/4494/4494477.png', link: '', enabled: false },
        { imageSrc: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png', link: '', enabled: false },
      ],
    };
  },
  actions: {
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
    // Define other actions here as needed
  },
});
