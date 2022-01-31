<template>
    <div id="app-home">
        <app-header></app-header>
       
         <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width=""
      img-height="480"
      class="carousel"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="TrackYou"
        text="Welcome to TrackYou, the number 1 weight tracking  "
        img-src="https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      ></b-carousel-slide>

     <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    
    </b-carousel>

   
    </div>
</template>

<script>
import appHeader from './header.vue'
export default {
    components:{
        'app-header': appHeader
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  
}
</script>
<style scoped>

</style>
