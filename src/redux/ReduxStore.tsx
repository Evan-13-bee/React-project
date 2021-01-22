import { combineReducers, createStore } from "redux";
import { dialogsReducer } from './DialogsReducer';
import { profileReducer } from './ProfileReducer';
import { sideBarReducer } from './SideBarReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer
})
export let store = createStore(reducers)