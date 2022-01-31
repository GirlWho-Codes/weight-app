<template>
    <div id="show-weight">
        <app-header></app-header>
        <div class="row">
    <div v-for="track in tracks" :key="track.id" class="col-lg-4 "  >
       <b-card-group deck >
      <b-card bg-variant="dark" text-variant="white"  class="text-center">
        <b-card-text>
            <h2>{{track.name}}</h2>
            <p>Age: {{track.age}}</p>
            <p>Weight(kg): {{track.weight}}</p>
         <p>Height: {{track.height}}</p>
         <p>Waist: {{track.waist}}</p>
       
        </b-card-text>
      </b-card>

      
       </b-card-group>

    </div>  
        </div>
         <ul>
                <b-button pill href="/">Back Home</b-button>
                
                </ul>
  
  </div>
</template>

<script>
import appHeader from './header.vue'
export default {
    data(){
        return{
         tracks:[{
             id:1,
             name: "",
             age: '',
             weight: '',
             height: '',


         },
         {
             id:2,
             name: "",
             age: '',
             weight: '',
             height: '',


         },
        
         
         ]   
        }
    },
    components:{
        'app-header': appHeader
    },
    created(){
         this.$http.get('https://trackyou-app-default-rtdb.firebaseio.com//posts.json').then(function(data){
      
      this.tracks = data.body
     
    })
    }

}
</script>

<style scoped>
/* .show-pad{
    padding-top: 150px;
} */

ul{
    float: right;
    padding: 10px;
    margin-right: 50px;
}

.card{
    /* padding-top: 50px; */
    /* padding: 0px; */
    margin: 20px;
   
}

.row{
    margin: 20px;
}

</style>
