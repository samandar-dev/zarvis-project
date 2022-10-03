import React from 'react'
import { useSelector } from 'react-redux'
import './Filter.scss'

export default function Filter({ arr, setArr }) {

  const obj = useSelector((state) => state.employ.object)

  const filterfrunc = (e) => {
    if (e.target.value === 'Barchasi') {
      setArr(obj)
    }
    if (e.target.value === '1 kattalari') {
      setArr(obj.filter(item => item.count > 1))
    }
    if (e.target.value === '5 kattalari') {
      setArr(obj.filter(item => item.count > 5))
    }
  }

  return (
    <>
      <div className="filter">
        <h3 className="filter__title">Filterlash</h3>

        <form className='filter__form'>
          <div className="filter__form-box">
            <label>Muddatni tanlang</label>
            <input type="date" />
            <input type="date" />
          </div>

          <div className="filter__form-box">
            <label>Xodimlar bo'yicha</label>
            <select onChange={filterfrunc}>
              <option value="Barchasi">Barchasi</option>
              <option value="1 kattalari">1 kattalari</option>
              <option value="5 kattalari">5 kattalari</option>
            </select>
          </div>

          <div className="filter__form-box">
            <label>Topshiriq holati bo'yicha</label>
            <select>
              <option value="barchasi">Barchasi</option>
              <option value="barchasi">Qwer</option>
              <option value="barchasi">Ytrew</option>
            </select>
          </div>
        </form>
      </div>
    </>
  )
}
