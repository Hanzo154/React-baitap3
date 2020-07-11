import React, { Component } from 'react';
import data from './data.json';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: data,
    };
  }
  render() {
    return (
      <div className="row">
        {this.state.movieList.map(item => {
          return (
            <div className="col-sm-4 p-3">
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <img
                  className="card-img-top img-fluid"
                  src={item.hinhAnh}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.tenPhim}</h5>
                  <p className="card-text">
                    {item.moTa}
                  </p>
                  <a href={item.trailer} target="_blank" className="btn btn-primary">
                    Trailer
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
