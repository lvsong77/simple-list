<template>
  <v-touch @swipeleft="swipeLeft"
           @swiperight="swipeRight">
    <div :class="['list-item', {completed: hasComplete}]">
      <p>{{listItem.list}}</p>
      <div :class="urgencyColor"></div>
    </div>
  </v-touch>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'ListItem',
    props: {
      listItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      hasComplete: function() {
        return this.listItem.hasComplete
      },
      urgencyColor: function() {
        if (this.listItem.urgency === 0) {
          return 'whiteMark'
        } else if (this.listItem.urgency === 1) {
          return 'greenMark'
        } else if (this.listItem.urgency === 2) {
          return 'orangeMark'
        } else {
          return 'redMark'
        }
      }
    },
    methods: {
      ...mapActions(['deleteList', 'completeList']),
      swipeLeft() {
        this.deleteList(this.listItem.index)
      },
      swipeRight() {
        this.completeList(this.listItem.index)
      }
    }
  }
</script>

<style scoped>
  .list-item {
    margin: 10px 0;
  }
  .list-item p {
    margin: 0
  }
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  .whiteMark {
    width: 30px;
    height: 5px;
    background: transparent;
    border-radius: 5px;
    position: relative;
    top: -6px;
  }
  .greenMark {
    width: 30px;
    height: 5px;
    background: #00800080;
    border-radius: 5px;
    position: relative;
    top: -6px;
  }
  .orangeMark {
    width: 30px;
    height: 5px;
    background: #ffa50080;
    border-radius: 5px;
    position: relative;
    top: -6px;
  }
  .redMark {
    width: 30px;
    height: 5px;
    background: #ff000080;
    border-radius: 5px;
    position: relative;
    top: -6px;
  }
</style>