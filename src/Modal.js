import React from "react";

export default function Modal({ handleModal }) {
  return (
    <div className="modal" onClick={handleModal}>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/databank_superstardestroyer_01_169_d5757b90.jpeg?region=0%2C49%2C1560%2C780"
        alt=""
      />
    </div>
  );
}
