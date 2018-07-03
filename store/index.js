import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      estimate: {
        length: 0,
        width: 0,
        percentage: .45,
        highPercentage: .60,
      }
    },
  })
}

export default store
