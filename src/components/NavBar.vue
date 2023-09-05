<template>
  <!-- header -->
  <nav
    class="sticky top-0 px-4 z-50 bg-slate-100 py-3 flex justify-between items-center lg:mx-32"
  >
    <div>
      <span class="title-font font-medium text-lg">Signatures</span>
    </div>
    <div class="flex gap-2">
      <router-link
        to="/add-signature"
        class="text-black title-font font-normal text-sm px-2 lg:px-2 py-[6px] flex items-center rounded-md focus:outline-none"
      >
        Add Signature
      </router-link>
      <router-link
        to="/"
        class="text-white title-font font-normal text-sm px-2 bg-blue-500 lg:px-2 py-[6px] flex items-center rounded-md focus:outline-none"
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
