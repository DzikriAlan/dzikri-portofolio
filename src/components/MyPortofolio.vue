<template>
  <div class="portofolio">PORTOFOLIO</div>
  <v-tabs
    fixed-tabs
    bg-color="white"
    color="#e7e7ec"
    class="portofolio-tabs"
    stacked
    v-model="tab"
    @click="handleChange"
  >
    <v-tab value="tab-1">
      <div style="color: black;">Pekerjaan</div>
    </v-tab>
    <v-tab value="tab-2">
      <div style="color: black;">Pribadi</div>
    </v-tab>
  </v-tabs>
  <v-window class="window-portofolio">
    <v-window-item class="window-portofolio-item">
      <v-card
        class="card"
        variant="outlined"
        v-for="item in portofolio"
        :key="item.nama"
      >
        <v-card-item class="card-item">
          <inner-image-zoom
            :src="item.images[0].src"
            :hideHint="true"
            zoomType="hover"
            class="inner-image-zoom"
          />
          <v-img
            cover
            :src="item.images[0].src"
            class="img-portofolio"
          ></v-img>
          <div class="what">
            <div style="color: #8596b6">{{ item.kategori }}</div>
            <h3 style="letter-spacing: -1px;">{{ item.nama }}</h3>
            <div style="display: flex"> 
              <span style="padding-right: 5px;">Stack :</span>
              <span v-for="svg in item.description" :key="svg.name">
                <img :src="svg.name" width="24" height="24" style="margin-left: 6px;" />
              </span>
            </div>
          </div>
          <v-dialog v-if="item.tab === 'tab-1'" class="dialog">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" text="Zoom In" class="zoom-in" variant="outlined"></v-btn>
            </template>
            <template v-slot:default="{ }">
              <v-card class="card-dialog">
                <v-carousel height="308" hide-delimiter-background color="blue-grey-lighten-3" :show-arrows="false" class="carousel-dialog">
                  <v-carousel-item
                    v-for="(item,i) in item.images"
                    :key="i"
                    class="carousel-item-dialog"
                  >
                    <InnerImageZoom
                        :src="item.src"
                        :zoomSrc="item.src"
                        zoomType="hover"
                        :showZoom="false"
                        :hideHint="true"
                        class="inner-zoom"
                    />
                  </v-carousel-item>
                </v-carousel>
              </v-card>
            </template>
          </v-dialog>
          <a v-if="item.tab === 'tab-2'" :href="item.link" target="_blank">
            <v-btn text="Zoom In" class="zoom-in" variant="outlined">Visit</v-btn>
          </a>
        </v-card-item>
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script>
  import InnerImageZoom from 'vue-inner-image-zoom'
  import cost1 from '@/assets/images/cost1.png';
  import cost2 from '@/assets/images/cost2.png';
  import cost3 from '@/assets/images/cost3.png';
  import lsp1 from '@/assets/images/lsp1.png';
  import lsp2 from '@/assets/images/lsp2.png';
  import lsp3 from '@/assets/images/lsp3.png';
  import codeigniter from '@/assets/images/codeigniter.svg';
  import laravel from '@/assets/images/laravel.svg';
  import vuejs from '@/assets/images/vuejs.svg';
  import javascript from '@/assets/images/javascript.svg';
  import php from '@/assets/images/php.svg';
  import tailwind from '@/assets/images/tailwind-css.svg';
  import ict from '@/assets/images/ict.png';

  export default {
    name: 'MyPortofolio',
    components: {
      InnerImageZoom,
    },
    data () {
      return {
        tab: null,
        dialog: false,
        portofolio: {},
        tipe: {
          pekerjaan: [
            {
              tab: 'tab-1',
              nama: 'Cost Control System',
              kategori: 'Project Management',
              description: [
                {
                  name: codeigniter,
                },
              ],
              images: [
                {
                  src: cost1,
                },
                {
                  src: cost2,
                },
                {
                  src: cost3,
                },
              ]
            },
            {
              tab: 'tab-1',
              nama: 'LSP System',
              kategori: 'Project Management',
              description: [
                {
                  name: laravel,
                },
                {
                  name: vuejs
                }
              ],
              images: [
                {
                  src: lsp1,
                },
                {
                  src: lsp2,
                },
                {
                  src: lsp3,
                },
              ],
            } 
          ],
          pribadi: [
            {
              tab: 'tab-2',
              nama: 'Web Profile Ekskul ICT',
              kategori: 'Web Profile',
              description: [
                {
                  name: javascript,
                },
                {
                  name: php,
                },
                {
                  name: tailwind,
                },
              ],
              images: [
                {
                  src: ict,
                },
              ],
              link: 'https://ict-project-v3.vercel.app/'
            },
          ],
        },
      }
    },
    created(){
      this.portofolio = this.tipe.pekerjaan;
    },
    methods: {
      handleChange(){
        if (this.tab === 'tab-1'){
          this.portofolio = this.tipe.pekerjaan;
        } else if (this.tab === 'tab-2'){
          this.portofolio = this.tipe.pribadi;
        }
      }
    },
  }
</script>

<style scoped>
  .portofolio{
    text-align: center;
  }
  .window-portofolio{
    padding-top: 30px;
  }
  .window-portofolio-item{
    display: flex;
    column-gap: 30px;
    padding-bottom: 30px;
  }
    .card{
      width: 50%;
      border: 1px solid #e8ebf0;
      background-color: #f7fafc;
    }
    .card-item{
      padding: 0px;
    }
    .img-portofolio{
      display: block;
      width: 100%;
    }
    .card-item .inner-image-zoom{
      display: none;
    }
    .what{
      padding: 15px;
    }
    .zoom-in{
      padding-left: 15px;
      padding-bottom: 15px;
      border: 1px solid #e8ebf0;
    }
    .card-dialog{
      width: 630px;
      display:flex;
      margin: auto;
    }
    .zoom-in{
      color: black;
      text-align: center;
      margin-left: 10px;
      margin-bottom: 10px;
      padding: 5px;
    }
  @media(min-width: 691px){
    .window-portofolio{
      padding-top: 30px;
      height: 370px;
    }
    .img-portofolio{
      display: block;
      width: 100%;
      height: 160px;
    }
  }
  @media(min-width: 0px) and (max-width: 690px){
    .card-item .inner-image-zoom{
      display: block;
    }
    .img-portofolio{
      display: none;
    }
    .window-portofolio-item, .card{
      max-width: 100%;
      height: auto;
    }
    .card-dialog{
      width: 100%;
      height: auto;
    }
    .inner-zoom{
      height: 1000px;
    }
    .zoom-in{
      display: none;
    }
    .dialog{
      display: none;
    }
    @media(min-width: 0px) and (max-width: 567px){
      .window-portofolio-item{
        display: flex;
        flex-direction: column;
        width: 100%;
        row-gap: 30px;
      }
      .card{
        width: 100%;
      }
    }
  }
</style>