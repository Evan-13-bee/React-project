import React from 'react';
import { v1 } from 'uuid';
import { ArrayType, MessagesType } from '../Components/Dialogs/Dialogs';

export enum ACTIONS_TYPE {
  FOLLOW = 'FOLLOW',
  UNFOLLOW = "UNFOLLOW",
  USERS = 'SET_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_CURRENT_USERS = 'SET_CURRENT_USERS',
  TOOGLE_IS_FETCHING = 'SET_IS_FETCHING'
}
type LocationType = {
  city: string,
  country: string
}
export type InitialStateType = {
  users: Array<UsersType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean

}
export type UsersType = {
  id: string,
  followed: boolean,
  name: string,
  photos: {
    "small": null | string | undefined
    "large": null
  },
  status: string
  location: LocationType,
  photoURL: string
}


type FollowACType = ReturnType<typeof follow>
type UnfollowACType = ReturnType<typeof unfollow>
type SetUsersACACType = ReturnType<typeof setUsers>
type SetUsersCountType = ReturnType<typeof setTotalUsersCount>
type SetCurrentPage = ReturnType<typeof setCurrentPage>
type SetIsFetching = ReturnType<typeof toogleIsFetching>
export type UsersACType = FollowACType
  | UnfollowACType
  | SetUsersACACType
  | SetCurrentPage
  | SetUsersCountType
  | SetIsFetching


let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
}



export const usersReducer = (state: InitialStateType = initialState, action: UsersACType): InitialStateType => {

  switch (action.type) {

    case ACTIONS_TYPE.FOLLOW:
      return {
        ...state,
        // users: [...state.users] //same
        users: state.users.map(e => {
          if (e.id == action.userId) return { ...e, followed: true }
          return e
        }

        ) //same
      }

    case ACTIONS_TYPE.SET_CURRENT_USERS:
      return {
        ...state,
        totalUsersCount: action.count
      }

    case ACTIONS_TYPE.TOOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case ACTIONS_TYPE.UNFOLLOW:
      return {
        ...state,
        // users: [...state.users] //same
        users: state.users.map(e => {
          if (e.id == action.userId) return { ...e, followed: false }
          return e
        }

        ) //same
      }

    case ACTIONS_TYPE.SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }

    case ACTIONS_TYPE.USERS:
      return {
        ...state,
        users: action.users
      }

    default:
      return state
  }
}

export const follow = (userId: string) => ({ type: ACTIONS_TYPE.FOLLOW, userId }) as const
export const unfollow = (userId: string) => ({ type: ACTIONS_TYPE.UNFOLLOW, userId }) as const
export const setUsers = (users: Array<UsersType>) => ({ type: ACTIONS_TYPE.USERS, users }) as const
export const setCurrentPage = (currentPage: number) => ({ type: ACTIONS_TYPE.SET_CURRENT_PAGE, currentPage }) as const
export const setTotalUsersCount = (usersCount: number) => ({ type: ACTIONS_TYPE.SET_CURRENT_USERS, count: usersCount }) as const
export const toogleIsFetching = (isFetching: boolean) => ({ type: ACTIONS_TYPE.TOOGLE_IS_FETCHING, isFetching }) as const
