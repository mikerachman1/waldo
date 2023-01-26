import React from "react";

const Header = () => {
  return (
    <div id="header">
      <div className="counter">
        <h2>Counter</h2>
      </div>
      <div className="characters">
        <img src="https://where-s-waldo-eece1.web.app/static/media/waldo.92dd6e4f.webp" 
              alt="waldo" />
        <img src="https://where-s-waldo-eece1.web.app/static/media/wenda.c33345bb.webp" 
              alt="wenda" />
        <img src="https://where-s-waldo-eece1.web.app/static/media/wizard.f54f77e5.webp" 
              alt="wizard" />
        <img src="https://where-s-waldo-eece1.web.app/static/media/odlaw.46f85d87.webp" 
              alt="odlaw" />      
      </div>
    </div>
  );
};

export default Header;