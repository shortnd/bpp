<template>
  <div class="container">
    <div class="col-md-12">
      <div class="contact-heading-wrap text-center">
        <h2>Contact Me</h2>
        <p>
          Please Fill out the information below and I will get back to you in the next 24-48 hours
        </p>
      </div>
      <form class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" required aria-required="true" name="name" id="name">
        <label for="email">Email:</label>
        <input class="form-control" type="email" name="email" id="email" required aria-required="true">
        <label for="main-message">Message:</label>
        <textarea class="form-control" name="main-message" id="main-message" cols="30" rows="10" required aria-required="true"></textarea>
        <span @click="addEstimateCalculate = !addEstimateCalculate">
          <span v-if="!addEstimateCalculate" class="estimate-link estimate-link-show">+ Add Estimate</span><span v-else class="estimate-link estimate-link-hide">- Hide Estimate</span></span>
          <div v-show="this.addEstimateCalculate">
            <estimate></estimate>
          </div>
        <br>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Estimate from '~/components/Estimate';
export default {
  data: function () {
    return {
      addEstimateCalculate: false,
    }
  },
  components: {
    Estimate
  }
}
</script>


<style>
.estimate-link {
  display:inline-block;
  margin: 5px 0;
}
.estimate-link-show{
  color: blue;
}
.estimate-link-show:hover{
  text-decoration: underline;
}
.estimate-link-hide {
  color: red;
}
.estimate-link-hide:hover{
  text-decoration: underline;
}
</style>

