import React from 'react';
import Header from './header';
import Carousel from './carousel';
import Promotion from './promotion';
import PhoneList from './phoneList';
import LaptopList from './laptopList'

function Index () {
  return(
    <div className="bg-dark">
      <Header></Header>
      <Carousel></Carousel>
      <PhoneList></PhoneList>
      <LaptopList></LaptopList>
      <Promotion></Promotion>
    </div>
  )
}

export default Index;