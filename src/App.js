import React, { Component } from "react"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import YouTube from "./components/youtube"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <YouTube />
        <Footer />
      </div>
    )
  }
}
