<template>
  <div class="max-w-full py-8 rounded-tr-lg rounded-tl-lg hidden bg-white md:flex md:justify-center md:mx-10 lg:mx-36">
    <div class="isolate bg-slate-100 rounded-full overflow-hidden shadow">
    <button @click="showComponent('General')" :class="{ 'selected': currentComponent === 'General','hover:bg-gray-50': currentComponent !== 'General' }" class="rounded-3xl py-2 px-4 mx-1 text-center text-xs font-medium focus:z-10"> <i class="fa-solid fa-bars mr-1"></i> General</button>
    <button @click="showComponent('Images')" :class="{ 'selected': currentComponent === 'Images','hover:bg-gray-50': currentComponent !== 'Images' }" class="rounded-3xl py-2 px-4 mx-1 text-center text-xs font-medium focus:z-10"> <i class="fa-regular fa-image mr-1 "></i>Images</button>
    <button @click="showComponent('Socials')" :class="{ 'selected': currentComponent === 'Socials','hover:bg-gray-50': currentComponent !== 'Socials' }" class="rounded-3xl py-2 px-4 mx-1 text-center text-xs font-medium focus:z-10"> <i class="fa-solid fa-share-nodes mr-1"></i>Socials</button>
    <button @click="showComponent('AddOns')" :class="{ 'selected': currentComponent === 'AddOns','hover:bg-gray-50': currentComponent !== 'AddOns'}" class="rounded-3xl py-2 px-4 mx-1 text-center text-xs font-medium focus:z-10"> <i class="fa-solid fa-folder-plus mr-1"></i>Add-ons </button>
    <button @click="showComponent('Design')" :class="{ 'selected': currentComponent === 'Design','hover:bg-gray-50': currentComponent !== 'Design' }" class="rounded-3xl py-2 px-4 mx-1 text-center text-xs font-medium focus:z-10"><i class="fa-solid fa-brush mr-1"></i>Design</button>
  </div>
  </div>

  <div class="fixed bottom-0 w-full bg-white shadow md:hidden">
    <div class="flex divide-x divide-gray-200 md:gap-4 md:justify-center md:divide-x-0 md:items-center">
    <button @click="showComponent('General')" :class="{ 'selected': currentComponent === 'General','hover:bg-gray-200': currentComponent !== 'General' }" class="flex-1 p-2 md:rounded-l-full md:py-4 md:px-5 min-w-max text-center text-xs font-medium focus:z-10"><i class="fa-solid fa-bars mr-1"></i>General</button>
    <button @click="showComponent('Images')" :class="{ 'selected': currentComponent === 'Images','hover:bg-gray-200': currentComponent !== 'Images' }"  class="flex-1 p-2 md:py-4 md:px-5 min-w-max text-center text-xs font-medium  focus:z-10"><i class="fa-regular fa-image mr-1 "></i>Images</button>
    <button @click="showComponent('Socials')" :class="{ 'selected': currentComponent === 'Socials','hover:bg-gray-200': currentComponent !== 'Socials'  }" class="flex-1 p-2 md:py-4 md:px-5 min-w-max text-center text-xs font-medium focus:z-10"><i class="fa-solid fa-share-nodes mr-1"></i>Socials</button>
    <button @click="showComponent('AddOns')" :class="{ 'selected': currentComponent === 'AddOns','hover:bg-gray-200': currentComponent !== 'AddOns' }" class="flex-1 p-2 md:py-4 md:px-5 min-w-max text-center text-xs font-medium focus:z-10"><i class="fa-solid fa-folder-plus mr-1"></i>Add-ons</button>
    <button @click="showComponent('Design')" :class="{ 'selected': currentComponent === 'Design','hover:bg-gray-200': currentComponent !== 'Design' }"  class="flex-1 p-2 md:rounded-l-full md:py-4 md:px-5 min-w-max text-center text-xs font-medium focus:z-10"><i class="fa-solid fa-brush mr-1"></i>Design</button>
  </div>
  </div>


  <!-- Components -->
  <div v-if="currentComponent === 'General'">
  <General />
  </div>
  <div v-if="currentComponent === 'Images'">
  <Images />
  </div>
  <div v-if="currentComponent === 'Socials'">
  <Socials />
  </div>
  <div v-if="currentComponent === 'AddOns'">
  <AddOns />
  </div>
  <div v-if="currentComponent === 'Design'">
  <Design />
  </div>
</template>

<script>
import General from '../components/Pills-Components/General.vue';
import Images from '../components/Pills-Components/Images.vue';
import Socials from '../components/Pills-Components/Socials.vue';
import AddOns from '../components/Pills-Components/AddOns.vue';
import Design from '../components/Pills-Components/Design.vue';


export default {
    components: { General, Images, Socials, AddOns, Design  },
    data() {
        return {
            currentComponent: 'General',
        };
    },
    methods: {
        showComponent(component) {
            this.currentComponent = component;
        },
    },
};
</script>


<style>
.selected {
  /* Add your desired styles to highlight the selected button here */
  background-color: rgb(22, 71, 87);
  color: #ffffff; /* Example text color */
  /* Add more styles as needed */
}
</style>