import axios from 'axios'
import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { StateStoreType } from '../../redux/ReduxStore'
import { follow, InitialStateType, setCurrentPage, setTotalUsersCount, setUsers, toogleIsFetching, unfollow, UsersACType, UsersType } from '../../redux/UsersReducer'
import { Users } from './UsersComponent'
import preloader from '../../Img/Preloader.gif'
import { Preloader } from '../Common/Preloader'


// export const UsersContainer = () => {

// }


type UsersPropsType = {
  users: Array<UsersType>
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: Array<UsersType>) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (num: number) => void
  isFetching: boolean
  toogleIsFetching: (isFetching: boolean) => void
}
// Типизация классовой компоненты. Первый параметр - типизация пропсов, второй - типизация стейта.
// Пропсы конструктора типизируем как и пропсы компоненты.

export class UsersContainer extends React.Component<UsersPropsType, Array<UsersType>> {

  componentDidMount() {
    this.props.toogleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
      this.props.toogleIsFetching(false)
    })
  }
  onPageChange = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.toogleIsFetching(false)
    })
  }

  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChange={this.onPageChange}
          users={this.props.users}
          isFetching={this.props.isFetching}
        />
      </>
    )
  }
}



///////////////////////////////////////////////////////////////


let mapStateToProps = (state: StateStoreType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}
{
// let mapDispatchToRrops = (dispatch: Dispatch<UsersACType>) => {
//   return {
//     follow: (userId: string) => {
//       dispatch(follow(userId))
//     },
//     unfollow: (userId: string) => {
//       dispatch(unfollow(userId))
//     },
//     setUsers: (users: Array<UsersType>) => {
//       dispatch(setUsers(users))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setPage(currentPage))
//     },
//     setTotalUsersCount: (num: number) => {
//       dispatch(setUsersCount(num))
//     },
//     toogleIsFetching: (isFetching: boolean) => {
//       dispatch(setIsFetching(isFetching))
//     }
//   }
// }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching
})(UsersContainer)