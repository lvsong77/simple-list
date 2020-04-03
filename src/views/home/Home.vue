<template>
  <div id="home">
    <add-list class="add-list-front"
              ref="addListFront"
              :isFront="true"
              v-show="showFrontAddList"/>
    <scroll :class="['home-scroll', {hideScroll: shouldHideScroll}]"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            @pullDownOver="pullDownOver">
      <add-list class="add-list-back"/>
      <div v-if="!showDefault">
        <lists class="lists" :lists="lists"/>
      </div>
      <div v-else class="defaultView">
        <p>下拉添加新事项</p>
      </div>
    </scroll>
    <urgency class="urgency-div" v-show="showFrontAddList"/>
  </div>
</template>

<script>
  import AddList from './childComps/AddList'
  import Lists from './childComps/Lists'
  import Urgency from './childComps/Urgency'

  import Scroll from 'components/content/scroll/Scroll'

  import {mapGetters} from 'vuex'

  export default {
    name: 'Home',
    components: {
      AddList,
      Lists,
      Urgency,
      Scroll
    },
    data() {
      return {
        showFrontAddList: false,
        moniterScrollY: false,
        shouldHideScroll: false,
      }
    },
    mounted() {
      this.$bus.$on('addListDone', () => {
        this.showFrontAddList = false
        this.shouldHideScroll = false
      })
    },
    computed: {
      ...mapGetters(['lists']),
      showDefault: function() {
        return this.lists.data.length === 0
      }
    },
    methods: {
      contentScroll(position) {
        if (this.moniterScrollY) {
          if (position.y < 40) {
            this.showFrontAddList = true
            // 直接执行focus()可能元素还未加载出来，无法生效
            new Promise((resolve, reject) => {
              this.shouldHideScroll = true
              resolve()
            }).then(() =>{
              this.moniterScrollY = false
              this.$refs.addListFront.$el.querySelector('input').focus()
            })
          }
        }
      },
      pullDownOver(position) {
        if (position.y > 45) {
          this.moniterScrollY = true
        }
      },
    }
  }
</script>

<style scoped>
  .add-list-front {
    position: fixed;
    top: 10px;
    width: calc(100% - 36px);
  }
  .home-scroll {
    height: calc(100vh - 10px);
  }
  .add-list-back {
    position: relative;
    top: -35px;
  }
  .lists {
    position: relative;
    top: -35px;
  }
  .hideScroll {
    display: none;
  }
  .defaultView p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.9rem;
    color: gray;
  }
  .urgency-div{
    position: fixed;
    right: 10px;
    bottom: 10px;
  }
</style>