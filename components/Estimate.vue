<template>
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
</template>

<script>
export default {
  data: function() {
    return {
      // estimate: {
      //   length: this.$store.state.estimate.length,
      //   width: this.$store.state.estimate.width,
      //   percentage: this.$store.state.estimate.percentage,
      //   highPercentage: this.$store.state.estimate.highPercentage,
      // }
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
      let amount = Math.floor(val * 100) / 100;
      return amount.toFixed(2);
    }
  }
}
</script>
