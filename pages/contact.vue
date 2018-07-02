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
          <div class="col-md-8">
            <h3>Estimate</h3>
            <div class="container">
              <label for="length">Length:
              <input class="form-control" type="number" name="length" id="length" v-model.number="$store.state.estimate.length" placeholder="0">
              </label>
              <label for="width">Width:
                <input type="number" name="width" id="width" class="form-control" v-model.number="$store.state.estimate.width" placeholder="0">
              </label>
              <br>
              <label>Percentage: {{ $store.state.estimate.percentage * 100 }}% ~ {{ $store.state.estimate.highPercentage * 100 }}%</label>
              <br>
              <sub>* Percentage my vary depending on job and equipment needed</sub>
              <br>
              Estimated Total: ${{ round(realTotal) }} ~ ${{ round(highTotal) }}
            </div>
          </div>
        </div>
        <br>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      addEstimateCalculate: false,
      estimate: {
        length: 0,
        width: 0,
        percentage: .45,
        highPercentage: .60,
      }
    }
  },
  computed: {
    realTotal: function() {
      let total = (this.$store.state.estimate.length * this.$store.state.estimate.width) * this.$store.state.estimate.percentage
      return total
    },
    highTotal: function() {
      let highTotal = (this.$store.state.estimate.length * this.$store.state.estimate.width) * this.$store.state.estimate.highPercentage
      return highTotal
    }
  },
  methods: {
    round: function(val) {
      let ammount = Math.floor(val * 100) / 100;
      return ammount.toFixed(2);
    }
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

