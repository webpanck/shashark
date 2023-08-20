<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'SharkRow',
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'center', 'right'].includes(value)
        }
      }
    },
    computed: {
      rowClass() {
        let {align} = this
        return [align && `align-${align}`]
      },
      rowStyle() {
        return {
          marginLeft: -this.gutter / 2 + 'px',
          marginRight: -this.gutter / 2 + 'px'
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-center {
      justify-content: center;
    }
    &.align-right {
      justify-content: flex-end;
    }
  }
</style>