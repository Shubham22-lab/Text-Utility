import React, { Component } from 'react'
import loading from "./loading.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center h-10 w-10'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
