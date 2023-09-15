<template>
  <div class=" md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-36">
    <!-- Preview -->
    <Preview/>



    <!-- Feature -->
    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="text-base mb-6 bg-slate-100 pl-4 py-2 rounded-tr-lg rounded-tl-lg">General</h1>

      <!-- Name -->
      <div class="rounded-md px-3 pb-1 pt-1 mb-4 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600 lg:mx-4 mx-2">
        <label for="name" class="block text-xs font-medium text-gray-900">Name</label>
        <input
          type="text"
          name="name" 
          id="name" 
          v-model="generalStore.inputName"
          class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
          placeholder="">
      </div>

      <!-- Company -->
      <div class="rounded-md px-3 pb-1 pt-1 mb-4 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600 lg:mx-4 mx-2">
        <label for="name" class="block text-xs font-medium text-gray-900">Company</label>
        <input
          type="text"
          name="name" 
          id="name" 
          v-model="generalStore.inputCompany"
          class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
          placeholder="">
      </div>

      <!-- Position -->
      <div class="rounded-md px-3 pb-1 pt-1 mb-4 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600 lg:mx-4 mx-2">
        <label for="name" class="block text-xs font-medium text-gray-900">Position</label>
        <input
          type="text"
          name="name" 
          id="name" 
          v-model="generalStore.inputPosition"
          class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
          placeholder="">
      </div>

      <!-- Department -->
      <div class="rounded-md px-3 pb-1 pt-1 mb-4 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600 lg:mx-4 mx-2">
        <label for="name" class="block text-xs font-medium text-gray-900">Department</label>
        <input
          type="text"
          name="name" 
          id="name" 
          v-model="generalStore.inputDepartment"
          class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
          placeholder="">
      </div>

      <h1 class="text-base mb-4 bg-slate-100 pl-4 py-2">Contacts</h1>
      <div class="px-3" >
        <div class="inline-block relative">
          <button class="py-1 px-2 bg-blue-500 text-white rounded-md" @click="generalStore.toggleAddFieldDropdown">
            Add Field
          </button>
          <div
            v-show="generalStore.isAddFieldDropdownVisible"
            class="absolute -top-[11.5rem] left-[5.4rem] mt-2 py-1 bg-white border rounded-md shadow-md" >
            <button
              class="block w-full py-2 px-4 text-gray-900 hover:bg-gray-100"
              v-for="fieldType in generalStore.fieldTypes"
              :key="fieldType"
              @click="generalStore.addFieldAndCloseDropdown(fieldType)"
            >
              {{ fieldType }}
            </button>
          </div>
        </div>

        <div id="inputFieldsContainer" class="mt-6">
          <div v-for="(field, index) in generalStore.inputFields" :key="index" class="rounded-md px-3 pb-1 pt-1 mb-2  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600 lg:mx-1 mt-4 flex items-center">
            <div class="flex-1">
              <label :for="field.type" class="block text-xs font-medium text-gray-900">{{ field.type }}</label>
              <input :type="field.type" :name="field.type" :id="field.type" v-model="field.value" class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" :placeholder="field.type" />
            </div>
            <button class="ml-2 px-2 rounded-full text-lg bg-red-100 text-red-600" @click="generalStore.deleteField(index)">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGeneralStore } from '@/store/general';
import { useDesignStore } from '@/store/design';
import Preview from '@/components/Preview.vue';


export default {
  components: { Preview },

  data() {
    return {
      generalStore: useGeneralStore(),
      designStore: useDesignStore(),
    };
  },
  methods: {
    toggleAddFieldDropdown() {
      this.generalStore.toggleAddFieldDropdown();
    },
    removeOutline() {
      // Your removeOutline method logic here
    },
  },
};
</script>


<style scoped>
.no-outline:focus {
  outline: none;
}
</style>


