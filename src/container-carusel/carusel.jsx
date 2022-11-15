import React, { Component } from 'react'
import Carusel1 from "../components2/maincarusel1/carusel1";

var obj={
  a1:"Электроника",
  a2:"Ноутбуки и компьютеры",
  a3:"Сумки и рюкзаки для ноутбуков",
  img1:"https://tinfis.uz/_next/image?url=https%3A%2F%2Fimage.tinfis.uz%2Fuploads%2Fall%2F2022%2F11%2FoUvkcuVeRM6BoYUSsNj1VwNFdkoQuowJxFdiPBgz.jpg&w=1920&q=10",
  img2:"https://tinfis.uz/_next/image?url=https%3A%2F%2Fimage.tinfis.uz%2Fuploads%2Fall%2F2022%2F11%2ForPGBL7Bi6LtlM0YCMQgqTixF0zsjGbtA05rnAds.jpg&w=1920&q=10",
  img3:"https://tinfis.uz/_next/image?url=https%3A%2F%2Fimage.tinfis.uz%2Fuploads%2Fall%2F2022%2F11%2F5EGB2VKf2t98ld5kkzhj5Ubo08rLKjgNRalvCrW0.jpg&w=1920&q=10",
  h3:"Рюкзак для ноутбука ACER STARTER KIT 15.6 ABG950",
}
export default class carusel extends Component {
  render() {
    return (
      <div className='carusel'>
        <Carusel1 name={obj} />
      </div>
      
    )
  }
}

