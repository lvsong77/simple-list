<template>
  <div class="urgency">
    <p class="tip">重要&紧急</p>
    <!-- <div :class="['square', 'white', {show: unfold}, 'active']" @click="clickSquare"></div>
    <div :class="['square', 'green', {show: unfold}]" @click="clickSquare"></div>
    <div :class="['square', 'orange', {show: unfold}]" @click="clickSquare"></div>
    <div :class="['square', 'red', {show: unfold}]" @click="clickSquare"></div> -->
    <div v-for="(opt, index) in options"
         :class="['square', opt.color, {active: opt.selected}, {show: unfold}]"
         @click="clickSquare(opt.color)"
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
            selected: true
          },
          {
            color: 'green',
            selected: false
          },
          {
            color: 'orange',
            selected: false
          },
          {
            color: 'red',
            selected: false
          },
        ]
      }
    },
    methods: {
      clickSquare: function(color) {
        this.unfold = !this.unfold
        if (!this.unfold) {
          this.options = this.options.map(opt => {
            opt.selected = opt.color === color
            return opt
          })
        }
      }
    }
  }
</script>

<style>
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