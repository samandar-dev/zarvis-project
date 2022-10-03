import React, { useEffect, useState } from 'react'
import List from './List/List'
import Filter from './Filter/Filter'
import { Search } from './Search/Search'
import { Header } from './Header/Header'
import axios from 'axios'
import './User.scss'
import { useDispatch, useSelector } from 'react-redux'
import { emplloyActions } from '../store/store'

export default function User({ arr, setArr }) {
  const count = useSelector(state => state.employ.count)
  const [img, setImg] = useState(null)
  const distpatch = useDispatch()
  const handlerFile = (e) => {
    let file = e.target.files[0]
    setImg(file)
  }

  const upload = () => {
    let file = img
    let formatdata = new FormData()

    // formatdata.append('image', file)
    // formatdata.append('name', "Samandar Bohodirov")

    // axios({
    //   url: "http://localhost:3000/some/api",
    //   method: "POST",
    //   headers: {
    //     authorization: "your token"
    //   },
    //   data: formatdata
    // })
    //   .then((res) => {
    //     console.log(res);
    //   }, (err) => {

    //   })
  }

  return (
    <>
      <div className="user">
        <div className="user__top">
          <Search arr={arr} setArr={setArr} />
          <p>{count}</p>

          <div className='user__top-btns'>
            <button className='user__top-create-btn'>Topshiriq yaratish</button>
            <button className='user__top-filter-btn' onClick={() => distpatch(emplloyActions.countChange({ num: 2 }))}>Filters</button>
          </div>
        </div>

        <div className="user__main">
          <List arr={arr} />
          <Filter arr={arr} setArr={setArr} />
        </div>

        <div className="user__img-upload">
          <img src={img !== null ? URL.createObjectURL(img) : ""} alt="" />
          <input type="file" multiple onChange={handlerFile} />
          <button onClick={upload}>Upload</button>
        </div>
      </div>
    </>
  )
}
