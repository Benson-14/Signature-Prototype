<template>
  <div class="max-w-full py-8 rounded-tr-lg rounded-tl-lg hidden bg-white md:flex md:justify-center md:mx-4 lg:mx-32">
    <div class="isolate bg-slate-100 rounded-full overflow-hidden shadow">
    <button @click="showComponent('General')"  class="py-2 px-4 mx-1 text-center text-xs font-medium hover:bg-gray-50 focus:z-10">General</button>
    <button @click="showComponent('Images')"  class="py-2 px-4 mx-1 text-center text-xs font-medium hover:bg-gray-50 focus:z-10">Images</button>
    <button @click="showComponent('Socials')"  class="py-2 px-4 mx-1 text-center text-xs font-medium hover:bg-gray-50 focus:z-10">Socials</button>
    <button @click="showComponent('AddOns')"  class="py-2 px-4 mx-1 text-center text-xs font-medium hover:bg-gray-50 focus:z-10">Add-ons</button>
    <button @click="showComponent('Design')"  class="py-2 px-4 mx-1 text-center text-xs font-medium hover:bg-gray-50 focus:z-10">Design</button>
  </div>
  </div>

  <div class="fixed bottom-0 w-full bg-white shadow md:hidden">
    <div class="flex divide-x divide-gray-200 md:gap-4 md:justify-center md:divide-x-0 md:items-center">
    <button @click="showComponent('General')"  class="flex-1 p-2 md:rounded-l-full md:py-4 md:px-5 min-w-max text-center text-xs font-medium hover:bg-gray-200 focus:z-10">General</button>
    <button @click="showComponent('Images')"  class="flex-1 p-2 md:py-4 md:px-5 min-w-max text-center text-xs font-medium hover:bg-gray-200 focus:z-10">Images</button>
    <button @click="showComponent('Socials')"  class="flex-1 p-2 md:py-4 md:px-5 min-w-max text-center text-xs font-medium hover:bg-gray-200 focus:z-10">Socials</button>
    <button @click="showComponent('AddOns')"  class="flex-1 p-2 md:py-4 md:px-5 min-w-max text-center text-xs font-medium hover:bg-gray-200 focus:z-10">Add-ons</button>
    <button @click="showComponent('Design')"  class="flex-1 p-2 md:rounded-l-full md:py-4 md:px-5 min-w-max text-center text-xs font-medium hover:bg-gray-200 focus:z-10">Design</button>
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
