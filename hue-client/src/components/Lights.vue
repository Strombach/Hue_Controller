<template>
  <div :id="light.id" v-for="light in lights">
    <Light @toggle-light="$emit('toggle-light', light)" :light="light" />
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
  emits: ['toggle-light']
}
</script>
