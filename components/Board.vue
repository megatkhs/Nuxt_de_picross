<template>
  <div class="board">
    <div class="hint column">
      <div
        v-for="(column, columnIndex) in squares[0]"
        :key="`column-${columnIndex}`"
      >
        <span
          v-for="(value, valueIndex) in getColumnCount(columnIndex)"
          :key="`column-${columnIndex}-${valueIndex}`"
        >
          {{ value }}
        </span>
      </div>
    </div>
    <div class="hint row">
      <div v-for="(row, rowIndex) in squares" :key="`row-${rowIndex}`">
        <span
          v-for="(value, valueIndex) in getRowCount(rowIndex)"
          :key="`row-${rowIndex}-${valueIndex}`"
        >
          {{ value }}
        </span>
      </div>
    </div>
    <div class="scuares">
      <div
        v-for="(row, rowIndex) in squares"
        :key="`row-${rowIndex}`"
        class="row"
      >
        <div
          v-for="(square, squareIndex) in row"
          :key="`square-${rowIndex}-${squareIndex}`"
          @click="onClick(rowIndex, squareIndex)"
        >
          <Square :square="square" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Square from '~/components/Square.vue'

export default {
  components: {
    Square
  },
  props: {
    squares: {
      type: Array,
      require: true,
      default: null
    },
    art: {
      type: Array,
      require: true,
      default: null
    }
  },
  methods: {
    onClick(rowIndex, squareIndex) {
      this.$emit('click', rowIndex, squareIndex)
    },
    getColumnCount(columnIndex) {
      const countArray = []
      let flag = false

      this.art.forEach(value => {
        if (!flag && value[columnIndex] !== 0) {
          flag = true
          countArray.push(1)
        } else if (flag && value[columnIndex] === 0) {
          flag = false
        } else if (flag && value[columnIndex] !== 0) {
          countArray[countArray.length - 1] += 1
        }
      })

      return countArray
    },
    getRowCount(rowIndex) {
      const countArray = []
      let flag = false

      this.art[rowIndex].forEach(value => {
        if (!flag && value !== 0) {
          flag = true
          countArray.push(1)
        } else if (flag && value === 0) {
          flag = false
        } else if (flag && value !== 0) {
          countArray[countArray.length - 1] += 1
        }
      })

      return countArray
    }
  }
}
</script>

<style lang="scss" scoped>
.board {
  display: grid;
  grid-template-areas: 'null hint-column' 'hint-row squares';
  grid-gap: 2px;
  padding: 10px;
  background: #eee;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  .hint {
    display: flex;

    > div {
      display: flex;
      background: #fafafa;
      border-radius: 3px;

      > span {
        display: block;
        text-align: center;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
      }
    }

    &.column {
      grid-area: hint-column;

      > div {
        flex-direction: column;
        justify-content: flex-end;
        width: 20px;
        min-height: 20px;
        padding: 10px 0;
        line-height: 20px;

        &:not(:last-child) {
          margin-right: 2px;
        }
      }
    }

    &.row {
      grid-area: hint-row;
      flex-direction: column;

      & > div {
        justify-content: flex-end;
        height: 20px;
        min-width: 20px;
        padding: 0 10px;
        line-height: 20px;

        &:not(:last-child) {
          margin-bottom: 2px;
        }
      }
    }
  }

  .scuares {
    grid-area: squares;

    > .row {
      display: flex;

      > div {
        &:not(:last-child) {
          margin-right: 2px;
        }
      }

      &:not(:last-child) {
        margin-bottom: 2px;
      }
    }
  }
}
</style>
