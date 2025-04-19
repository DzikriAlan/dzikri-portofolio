<template>
  <div class="w-full px-4 mx-auto bg-black text-white pb-8 pt-[6rem] sm:px-6 md:w-4/5 lg:w-[60%]">
    <div class="w-full space-y-6">
      <div class="flex flex-wrap justify-center gap-6">
        <slot name="list"></slot>
      </div>
      <div class="mt-0 flex justify-center text-center text-sm sm:text-[15px]">
        © 2025 Dzikri Alan, All Rights Reserved
      </div>
    </div>
  </div>
</template>