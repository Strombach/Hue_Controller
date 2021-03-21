<template>
  <Header title="HueVue" />
  <Lights :lights="lights" />
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
import Header from './components/Header'
import Lights from './components/Lights'

export default {
  name: 'App',
  components: {
    Header,
    Lights
  },
  data() {
    return { lights: {} }
  },
  methods: {
    async fetchLights() {
      const res = await fetch( '/state/' )
      const data = await res.json()
      return data
    }
  },
  async created() {
    this.lights = await this.fetchLights()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
