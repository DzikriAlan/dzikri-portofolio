<template>
  <div class="flex justify-center sm:pt-[100px] pb-[100px]">
    <div class="w-[95%] bg-black text-white flex flex-col-reverse xl:flex-row justify-center p-0 sm:p-6 pt-[108px]">
      <div class="xl:w-1/2 xl:pl-8 mt-[100px] xl:mt-0">
        <div class="slot-content px-4 sm:px-6">
          <slot name="left"></slot>
        </div>
      </div>
      <div class="xl:w-1/2 xl:pl-8">
        <div class="slot-content px-4 sm:px-6 flex justify-center">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>