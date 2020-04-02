<template>
  <div class="lists">
    <list-item v-for="(item, index) in lists.data"
               :list-item="item"
               :key="index"/>
  </div>
</template>

<script>
  import ListItem from './listItem'

  export default {
    name: 'Lists',
    components: {
      ListItem
    },
    props: {
      lists: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style>
  .lists {
    padding: 10px;
  }
</style>