import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      estimate: {
        length: 0,
        width: 0,
        percentage: .45,
        highPercentage: .60,
      }
    },
    computed: {
      realTotal: function() {
        let total = (this.estimate.length * this.estimate.width) * this.estimate.percentage
        return total
      },
      highTotal: function() {
        let highTotal = (this.estimate.length * this.estimate.width) * this.estimate.highPercentage
        return highTotal
      }
    },
    methods: {
      round: function(val) {
        let amount = Math.floor(val * 100) / 100;
        return amount.toFixed(2);
      }
    }
  })
}

export default store
