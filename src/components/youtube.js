import React, { Component } from "react"
import Api from "../services/Api"
import ChannelHeader from "./ChannelHeader"
import ChannelRow from "./ChannelRow"
import styles from "./styles.scss"

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
    this.fetchChannels()
  }

  fetchChannels = function(){
    this.setState({channels: []})
    this.API.fetch().end((err,res)=>{
      if (err) {
        new Error("Error Fetching Channels: " + err)
      }
      else {
        this.setState({ channels: res.body.channels })
      }
    })
  }

  handleSortBy = (sort)=> {
    let update = {sort}
    if (update.sort === this.state.sort) {
      update.asc = !this.state.asc // TRUE || FALSE for ASC || DESC
    }
    console.log("state", this.state)
    this.setState(Object.assign({}, this.state, update))
  }

  sortColumns = (data)=> {
    let channels = data.slice()
    switch (this.state.sort) {
      case "views":
        channels.sort((a,b)=> a.views - b.views )
        break
      case "created_on":
        channels.sort()
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
        <div className={styles.search}>

        </div>

        <table className="content">
          <ChannelHeader sortBy={this.handleSortBy} />

          <tbody>
          { channels.map(channel=>
            <ChannelRow key={channel.id} channel={channel} />
          ) }
          </tbody>
        </table>
      </div>
    )
  }
}