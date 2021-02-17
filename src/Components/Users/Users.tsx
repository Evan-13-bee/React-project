import axios from 'axios'
import React from 'react'
import { v1 } from 'uuid'
import { UsersType } from '../../redux/UsersReducer'

type UsersPropsType = {
  users: Array<UsersType>
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: Array<UsersType>) => void
}
 let Users = (props: UsersPropsType) => {
  let getUsers = () => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }
} 
  return (
    <React.Fragment>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(e => (
        <div key={e.id}>
          <span>
            <div>
              <img style={{ height: '110px' }} src={e.photos.small !== null ? e.photos.small : 'https://i.etsystatic.com/6743043/r/il/f4455f/1661641900/il_570xN.1661641900_n4ck.jpg'} alt="Photo-avatar" />
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