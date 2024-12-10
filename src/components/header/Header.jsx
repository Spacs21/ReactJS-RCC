import React, { Component } from 'react';
import logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { BsBox2 } from "react-icons/bs";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isScrolled: false
    };
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#1C1814] ${this.state.isScrolled ? 'bg-opacity-70 shadow-lg' : 'bg-opacity-100'} transition-all duration-300`}>
        <div className='container mx-auto'>
          <div className='h-[80px] flex justify-between items-center'>
            <ul className='flex gap-10 text-white'>
              <li className='text-[#C99E71] cursor-pointer hover:text-[#C99E71] duration-500'>Home</li>
              <li className='cursor-pointer hover:text-[#C99E71] duration-500'>About</li>
              <li className='cursor-pointer hover:text-[#C99E71] duration-500'>Menu</li>
              <li className='cursor-pointer hover:text-[#C99E71] duration-500'>Reservation</li>
            </ul>
            <img src={logo} className='h-14'/>
            <ul className='flex gap-10 text-white'>
              <li className='cursor-pointer hover:text-[#C99E71] duration-500'>Pages</li>
              <li className='cursor-pointer hover:text-[#C99E71] duration-500'>Shop</li>
              <li className='cursor-pointer hover:text-[#C99E71] duration-500'>Contacts</li>
              <div className='text-white flex gap-8 items-center text-2xl'>
                <IoSearchOutline className='cursor-pointer hover:text-[#C99E71] duration-500'/>
                <BsBox2 className='cursor-pointer hover:text-[#C99E71] duration-500'/>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
