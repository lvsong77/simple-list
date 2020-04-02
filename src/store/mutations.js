import {
  ADD_LIST,
  DELETE_LIST
} from './mutation-types'

export default {
  [ADD_LIST](state, payload) {
    let newData = {
      index: state.lists.total,
      list: payload
    }
    state.lists.data.unshift(newData)
    state.lists.total++
  },
  [DELETE_LIST](state, payload) {
    // state.list
  },
}