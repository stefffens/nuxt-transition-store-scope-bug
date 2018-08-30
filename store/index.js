import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      routing: false,
      animating: false,

    },

    mutations: {

      START_ANIMATING(state) {
        state.animating = true
        state.anim = true
      },
      STOP_ANIMATING(state) {
        state.animating = false
        state.anim = false

      },

    },

  })
}

export default store
