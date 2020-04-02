import {
  ADD_LIST,
  DELETE_LIST
} from './mutation-types'

export default {
  addList(context, payload) {
    return new Promise((resovle, reject) => {
      context.commit(ADD_LIST, payload)
      resovle()
    })
  },
  deleteList(context, payload) {
    return new Promise((resovle, reject) => {
      context.commit(DELETE_LIST, payload)
      resovle()
    })
  }
}