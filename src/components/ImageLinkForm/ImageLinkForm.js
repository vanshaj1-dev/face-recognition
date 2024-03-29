import React from "react";
import "./ImageLinkForm.css";


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
      <div>
          <p className="f3">
              {'This magic will detect faces in your picture.Give it a try'}
          </p>
          <div className="center">
              <div className="form center pa4 br3 shadow-5">
              <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
              <button onClick={onButtonSubmit}
              className="w-30 grow f4 link ph3 pv2 dib white bg-light purple">Detect</button>
              </div>
          </div>
      </div>
    );
}

export default ImageLinkForm;
//b03229146d034d7a8f9beb3bf5ed6de6
