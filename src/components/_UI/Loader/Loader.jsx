import React from 'react'
import loaderIcon from './loading-process.svg'

export default function Loader(props) {
  return <img src={loaderIcon} {...props} alt="" />
}
