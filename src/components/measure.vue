<template>
  <div id="measure">
      <app-header></app-header>
        <br>
      <form v-if="!submitted">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-3" label="Your Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.age"
          placeholder="Enter Age"
          required
        ></b-form-input>
      </b-form-group>

      
<b-form-group id="input-group-4" label="Your Height:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.height"
          placeholder="Enter Height"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Your Waist:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.waist"
          placeholder="Enter Current Waist Size"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Your Weight:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.weight"
          placeholder="Enter Current Weight"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-7">
    <label for="input-7">Today's Date</label>
    <b-form-datepicker id="example-datepicker" v-model="form.value" class="mb-2"></b-form-datepicker>
    </b-form-group>
     
      <b-button type="submit" v-on:click.prevent="post" variant="primary">Submit</b-button>
      <b-button type="reset" href="/measure" variant="danger">Reset</b-button>
    </b-form>
   
    </form>
     <div v-if="submitted">
          <h4>Congratulations!</h4>
           <ul>
                <b-button pill href="/show">View Results</b-button>
                
                </ul>
      </div>
      <div id="preview">
         
    <b-card class="mt-3" header="Form Data Result">
     
      <pre class="m-0">Name:{{form.name}}</pre>
      <pre class="m-0">Email-Address: {{form.email}}</pre>
      <pre class="m-0">Age: {{form.age}}</pre>
      <pre class="m-0">Height: {{form.height}}</pre>
      <pre class="m-0">Waist: {{form.waist}}</pre>
          <pre class="m-0">Weight: {{form.weight}}</pre>
      <pre class="m-0">Date: {{form.value}}</pre>
      
    </b-card>
    </div>
    
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
        form: {
          email: '',
          name: "",
          age: '',
          height:'',
          waist: '',
          weight: '',
          value: '',
          
        },
        submitted:false,
         show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.waist = null
        this.form.age=''
        this.form.height = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      post:function(){
          this.$http.post('https://trackyou-app-default-rtdb.firebaseio.com/posts.json', this.form).then(function(data){
              this.submitted= true;
          })
      }
    }
  }
</script>
<style scoped>
#measure *{
    box-sizing: border-box;
}
#measure{
    margin: 20px auto;
    max-width: 500px;
}

ul{
    float: right;
    padding-top: 300px;
    
}
</style>