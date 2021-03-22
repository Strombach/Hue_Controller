<template>
  <Header title="HueVue" />
  <Lights @toggle-light="toggleLight" :lights="lights" />
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
    return { lights: [] }
  },
  methods: {
    async fetchLights() {
      const res = await fetch( 'api/state' )
      const data = await res.json()

      const tempArr = Object.entries( await data )
      const dataArr = []

      tempArr.forEach( ( arr ) => {
        arr[1].id = arr[0]
        arr.shift()
        dataArr.push( arr[0] )
      } )

      return dataArr
    },
    async toggleLight( light ) {
      const res = await fetch( `api/state/${light.id}/onoff`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify( {
          on: !light.state.on
        } )
      } )
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
