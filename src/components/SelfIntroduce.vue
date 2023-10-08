<template>
  <div class="sheet-bang">
    <div>
      <v-img
        cover
        src="public/images/gue.png"
        class="image-gue"
      ></v-img>
    </div>
    <div class="who">
      <h2>Dzikri Alan</h2>
      <div><mark>Full Stack Web Developer</mark></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelfIntroduce',
  }
</script>

<style scoped>
  .sheet-bang{
    display: flex;
    padding-top: 50px;
    padding-bottom: 14px;
  }
  .image-gue{
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
  .who{
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .who mark{
    background-color: #e9d8fd;
  }

  @media(max-width: 767px){
    .sheet-bang{
      display: flex;
      padding-top: 25px;
      padding-bottom: 17px;
    }
    .image-gue{
      width: 78px;
      height: 78px;
      border-radius: 50%;
    }

  }

</style>