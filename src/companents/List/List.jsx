import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { TbEdit } from 'react-icons/tb';
import "./List.scss"
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import { emplloyActions } from '../../store/store';

export default function List({ arr }) {
  const distpatch = useDispatch()

  return (
    <>
      <div className="list">
        <div className="list__top-box">
          <ul className="list__top-list">
            <li className="list__top-item col-4">
              <p>User</p>
            </li>
            <li className="list__top-item col-2">
              <p>Total rides</p>
            </li>
            <li className="list__top-item col-2">
              <p>Total finished</p>
            </li>
            <li className="list__top-item col-4">
              <p>Home Location</p>
            </li>
          </ul>
        </div>

        <div className="list__main-box">
          <ul className="list__main-list">
            {arr !== undefined ? arr.map(item => (
              <li className="list__main-item" key={item.id}>
                <div className='list__main-item-user-messages col-4'>
                  <div className="list__main-item-user-box">
                    <button className="list__main-item-icon"><AiOutlineMessage /></button>
                    <div className="list__main-item-user-img">
                      <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar" />
                    </div>

                    <div className="list__main-item-user-name">
                      <p>{item.name}</p>
                      <span>+998{item.number}</span>
                    </div>
                  </div>
                </div>

                <p className="list__main-item-rides col-2">132</p>
                <p className="list__main-item-finished col-2">{item.count}</p>
                <p className='list__main-item-location col-3'>{item.departament}</p>

                <div className="list__main-item-btns col-1">
                  <button onClick={() => distpatch(emplloyActions.edit({ id: item.id }))}><TbEdit /></button>
                  <button onClick={() => distpatch(emplloyActions.deleteItem({ id: item.id }))}><RiDeleteBinLine /></button>
                </div>
              </li>
            )) : ""}
          </ul>
        </div>

        <div className="list__pagnition">
          <p>1-2 of items</p>
          <Pagination count={2} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  )
}
