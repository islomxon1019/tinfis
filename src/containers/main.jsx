import React, { Component } from 'react'
import Maindiv1 from '../components/main/maindiv1';

var obj = {
    div9H1:"Нoвинки",
    div9span:"210 товаров",
    div9a:"Показать все"
}


export default class main extends Component {
  render() {
    return (
      <div>
        <Maindiv1 data={obj} />
      </div>
    )
  }
}