<template>
  <Button @btn-click="$emit('toggle-light', light)" :name="light.name" />
</template>

<script>
import Button from './Button'

export default {
  name: 'Lights',
  props: {
    light: Object
  },
  components: {
    Button
  },
  emits: [
    'toggle-light'
  ]
}
</script>
