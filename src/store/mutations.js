import {
  ADD_LIST,
  DELETE_LIST,
  COMPLETE_LIST
} from './mutation-types'

export default {
  [ADD_LIST](state, payload) {
    let newData = {
      index: state.lists.total,
      list: payload,
      hasComplete: false
    }
    state.lists.data.unshift(newData)
    state.lists.total++
  },
  [DELETE_LIST](state, payload) {
    state.lists.data = state.lists.data.filter(item => item.index != payload)
  },
  [COMPLETE_LIST](state, payload) {
    for (let i = 0; i < state.lists.data.length; i++) {
      const item = state.lists.data[i];
      if (item.index == payload) {
        item.hasComplete = !item.hasComplete
        if (item.hasComplete) {
          state.lists.data.splice(i, 1)
          state.lists.data.push(item)
          break
        } else {
          state.lists.data.splice(i, 1)
          state.lists.data.unshift(item)
          break
        }
      }
    }
  },
}