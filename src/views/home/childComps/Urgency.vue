<template>
  <div class="urgency" @click="clickUrgency">
    <p class="tip">重要&紧急</p>
    <div v-for="(opt, index) in options"
         :class="['square', opt.color, {active: opt.selected}, {show: unfold}]"
         @click="clickSquare(opt.color, opt.value)"
         :key="index">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Urgency',
    data() {
      return {
        unfold: false,
        options: [
          {
            color: 'white',
            selected: true,
            value: 0
          },
          {
            color: 'green',
            selected: false,
            value: 1
          },
          {
            color: 'orange',
            selected: false,
            value: 2
          },
          {
            color: 'red',
            selected: false,
            value: 3
          },
        ]
      }
    },
    mounted() {
      this.$bus.$on('addListDone', () => {
        this.options = [
          {
            color: 'white',
            selected: true,
            value: 0
          },
          {
            color: 'green',
            selected: false,
            value: 1
          },
          {
            color: 'orange',
            selected: false,
            value: 2
          },
          {
            color: 'red',
            selected: false,
            value: 3
          },
        ]
        this.unfold = false
      })
    },
    methods: {
      clickUrgency: function() {
        this.$bus.$emit('urgencyClicked')
      },
      clickSquare: function(color, value) {
        this.unfold = !this.unfold
        if (!this.unfold) {
          this.options = this.options.map(opt => {
            opt.selected = opt.color === color
            return opt
          })
          this.$bus.$emit('urgencyChanged', value)
        }
      }
    }
  }
</script>

<style scoped>
  .urgency {
    display: flex;
    align-items: center;
  }
  .tip {
    margin: 5px;
  }
  .square {
    width: 15px;
    height: 15px;
    margin: 5px;
    border-radius: 5px;
    display: none;
  }
  .white {
    background: white;
    border: 1px solid gray;
  }
  .green {
    background: green;
  }
  .orange {
    background: orange;
  }
  .red {
    background: red;
  }
  .active {
    display: block;
  }
  .show {
    display: block;
  }
</style>