import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { v1 } from 'uuid'
import { UsersType } from '../../redux/UsersReducer'
import styles from './Users.module.css'

export type UsersComponentType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  follow: (id: string) => void
  unfollow: (id: string) => void
  onPageChange: (pageNumber: number) => void
  users: Array<UsersType>
  isFetching: boolean
}
export let Users = (props: UsersComponentType) => {
  let pagesCount = props.totalUsersCount / props.pageSize
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <React.Fragment>
      <div>
        {pages.map((e: number) => <span
          className={props.currentPage == e ? styles.selectedPage : ''}
          onClick={(p) => props.onPageChange(e)}
        >{e}</span>)}
      </div>
      {props.users.map((e: UsersType) => (
        <div key={e.id}>
          <span>
            <div>
              <NavLink to='/profile'>
                <img style={{ height: '110px' }} src={e.photos.small !== null ? e.photos.small : 'https://i.etsystatic.com/6743043/r/il/f4455f/1661641900/il_570xN.1661641900_n4ck.jpg'} alt="Photo-avatar" />
              </NavLink>
            </div>
            <div>
              {e.followed
                ? <button onClick={() => { props.unfollow(e.id) }}>unollow</button>
                : <button onClick={() => { props.follow(e.id) }}>follow</button>
              }

            </div>
          </span>
          <span>
            <span>
              <div>{e.name}</div>
              <div>{e.status}</div>
            </span>
            <span>
              <div>{'e.location.country'}</div>
              <div>{'e.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </React.Fragment>
  )
}