"use client";

import { useRef } from "react";

import classes from "./image-picker.module.css";

function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function handleChooseClick() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleChooseClick}
        >
          Choose an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
