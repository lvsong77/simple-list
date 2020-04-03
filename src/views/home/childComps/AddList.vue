<template>
  <div class="addList">
    <input type="text"
           :class="{'front': isFront, 'focused': isFocus}"
           placeholder="记下你的待办事项"
           @keydown.enter="addToList"
           @blur="inputBlur"
           v-model="newItem.value">
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
        newItem: {
          value: '',
          urgency: 0
        },
        isFocus: true
      }
    },
    mounted() {
      this.$bus.$on('urgencyClicked', (value) => {
        document.querySelector('input').focus()
        this.isFocus = true
      })
      this.$bus.$on('urgencyChanged', (value) => {
        this.newItem.urgency = value
      })
    },
    computed: {
      ...mapGetters(['lists'])
    },
    methods: {
      ...mapActions(['addList']),
      addToList() {
        if (this.newItem.value) {
          this.addList(this.newItem).then(res => {
            this.$bus.$emit('addListDone')
            this.newItem.value = ''
            this.newItem.urgency = 0
          })
        }
      },
      closeAddBar() {
        this.$bus.$emit('addListDone')
        this.newItem.value = ''
        this.newItem.urgency = 0
      },
      inputBlur() {
        this.isFocus = false
        setTimeout(() => {
          if (!this.isFocus) {
            this.addToList()
            this.closeAddBar()
          }
        }, 50);
      }
    }
  }
</script>

<style scoped>
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