import { defineStore } from 'pinia';
import facebook from '@/assets/social-icons/fs.png'
import instagram from '@/assets/social-icons/is.png'
import linkedin from '@/assets/social-icons/ls.png'
import whatsapp from '@/assets/social-icons/ws.png'
import twitter from '@/assets/social-icons/ts.png'
import youtube from '@/assets/social-icons/ys.png'
import facebookc from '@/assets/social-icons/fc.png'
import instagramc from '@/assets/social-icons/ic.png'
import linkedinc from '@/assets/social-icons/lc.png'
import whatsappc from '@/assets/social-icons/wc.png'
import twitterc from '@/assets/social-icons/tc.png'
import youtubec from '@/assets/social-icons/yc.png'
import slack from '@/assets/social-icons/slack.png'
import telegram from '@/assets/social-icons/telegram.png'
import tiktok from '@/assets/social-icons/tiktok.png'


export const useSocialsStore = defineStore('socials', {
  state() {
    return {
      caption: '',
      textFields: [],
      hasEnabledIcons: false,
      selectedStyle: 'Branded',
      socialLinks: [
        { imageSrc: 'Brande' === 'Branded' ? facebook : facebookc, link: '', enabled: false },
        { imageSrc: 'Brande' === 'Branded' ? instagram : instagramc, link: '', enabled: false },
        { imageSrc: 'Brande' === 'Branded' ? linkedin : linkedinc, link: '', enabled: false },
        { imageSrc: 'Brande' === 'Branded' ? whatsapp : whatsappc, link: '', enabled: false },
        { imageSrc: 'Brande' === 'Branded' ? twitter : twitterc, link: '', enabled: false },
        { imageSrc: 'Brande' === 'Branded' ? youtube : youtubec, link: '', enabled: false },
      ],
      
      galleryIcons: [
        { imageSrc: slack },
        { imageSrc: telegram },
        { imageSrc: tiktok },
        // Add more icons as needed
      ],
    };
  },

  

  actions: {
    createTextField(icon) {
      // Create a new text field object
      const newTextField = {
        imageSrc: icon.imageSrc,
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
