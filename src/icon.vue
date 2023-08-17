<template>
  <svg class="sh-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
 export default {
   props: ['name']
 }
</script>

<style lang="scss" scoped>
.sh-icon {
  width: 1em;
  height: 1em;
}
</style>