"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css";

function ImagePicker({ label, name }) {
  const [chosenImage, setChosenImage] = useState();

  const imageInput = useRef();

  function handleChooseClick() {
    imageInput.current.click();
  }

  function handleImageChange(evt) {
    const file = evt.target.files[0];

    if (!file) {
      return;
    }

    setChosenImage(null);
    const reader = new FileReader();

    reader.onload = () => {
      setChosenImage(reader.result);
      // setChosenImage(evt.target.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!chosenImage && <p>No image was chosen yet.</p>}
          {chosenImage && (
            <Image
              src={chosenImage}
              alt="The image selected by the user."
              fill
              priority
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
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
