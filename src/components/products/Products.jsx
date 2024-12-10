import axios from 'axios'
import React, { Component } from 'react'
import { BsBox2 } from "react-icons/bs";

export default class Products extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            limit: 6,
        }
    }

    componentDidMount(){
        this.fetchProducts();
    }

    fetchProducts = () => {
        axios
            .get(`https://dummyjson.com/products?limit=${this.state.limit}`)
            .then(res => this.setState({ data: res.data.products }));
    }

    loadMore = () => {
        this.setState(prevState => ({
            limit: prevState.limit + 6
        }), this.fetchProducts);
    }

    render() {
        return (
            <div className='container mx-auto px-4 py-12'>
                <div className='text-center'>
                    <p className='text-[18px] text-[#C99E71] font-semibold uppercase tracking-wide'>Popular Products</p>
                    <h2 className='text-white text-5xl font-extrabold mt-2'>Coffee Popular Products</h2>
                </div>

                <div className='flex flex-wrap justify-center gap-8 mt-8'>
                    {this.state.data?.map((product) => (
                        <div
                            key={product.id}
                            className='flex flex-col items-center gap-6 w-[366px] bg-gradient-to-t from-[#C99E71] to-[#8e5a3c] rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105'
                        >
                            <img
                                src={product.images[0]}
                                className='h-[300px] w-full object-contain rounded-t-lg'
                                alt={product.title}
                            />
                            <div className='p-4 w-full'>
                                <h3 className='text-2xl text-white font-semibold mb-2'>{product.title}</h3>
                                <button className='w-full flex items-center justify-center gap-3 h-[48px] rounded bg-[#C99E71] text-white text-lg font-medium transition-all duration-300 hover:bg-[#b58a56]'>
                                    <BsBox2 /> Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-8'>
                    <button
                        onClick={this.loadMore}
                        className='text-white bg-[#C99E71] text-lg font-semibold py-2 px-8 rounded hover:bg-[#b58a56] transition-all duration-300'
                    >
                        See More
                    </button>
                </div>
            </div>
        )
    }
}
