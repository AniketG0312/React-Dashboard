import React from "react";

const Productsell = () => {
  return (
    <div>
      <div className="mainbox">
        <div className="Productheading">
          <div className="title">
            <h2 className="title-1">Product Sell</h2>
          </div>
          <div className="searchwithdate">
            <div className="search d-flex mt-2">
              <span>
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>{" "}
              <input type="search" placeholder="Search" />
            </div>
            <div className="selectdate mt-2 ">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                {/* <option selected>Select Days</option> */}
                <option value="1">Last 30 days</option>
                <option value="2">Last 15 days</option>
                <option value="3">Last 10 days</option>
              </select>
            </div>
          </div>
        </div>

        <div className="tableArea table-responsive">
          <table className="table">
            <thead>
              <tr className="tablehead">
                <th scope="col" colSpan={2}>Product Name</th> 
                <th scope="col"></th>
                <th scope="col">Stock</th>
                <th scope="col">Price</th>
                <th scope="col">Total Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr className="Tablebody">
                <td  colSpan={2}>
                  <img src="/1.1.jpg" alt="" width={50} />
                </td>
                <td><span className="bold">Abstract3D</span> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in.</p></td>
                <td>32 in stock</td>
                <td className="bold">$45.99</td>
                <td>20</td>
              </tr>
              <tr className="Tablebody">
                <td  colSpan={2}>
                  <img src="/3.1.jpg" alt="" width={50} />
                </td>
                <td><span className="bold">Sarphens illustration</span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in.</p></td>
                <td>32 in stock</td>
                <td className="bold">$45.99</td>
                <td>20</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Productsell;
