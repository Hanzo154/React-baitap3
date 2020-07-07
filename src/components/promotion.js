import React, { Component } from 'react';
import promotion_1 from './img/promotion_1.png';
import promotion_2 from './img/promotion_2.png';
import promotion_3 from './img/promotion_3.jpg';

class Promotion extends Component {
  render() {
    return (
      <section id="promotion" className="container-fluid pt-5 pb-5">
        <h1 className="text-center text-white">PROMOTION</h1>
        <div className="container bg-light pt-5 pb-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="container">
                <img src={promotion_1} alt="" style={{ maxWidth: "100%" }} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="container">
                <img src={promotion_2} alt="" style={{ maxWidth: "100%" }} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="container">
                <img src={promotion_3} alt="" style={{ maxWidth: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default Promotion;