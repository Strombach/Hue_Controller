<template>
  <p>{{ light.name }}</p>
</template>

<script>

export default {
  name: 'Lights',
  props: {
    light: Object
  }
}
</script>
