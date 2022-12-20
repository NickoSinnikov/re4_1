import React, { useState } from 'react';
//import { Component } from 'react';

export default function ChangeColorForm() {
  const [form, setForm] = useState('');
  const [rgbColor, setRgbColor] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setForm(value);

    let rgb = '';
    if (value.length === 7) {
      console.log(value);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
      console.log(result);
      rgb = result
        ? `rgb(${parseInt(result[1], 16)},
      ${parseInt(result[2], 16)},
      ${parseInt(result[3], 16)})`
        : 'Ошибка!';
    } else if (value.length > 7) {
      rgb = 'Ошибка!';
    }

    setRgbColor(rgb);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //console.log(this.colorBg);
  return (
    <div
      className="container"
      style={
        rgbColor === 'Ошибка!'
          ? { backgroundColor: 'red' }
          : { backgroundColor: rgbColor }
      }
    >
      <form onSubmit={handleSubmit} className="form-input">
        {/*<label>Введите цвет в формате HEX</label>*/}
        <input type="text" value={form} onChange={handleChange} />
      </form>
      <div className="rgb-field">{rgbColor}</div>
    </div>
  );
}
