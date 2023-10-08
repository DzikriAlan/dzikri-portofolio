<template>
  <div class="body">
    <v-container class="container-bang">
      <v-row class="row-bang">
        <v-col class="col-bang">
          <v-sheet>
            <SelfIntroduce />
          </v-sheet>
        </v-col>
      </v-row>
      <div class="br"></div>
      <v-row class="row-bang">
        <v-col class="col-bang">
          <v-sheet>
            <MyExperience />
          </v-sheet>
        </v-col>
      </v-row>
      <div class="br"></div>
      <v-row class="row-bang">
        <v-col class="col-bang">
          <v-sheet>
            <MyPortofolio />
          </v-sheet>
        </v-col>
      </v-row>
      <div class="br"></div>
      <v-row class="row-bang">
        <v-col class="col-bang">
          <v-sheet>
            <MySkill />
          </v-sheet>
        </v-col>
      </v-row>
      <div class="br"></div>
      <v-row>
        <v-col>
          <v-sheet>
            <FooterComponent />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  import SelfIntroduce from './components/SelfIntroduce.vue';
  import MyExperience from './components/MyExperience.vue'
  import MyPortofolio from './components/MyPortofolio.vue'
  import MySkill from './components/MySkill.vue';
  import FooterComponent from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      SelfIntroduce,
      MyExperience,
      MyPortofolio,
      MySkill,
      FooterComponent,
    },
  };
</script>
<style scoped>
 .body{
    font-family: 'arial', sans-serif;
  }
  .container-bang{
    width: 670px;
  }
  .br{
    background-color: #e8ebf0;
    height: 1px;
    width: 100%;
    margin-bottom: 32px;
  }

  @media(min-width: 0px) and (max-width: 690px){
    .container-bang{
      width: 100%;
    }
}
</style>