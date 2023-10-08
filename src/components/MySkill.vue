<template>
  <div class="skills">SKILLS</div>
  <div class="img-skills">
    <v-btn v-for="item in skills" :key="item.name" class="btn-skills" variant="outlined">
      <img :src="item.svg" style="margin-left: 6px;" class="img-svg" />
      <span>{{ item.name }}</span>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'MySkill',
    data() {
      return {
        skills: [
          {
            svg: 'images/html.svg',
            name: 'HTML',
          },
          {
            svg: 'images/css.svg',
            name: 'CSS',
          },
          {
            svg: 'images/javascript.svg',
            name: 'Javascript',
          },
          {
            svg: 'images/bootstrap.svg',
            name: 'Bootstrap',
          },
          {
            svg: 'images/vuejs.svg',
            name: 'Vue.js',
          },
          {
            svg: 'images/nodejs.svg',
            name: 'Node.js',
          },
          {
            svg: 'images/php.svg',
            name: 'PHP',
          },
          {
            svg: 'images/laravel.svg',
            name: 'Laravel',
          },
          {
            svg: 'images/codeigniter.svg',
            name: 'Codeigniter',
          },
          {
            svg: 'images/express.svg',
            name: 'Express',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  .skills{
    padding-top: 20px;
  }
  .img-skills{
    padding: 20px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  .btn-skills{
    border: 1px solid #e8ebf0;
  }
  .img-svg{
    width: 24px;
    height: 24px;
  }
  .btn-skills span{
    padding-left: 5px;
  }
  @media(max-width: 468px){
    .img-svg{
      width: 14px;
      height: 14px;
    }
    .btn-skills span{
      font-size: 12px;
    }
  }

</style>