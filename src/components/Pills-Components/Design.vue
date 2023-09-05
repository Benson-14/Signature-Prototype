<template>
    <div class="md:flex md:flex-row-reverse md:gap-10 bg-white md:mx-10 md:pt-2 md:pb-6 md:px-12 md:justify-center md:rounded-br-lg md:rounded-bl-lg mb-6 lg:mx-32">
      <!-- Preview -->
      <div class="pt-4 sticky top-12 bg-white md:flex-1 md:pt-0">
        <div class="mb-4 border-blue-300 border rounded-lg mx-3 min-h-[220px] bg-white">
        <h1 class="bg-gray-100 py-2 rounded-tr-lg rounded-tl-lg px-2">Signature Preview</h1>
        <div class="p-2">
          <p> {{ inputName }}</p>
          <p>{{ inputCompany }}</p>
          <p>{{ inputPosition }}</p>
          <p>{{ inputDepartment }}</p>
        </div>
      </div>
      </div>
  
      <div class="mx-3 border-blue-300 border rounded-lg md:flex-1">
        <h1 class="pl-8 py-3 bg-slate-100 text-sm font-normal">General Styles</h1>

<div class="flex justify-center">
  <div class="flex w-full">
    <!-- Left Side for Style Options -->
    <div class="w-full p-8 bg-white">
        <!-- Font Family -->
        <div class="mb-6 flex">
            <label class="block pt-2 text-sm font-light w-1/3">Font Family</label>
            <select class="block w-2/3 p-1 border border-gray-300 rounded">
                <!-- Add your font family options here -->
                <option value="Arial, sans-serif">Arial, sans-serif</option>
                <option value="Helvetica, sans-serif">Helvetica, sans-serif</option>
                <option value="Verdana, sans-serif">Verdana, sans-serif</option>
                <option value="Georgia, serif">Georgia, serif</option>
                <option value="Times New Roman, serif">Times New Roman, serif</option>
                <option value="Courier New, monospace">Courier New, monospace</option>
            </select>
        </div>

        <!-- Font Size -->
        <div class="mb-6 flex">
            <label class="block pt-2 text-sm font-light w-1/3">Font Size</label>
            <input type="range" class="block w-2/3 p-2 rounded" min="10" max="100" step="1" value="16" style="background: linear-gradient(to right, blue, blue) no-repeat; background-size: calc(((16 - 10) / (100 - 10)) * 100% + 1px) 100%;">
        </div>

        <!-- Template Color -->
        <div class="mb-6 flex">
            <label class="block pt-2 text-sm font-light w-1/3">Template Color</label>
            <div class="rounded-full overflow-hidden">
              <input type="color" class="block w-8 border-none" value="#3574e8" >
          </div>
        </div>

        <!-- Text Color -->
        <div class="mb-6 flex">
          <label class="block pt-2 text-sm font-light w-1/3">Text Color</label>
          <div class="rounded-full overflow-hidden">
            <input type="color" class="block w-8 border-none" value="#3574e8" >
        </div>
      </div>
    </div>
</div>


</div>

<h1 class="pl-8 py-3 bg-slate-100 text-sm font-normal">Social Icons</h1>


<div class="flex justify-center pt-8">
  <div class="flex w-full">
    <!-- Left Side for Style Options -->
    <div class="w-full px-8 bg-white flex flex-wrap justify-start">
      <div class="flex items-center">
        <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-indigo-600">
        <label for="email" class="ml-3 block text-xs font-light leading-6 text-gray-900 bg-blue-400 rounded-full px-4">Branded</label>
      </div>
      <div class="flex items-center">
        <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 ml-4 border-gray-300 text-blue-600 focus:ring-indigo-600">
        <label for="email" class="ml-3 block text-xs font-light leading-6 text-gray-900 bg-gray-300 rounded-full px-4">Colored</label>
      </div>

    </div>

</div>


</div>

<div class="flex justify-center ml-0">
  <div class="flex w-full">
    <!-- Left Side for Style Options -->
    <div class="w-full p-8 bg-white">

        <!-- Icon Shape -->
        <div class="mb-6 flex">
          <label class="block pt-2 text-sm font-light w-1/3">Icon Shape</label>
          <div class="ml-2 flex items-center space-x-4">
              <input id="square" name="icon-shape" type="radio" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-indigo-600 rounded">
              <input id="circle" name="icon-shape" type="radio" class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-indigo-600 rounded-full">
          </div>
        </div>


        <!-- Icon Size -->
        <div class="mb-6 flex">
          <label class="block pt-2 text-sm font-light w-1/3">Icon Size</label>
          <input type="range" class="block w-2/3 p-2 rounded" min="10" max="100" step="1" value="16" style="background: linear-gradient(to right, blue, blue) no-repeat; background-size: calc(((16 - 10) / (100 - 10)) * 100% + 1px) 100%;">
      </div>

        <!-- Icon Color -->
        <div class="mb-6 flex">
            <label class="block pt-2 text-sm font-light w-1/3">Icon Color</label>
            <div class="rounded-full overflow-hidden">
              <input type="color" class="block w-8 border-none" value="#3574e8" >
          </div>
        </div>

        <!-- Icon Background -->
        <div class="mb-6 flex">
          <label class="block pt-2 text-sm font-light w-1/3">Icon Background</label>
          <div class="rounded-full overflow-hidden">
            <input type="color" class="block w-8 border-none" value="#3574e8" >
        </div>
      </div>
    </div>
</div>


</div>

<h1 class="pl-8 py-3 bg-slate-100 text-sm font-normal">Reset Settings</h1>

    <!-- Reset Layout Design -->
    <div class="my-6 flex px-8 justify-between">
      <div class="flex">
          <span class="pt-1.5 text-sm font-light text-gray-900">Reset layout design to default styles</span>
      </div>
      <button class="px-2 py-1 bg-blue-600 text-white rounded">Reset Design</button>
    </div>

    <!-- Reset User Info and Images -->
    <div class="my-6 flex px-8 justify-between">
      <div class="flex">
          <span class="pt-1.5 text-sm font-light text-gray-900">Reset all including user information and images</span>
      </div>
      <button class="px-2 py-1 bg-blue-600 text-white rounded">Reset All</button>
    </div>

  
      </div>
  
    </div>
  </template>

<script>
    export default {
        
    }
</script>