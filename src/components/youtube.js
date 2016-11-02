import React, { Component } from "react"
import Fuse from "fuse.js"
import Api from "../services/Api"
import Search from "./Search"
import ChannelHeader from "./ChannelHeader"
import ChannelRow from "./ChannelRow"

export default class YouTube extends Component {

  state = {
    sort: 'title', 
    asc: true,
    channels: [],
  }

  constructor(props) {
    super(props)
    this.API = new Api("/data.json")
  }

  componentDidMount = function(){
    this.fuse = new Fuse(null, {
      caseSensitive: false,
      threshold: 0.2,
      maxPatternLength: 32,
      keys: ["title", "id"],
    })
    this.fetchChannels()
  }

  fetchChannels = function(){
    this.setState({channels: []})
    this.API.fetch().end((err,res)=>{
      if (err) {
        new Error("Error Fetching Channels: " + err)
      }
      else {
        let data = res.body.channels
        data.map(channel=> Object.assign({favorite: false, show: true}, channel)) // Add Favorite ATTR
        this.setState({ channels: data })
      }
    })
  }

  handleSearch = (val)=> {
    console.log({val})
    this.state.channels.map(item => {
      this.fuse.list = [item]
      this.fuse.search(this.search).length ? item.show = true : item.show = false
    })
  }

  handleSortBy = (sort)=> {
    let update = {sort}
    if (update.sort === this.state.sort) {
      update.asc = !this.state.asc // TRUE || FALSE for ASC || DESC
    }
    this.setState(Object.assign({}, this.state, update))
  }

  handleFavorite = (id)=> {
    const update = this.state.channels.map(item=> {
      if (item.id !== id) {
        return item // Leave Alone
      }
      return Object.assign({}, item, { favorite: !item.favorite }) // Update
    })
    this.setState(Object.assign({}, {channels: update}))
  }

  sortColumns = (data)=> {
    let channels = data.slice()
    switch (this.state.sort) {
      case "views":
        channels.sort((a,b)=> a.views - b.views )
        break
      case "created_on":
        channels.sort((a,b)=> new Date(a.created_on).getTime() - new Date(b.created_on).getTime() )
        break
      default: // title
        channels.sort((a,b)=> {
          if(a.title.toLowerCase() < b.title.toLowerCase()) {return -1}
          if(a.title.toLowerCase() > b.title.toLowerCase()) {return 1}
          return 0
        })
        //channels.sort((a,b)=> a.title.toLowerCase() - b.title.toLowerCase() )
        break
    }
    if (!this.state.asc) {
      channels.reverse()
    }
    return channels
  }

  render() {
    const channels = this.sortColumns(this.state.channels)

    return (
      <div className="content">
        <Search handleSearch={this.handleSearch} />

        <table className="content">
          <ChannelHeader sortBy={this.handleSortBy} />

          <tbody>
          { channels.map(channel=>
            <ChannelRow key={channel.id} channel={channel} handleFavorite={this.handleFavorite} />
          ) }
          </tbody>
        </table>
      </div>
    )
  }
}