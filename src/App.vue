<template>
  <div >
     <router-view></router-view>
    </div>
</template>

<script>
import home from './components/home.vue'
import addWeight from './components/addWeight.vue'
import Measure from './components/measure.vue'
import ShowWeight from './components/showWeight.vue'
export default {
  components:{
    home,
    addWeight,
    Measure,
    ShowWeight

  },
  data () {
    return {
     
    }
  }
}
</script>

<style>
</style>
