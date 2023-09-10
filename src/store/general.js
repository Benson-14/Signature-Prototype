// general.js
import { defineStore } from 'pinia';

export const useGeneralStore = defineStore({
  id: 'general',
  state: () => ({
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
    isAddFieldDropdownVisible: false,
  }),
  actions: {
    toggleAddFieldDropdown() {
      this.isAddFieldDropdownVisible = !this.isAddFieldDropdownVisible;
    },
    addField(fieldType) {
      if (!this.inputFields.find((field) => field.type === fieldType)) {
        this.inputFields.push({ type: fieldType, value: "" });
      }
    },
    deleteField(index) {
      this.inputFields.splice(index, 1);
    },
    addFieldAndCloseDropdown(fieldType) {
      if (!this.inputFields.find((field) => field.type === fieldType)) {
        this.inputFields.push({ type: fieldType, value: "" });
      }
      this.toggleAddFieldDropdown(); // Close the dropdown
    },
  },
});
