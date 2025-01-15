"use client";
import React from "react";
import styles from "./AddCart.module.css";

const AddCart = () => {
  return (
    <div className= {styles.addButton}>
      <button
        className="p-3 bg-neutral-900 rounded hover:bg-neutral-800"
        onClick={() => console.log("Added..")}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddCart;
