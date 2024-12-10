import React, { Component } from 'react'
import img1 from "../../assets/CoffeeShop/img1.png"
import img2 from "../../assets/CoffeeShop/img2.png"
import img3 from "../../assets/CoffeeShop/img3.png"
import im4 from "../../assets/CoffeeShop/im4.png"

export default class Grid extends Component {
  render() {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <img src={img1} alt="Coffee art" className="w-full h-64 object-cover" />
              <img src={im4} alt="Coffee with leaves" className="w-full h-[520px] object-cover row-span-2" />
              <img src={img3} alt="Coffee latte art" className="w-full h-64 object-cover" />
            </div>
            <div className="text-white flex flex-col justify-center">
              <h3 className="text-[#C99E71] text-sm uppercase tracking-wider mb-2">Our history</h3>
              <h2 className="font-righteous text-5xl mb-6 leading-tight">
                Create a
                <br />
                new story with us
              </h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Mauris Rhoncus In Imperdiet Placerat. Vestibulum Emismd
                Nisl Suscipit Ligula Volutpat. A Feyguat Urn Maxmaus
                Cars Massa Nibhincidunt. Donec Et Nibh Maximus. Est
                Eu. Mattis Nuce. Praesent Ut Quam Quis Quam Venen
                Atis Fringilla. Morbi Vestibulum Id Tellis Mmodo Mattis
                Aliquam Erat Volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

