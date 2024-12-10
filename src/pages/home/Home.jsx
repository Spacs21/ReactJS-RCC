import React, { Component } from 'react'
import Content from '../../components/content/Content'
import Facts from '../../components/facts/Facts'
import Grid from '../../components/grid/Grid'
import Products from '../../components/products/Products'

export default class Home extends Component {
  render() {
    return (
      <>
        <Content/>
        <Facts/>
        <Grid/>
        <Products/>
      </>
    )
  }
}
