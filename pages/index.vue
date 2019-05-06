<template>
  <section class="container">
    <Board :squares="squares" :art="art" @click="changeSquares" />
  </section>
</template>

<script>
import Board from '~/components/Board.vue'

export default {
  components: {
    Board
  },
  data() {
    return {
      squares: [],
      art: [
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
      ]
    }
  },
  asyncData() {
    const squares = Array(5).fill(null)
    squares.forEach((value, index) => {
      squares[index] = Array(5).fill(0)
    })

    return {
      squares
    }
  },
  methods: {
    changeSquares(rowIndex, squareIndex) {
      const newSquares = this.squares.concat()

      newSquares[rowIndex][squareIndex] = newSquares[rowIndex][squareIndex]
        ? 0
        : 1

      this.squares = newSquares
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
