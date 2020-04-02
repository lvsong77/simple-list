<template>
  <v-touch @swipeleft="swipeLeft">
    <div :class="['list-item', {delete: hasDelete}]">
      {{listItem}}
    </div>
  </v-touch>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      listItem: {
        type: String,
        default() {
          return ''
        }
      }
    },
    data() {
      return {
        hasDelete: false
      }
    },
    methods: {
      swipeLeft() {
        console.log(111111);
        this.hasDelete = true
      }
    }
  }
</script>

<style>
  .list-item {
    margin: 5px 0;
  }
  .delete {
    color: gray;
  }
</style>