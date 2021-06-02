//Store部分

//从redux中引入createStore方法
import { createStore, applyMiddleware, compose} from 'redux';
import loggerMiddleware from '../middleware/logger';
import thunk from 'redux-thunk';
//引入Reducer
import rootReducer from './reducer';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunk);
const enhancer = compose(
  middlewareEnhancer,
);

const store = createStore(  //通过createStore()创建一个公共的数据存储仓
  rootReducer,  // 将reducer部分传递给store
  undefined,
  enhancer
);

export default store;