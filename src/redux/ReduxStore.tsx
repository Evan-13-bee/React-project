import { combineReducers, createStore } from "redux";
import { dialogsReducer } from './DialogsReducer';
import { profileReducer } from './ProfileReducer';
import { sideBarReducer } from './SideBarReducer';
type ReducersType = typeof reducers
export type StateStoreType = ReturnType<ReducersType> //типизация стэйта
export type StoreType = typeof store //ТИПИЗАЦИЯ ВСЕГО СТОРА 

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer
})
export let store = createStore(reducers)

window.store = store
// export type ReduxStoreType = typeof store