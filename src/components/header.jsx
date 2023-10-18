import React from "react";

const Header = () => {
  return (
    <div className="headertitle">
      <div className="">
      <h5>
        Hello Shahrukh <i className="fa fa-handshake-o" aria-hidden="true"></i>
      </h5>
      </div>
      <div className="searchinput">
              <span>
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>{" "}
              <input type="search" placeholder="Search" />
            </div>
    </div>
  );
};

export default Header;
