<template>
  <div :key="light.name" v-for="light in lights">
    <Light :light="light" />
  </div>
</template>

<script>
import Light from './Light'

export default {
  name: 'Lights',
  props: {
    lights: Object
  },
  components: {
    Light
  }
}
</script>
