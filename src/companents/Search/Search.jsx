import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import './Search.scss'

export const Search = ({ setArr }) => {

  const obj = useSelector((state) => state.employ.object)

  const searchfun = (e) => {
    setArr(
      obj.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    )
  }

  return (
    <>
      <div className="search">
        <input type="text" placeholder='Search by Name' onChange={searchfun} />
        <button><BiSearch /></button>
      </div>
    </>
  );
}
