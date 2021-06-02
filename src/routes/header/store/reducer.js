
// 设置state初始值
const initState = {
  title: '标题'
}

// reducer是一个纯函数，给定固定的输入，就一定会有固定的输出，而且不会有任何的副作用
export default (state=initState,action)=> {
  switch (action.type) {
    case 'SET-TITLE':
      return {
        ...state,
        title: action.payload
      }
    default:
      return state;
  }
}