import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-1">
        <h1 className="text-white title"><img src="/hex.png" alt=""  width={25}  />Dashboard</h1>
        <div className="nav-1">
          <nav>
            <ul className="nav flex-column nav-pills p-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa fa-square-o" aria-hidden="true"></i> Dashboard{" "}
                  <span className="icon">
                    <i className="fa fa-arrow-right " aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa fa-square-o" aria-hidden="true"></i> Product{" "}
                  <span className="icon">
                    <i className="fa fa-arrow-right " aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa fa-square-o" aria-hidden="true"></i> Customers{" "}
                  <span className="icon">
                    <i className="fa fa-arrow-right " aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa fa-square-o" aria-hidden="true"></i> Income{" "}
                  <span className="icon">
                    <i className="fa fa-arrow-right " aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa fa-square-o" aria-hidden="true"></i> Promote{" "}
                  <span className="icon">
                    <i className="fa fa-arrow-right " aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa fa-square-o" aria-hidden="true"></i> help{" "}
                  <span className="icon">
                    <i className="fa fa-arrow-right " aria-hidden="true"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="profile">
        <div className="img">
          <img
            className="rounded-circle"
            src="/1.jpg"
            alt=""
            width={50}
            height={50}
          />
        </div>
        <div className="ps-3 py-1 profile-2">
          <h5 className="m-0 p-0">Evano</h5>
          <p className="m-0 p-0">Project Manager</p>
        </div>
   

<select className=" rounded-4 select" >
  <option   className="selectnone"></option>
  <option value="1">Logout</option>
  
</select>
      </div>
    </>
  );
};

export default Sidebar;
