<template>
  <div id="add-weight">
      <app-header></app-header>
    <form class="weight-style">
        <h2>What is your Current Weight?</h2>
         <b-form-input v-model="number" type="number" placeholder="Enter your weight in Kg"></b-form-input>
              <br>
              <br>
              <ul>
                <b-button pill href="/measure">Continue</b-button>
                
                </ul>
    </form>
  </div>
</template>

<script>
import appHeader from './header.vue'
export default {
    components:{
        'app-header':appHeader
    },
  data () {
    return {
        number: ''

        }
        
    }
  
}
</script>
<style scoped>
#add-weight{
    /* box-sizing: border-box; */
     margin: auto;
    /* max-width: 500px; */
}
.weight-style{
    padding-top:200px ;
       max-width: 500px;
       margin-left: 400px ;
}
ul{
    float: right;
}
</style>
