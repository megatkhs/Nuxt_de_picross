<template>
  <button :data-status="value" @click="onClick" />
</template>

<script>
export default {
  props: {
    square: {
      type: Number,
      require: true,
      default: null
    }
  },
  computed: {
    value() {
      switch (this.square) {
        case 1:
          return 'colored'
        case 2:
          return 'marked'
        default:
          return 'null'
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  background: #fff;
  padding: 0;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  cursor: pointer;

  &[data-status='colored'] {
    background: #0277bd;
  }

  &[data-status='marked'] {
    border: 2px solid #0277bd;
  }
}
</style>
