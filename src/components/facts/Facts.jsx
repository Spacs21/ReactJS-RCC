import React, { Component } from 'react'
import img1 from "../../assets/CoffeeShop/img1.png"
import img2 from "../../assets/CoffeeShop/img2.png"
import img3 from "../../assets/CoffeeShop/img3.png"
import im4 from "../../assets/CoffeeShop/im4.png"

export default class Facts extends Component {
  render() {
    return (
      <div className='container mx-auto'>
        <div className='flex justify-evenly items-center flex-wrap py-20'>
            <div className='flex flex-col gap-4'>
                <h3 className='font-righteous text-2xl text-white'><span className='text-[#C99E71]'>01</span> Best Coffee Flavour</h3>
                <img src={img1} className='h-[420px] object-contain'/>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='font-righteous text-2xl text-white'><span className='text-[#C99E71]'>02</span> Place to get lost</h3>
                <img src={img2} className='h-[420px] object-contain'/>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='font-righteous text-2xl text-white'><span className='text-[#C99E71]'>03</span> Proper roesting</h3>
                <img src={img3} className='h-[420px] object-contain'/>
            </div>
        </div>
      </div>
    )
  }
}
