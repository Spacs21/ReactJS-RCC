import React, { Component } from 'react'
import bgImage from '../../assets/bg.png'

export default class Content extends Component {
  render() {
    return (
      <div 
        className="h-[650px] bg-no-repeat bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex items-center h-full">
            <div className="max-w-lg">
              <h1 className="text-white font-righteous text-5xl sm:text-6xl leading-tight mb-4">
                Enjoy Your
                <br />
                Morning Coffee.
              </h1>
              <p className="text-white text-base sm:text-lg mb-6 leading-relaxed max-w-md">
                The coffee is brewed by first roasting the green coffee beans over hot coals in brazier. Given to Opportunity
              </p>
              <button className="bg-[#C99E71] text-white px-8 py-3 uppercase text-sm font-medium tracking-wider">
                Test Coffee
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

