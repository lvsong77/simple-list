<template>
  <div class="addList">
    <input type="text"
           :class="{'front': isFront}"
           placeholder="记下你的待办事项"
           @keydown.enter="addToList"
           @blur="closeAddBar"
           v-model="newItem">
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'AddList',
    props: {
      isFront: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        newItem: ''
      }
    },
    computed: {
      ...mapGetters(['lists'])
    },
    methods: {
      ...mapActions(['addList']),
      addToList() {
        console.log(this.lists);
        
        if (this.newItem) {
          this.addList(this.newItem).then(res => {
            this.$bus.$emit('addListDone')
            this.newItem = ''
          })
        }
      },
      closeAddBar() {
        this.$bus.$emit('addListDone')
        this.newItem = ''
      }
    }
  }
</script>

<style>
  .addList {
    padding: 0 10px;
  }
  .addList input {
    width: 100%;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
  }
  .front {
    border-bottom: 1px solid black !important;
  }
</style>