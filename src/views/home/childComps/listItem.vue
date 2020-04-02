<template>
  <v-touch @swipeleft="swipeLeft"
           @swiperight="swipeRight">
    <div :class="['list-item', {completed: hasComplete}]">
      {{listItem.list}}
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

<style>
  .list-item {
    margin: 10px 0;
  }
  .completed {
    text-decoration: line-through;
    color: gray;
  }
</style>