import React from "react";

function hide() {
    let popup = document.getElementById("myPopup");
    popup.classList.remove("show");
}
const PopUp = ({popupText}) => {
  return (
    <div class="popup">
      <span class="popuptext show" id="myPopup" onMouseEnter={hide} onMouseOver={hide}>
        {popupText}
      </span>
    </div>
  );
};

export default PopUp;
