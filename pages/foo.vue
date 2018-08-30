<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ $route.name }} animating: <br>
        {{ $store.state.animating }}
      </h1>

      <div class="links">
        <nuxt-link :to="{name: 'index'}">to index </nuxt-link>
        <nuxt-link :to="{name: 'foo'}">to foo </nuxt-link>
        <nuxt-link :to="{name: 'bar'}">to bar </nuxt-link>
        <br>
        <button @click="$store.commit('START_ANIMATING')">start animating</button>
                <button @click="$store.commit('STOP_ANIMATING')">STOPanimating</button>

      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  transition: {
    css:false,
    duration: 3000,
    leave(el, done){
      console.log('LAVE TRANSITION')
      this.$store.commit('START_ANIMATING')
      setTimeout(function(){
         done(); }, 3000);

    }
  },
  mounted() {
    this.$store.commit('STOP_ANIMATING')
  },
  components: {
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
a {
  padding: 1rem;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

