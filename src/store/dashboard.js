import { defineStore } from 'pinia';

export const useDashboardStore = defineStore({
  id: 'dashboard', // Unique store ID
  state: () => ({
    dashboardData: [], // Initialize an empty array to store the data
  }),
  actions: {
    addToDashboard(previewData) {
      this.dashboardData.push(previewData); // Add the previewData to the dashboardData array
    },
  },
});