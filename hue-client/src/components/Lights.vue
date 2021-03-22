<template>
  <div :id="light.id" v-for="light in lights">
    <Light @toggle-light="toggleLight" :light="light" />
  </div>
</template>

<script>
import Light from './Light'

export default {
  name: 'Lights',
  props: {
    lights: Array
  },
  components: {
    Light
  },
  methods: {
    toggleLight( light ) {
      console.log( light )
    }
  }
}
</script>
