
// 设置state初始值
const initState = {
  show: true,
  list: []
}

// reducer是一个纯函数，给定固定的输入，就一定会有固定的输出，而且不会有任何的副作用
export default (state=initState,action)=> {
  switch (action.type) {
    case 'SHOW-SIDE':
      return {
        ...state,
        show: action.payload
      }
    case 'GET_LIST_ACTION':
      console.log('action.data', action.data)
      return {
        ...state,
        list: action.data
      }
    default:
      return state;
  }
}