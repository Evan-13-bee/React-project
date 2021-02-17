import axios from 'axios'
import React, { Dispatch } from 'react'
import preloader from '../../Img/Preloader.gif'

export let Preloader = () => {
  return <img style={{ height: '100px' }} src={preloader} />
}
