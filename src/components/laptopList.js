import React, { Component } from 'react';
import Item from './listItem';

class LaptopList extends Component {
  render() {
    return(
      <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
        <h1 className="text-center">BEST LAPTOP</h1>
        <div className="row">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </section>
    )
  }
}

export default LaptopList;