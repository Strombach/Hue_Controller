<template>
  <div :key="light.id" v-for="light in lights" class="light" >
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

<style>
.light {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
</style>
