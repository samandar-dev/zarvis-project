import React from 'react'
import './CreateModal.scss'
import { IoClose } from "react-icons/io5";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CreateModal() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="cModal">
        <div className="cModal__top">
          <h4>Topshiriq yaratish</h4>
          <button><IoClose /></button>
        </div>

        <form className='cModal__form'>
          <div className="cModal__input-box">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              style={{ height: "50px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div className="cModal__input-box">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              style={{ height: "50px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div className="cModal__input-box">
            <label>Muddatni tanlang</label>
            <input type="date" />
          </div>

          <div className="cModal__input-box">
            <input type="file" />
          </div>

          <div className="cModal__form-submit-btn">
            <button>Saqlash</button>
          </div>
        </form>
      </div>
    </>
  )
}
