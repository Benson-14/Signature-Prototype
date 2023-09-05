<template>
  <div class="h-screen md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-32">
    <!-- Preview -->


    <div class="pt-4 sticky top-12 bg-white md:flex-1 md:pt-0">
      <div class="mb-4 border-blue-300 border rounded-lg mx-3 min-h-[220px] bg-white">
        <h1 class="bg-gray-100 py-2 rounded-tr-lg rounded-tl-lg px-2">Signature Preview</h1>
        <div class="p-2">
          <p>{{ inputName }}</p>
          <p>{{ inputCompany }} {{ inputPosition }} {{ inputDepartment }}</p>
          <div v-for="(field, index) in inputFields" :key="index">
            <p>
              <span style="color: rgb(54, 115, 238);">{{ field.type }}:</span> {{ field.value }}
            </p>
          </div>
        </div>
      </div>
    </div>



    <!-- Feature -->
    <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
      <h1 class="text-base mb-6 bg-slate-100 pl-4 py-2 rounded-tr-lg rounded-tl-lg">General</h1>
      <!-- Name -->
      <div class="relative mb-4 lg:mx-4 mx-2">
        <label
          for="name"
          class="absolute -top-2 left-2 inline-block px-1 text-xs bg-white font-lighttext-gray-900"
          >Name</label
        >
        <input
          type="text"
          name="name"
          id="name"
          v-model="inputName"
          class="block w-full rounded-md border py-1.5 text-gray-900 px-2 shadow-sm outline-none sm:text-sm sm:leading-6"
          placeholder=""
        />
      </div>
      <!-- Company -->
      <div class="relative mb-4 lg:mx-4 mx-2">
        <label
          for="name"
          class="absolute -top-2 left-2 inline-block px-1 text-xs bg-white font-lighttext-gray-900"
          >Company</label
        >
        <input
          type="text"
          name="name"
          id="name"
          v-model="inputCompany"
          class="block w-full rounded-md border py-1.5 text-gray-900 px-2 shadow-sm outline-none sm:text-sm sm:leading-6"
          placeholder=""
        />
      </div>
      <!-- Position -->
      <div class="relative mb-4 lg:mx-4 mx-2">
        <label
          for="name"
          class="absolute -top-2 left-2 inline-block px-1 text-xs bg-white font-lighttext-gray-900"
          >Position</label
        >
        <input
          type="text"
          name="name"
          id="name"
          v-model="inputPosition"
          class="block w-full rounded-md border py-1.5 text-gray-900 px-2 shadow-sm outline-none sm:text-sm sm:leading-6"
          placeholder=""
        />
      </div>
      <!-- Department -->
      <div class="relative mb-4 lg:mx-4 mx-2">
        <label
          for="name"
          class="absolute -top-2 left-2 inline-block px-1 text-xs bg-white font-lighttext-gray-900"
          >Department</label
        >
        <input
          type="text"
          name="name"
          id="name"
          v-model="inputDepartment"
          class="block w-full rounded-md border py-1.5 text-gray-900 px-2 shadow-sm outline-none sm:text-sm sm:leading-6"
          placeholder=""
        />
      </div>

      <h1 class="text-base mb-4 bg-slate-100 pl-4 py-2">Contacts</h1>
      <div class="px-3">
        <div class="inline-block relative">
          <button
            class="py-1 px-2 bg-blue-500 text-white rounded-md"
            @click="toggleAddFieldDropdown"
          >
            Add Field
          </button>
          <div
            ref="addFieldDropdown"
            class="absolute hidden -top-[11.5rem] left-[5.4rem] mt-2 py-1 bg-white border rounded-md shadow-md"
          >
            <button
              class="block w-full py-2 px-4 text-gray-900 hover:bg-gray-100"
              v-for="fieldType in fieldTypes"
              :key="fieldType"
              @click="addFieldAndCloseDropdown(fieldType)"
            >
              {{ fieldType }}
            </button>
          </div>
        </div>
        <div id="inputFieldsContainer" class="mt-6">
          <div v-for="(field, index) in inputFields" :key="index"
           class="mt-2 flex justify-between items-center" :style="{ paddingBottom: '10px' }">
            <div class="flex-1 relative">
              <label :for="field.type" class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-light text-gray-900">{{ field.type }}</label>
              <input :type="field.type" :name="field.type" :id="field.type" v-model="field.value" class="block w-full rounded-md border px-2 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 " @focus="removeOutline"  />
              <button class="absolute top-2 right-2 px-2 rounded-md text-lg bg-red-100 text-red-600" @click="deleteField(index)">X</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fieldTypes: ["Phone", "Email", "Website", "Address", "Skype"],
      inputFields: [],
      signatureFields: {
        signatureName: { value: "" },
        signatureCompany: { value: "" },
        signaturePosition: { value: "" },
        signatureDepartment: { value: "" },
      },
      inputName: "",
      inputCompany: "",
      inputPosition: "",
      inputDepartment: "",
    }
  },
  methods: {
    addField(fieldType) {
      if (!this.inputFields.find((field) => field.type === fieldType)) {
        this.inputFields.push({ type: fieldType, value: "" });
        this.$nextTick(() => this.updateContainerHeight());
      }
    },
    deleteField(index) {
      this.inputFields.splice(index, 1);
      this.$nextTick(() => this.updateContainerHeight());
    },
    toggleAddFieldDropdown() {
      const dropdown = this.$refs.addFieldDropdown;
      dropdown.classList.toggle("hidden");
    },
    addFieldAndCloseDropdown(fieldType) {
    if (!this.inputFields.find((field) => field.type === fieldType)) {
      this.inputFields.push({ type: fieldType, value: "" });
      this.$nextTick(() => this.updateContainerHeight());
    }
    this.toggleAddFieldDropdown(); // Close the dropdown
  },
  },
};
</script>

<style scoped>
  .no-outline:focus {
    outline: none;
  }
  </style>