<template>
  <!-- header -->
  <nav
    class="sticky top-0 px-4 z-50 bg-slate-100 py-3 flex justify-between items-center lg:mx-32"
  >
    <div>
      <span class="title-font font-medium text-lg">Signatures</span>
    </div>
    <div class="flex gap-2">
      <!-- Conditionally render "Add Signature" button when on the home page -->
      <router-link
        v-if="$route.path === '/'"
        to="/add-signature"
        class="text-white title-font font-normal text-sm px-2 bg-blue-600 lg:px-2 py-[6px] flex items-center rounded-md focus:outline-none"
      >
        Add Signature
      </router-link>
      
      <!-- Conditionally render "Dashboard" button when on the /add-signature page -->
      <router-link
        v-if="$route.path === '/add-signature'"
        to="/"
        class="text-white title-font font-normal text-sm px-2 bg-blue-600 lg:px-2 py-[6px] flex items-center rounded-md focus:outline-none"
      >
        Dashboard
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  methods: {},
};
</script>
