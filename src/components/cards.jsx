import React from "react";

const Cards = () => {
  return (
    <>
          <div className="cardsActivity">
            {/* -----------cards-1----- */}
          <div className="cards ">
            <div className="img">
              <img src="/dollar.png" alt=""  />
            </div>
            <div className="cardDetails">
              <span className="cardtitle">Earning</span>
              <span className="doller">$198K</span>
              <span><span className="colorchange"><i className="fa fa-arrow-up" aria-hidden="true"></i>37.8%</span> this month</span>

            </div>
          </div>
      
      {/* -----------cards-1----- */}
      <div className="cards ">
            <div className="img">
              <img src="/order.png" alt=""  />
            </div>
            <div className="cardDetails">
              <span className="cardtitle">Order</span>
              <span className="doller">$2.4K</span>
              <span><span className="colorchangered"><i className="fa fa-arrow-down" aria-hidden="true"></i>2%</span> this month</span>

            </div>
          </div>
          {/* -----------cards-1----- */}
          <div className="cards ">
            <div className="img">
              <img src="/balance.png" alt=""  />
            </div>
            <div className="cardDetails">
              <span className="cardtitle">Balance</span>
              <span className="doller">$2.4K</span>
              <span><span className="colorchangered"><i className="fa fa-arrow-down" aria-hidden="true"></i>2%</span> this month</span>

            </div>
          </div>
          {/* -----------cards-1----- */}
          <div className="cards ">
            <div className="img">
              <img src="/sale.png" alt=""  />
            </div>
            <div className="cardDetails">
              <span className="cardtitle">Total Sales</span>
              <span className="doller">$89K</span>
              <span><span className="colorchange"><i className="fa fa-arrow-up" aria-hidden="true"></i>11%</span> this month</span>

            </div>
          </div>
</div>    </>
  );
};

export default Cards;
