import React, { Component } from "react"
import styles from "./styles.scss"

export default class Search extends Component {

  state = {
    search: "",
  }

  static propTypes = {
    handleSearch: React.PropTypes.func,
  }

  handleSearch = (ev)=> {
    const search = ev.target.value || ""
    this.props.handleSearch(search)
    console.log({search})
    this.setState({search})
  }

  handleClearSearch = ()=> {
    this.props.handleSearch("")
    this.setState({search: ""})
  }

  render() {
    return (
      <div className={styles.search}>
        <input type="text" placeholder="Search by Name or ID..." value={this.state.search} onChange={this.handleSearch} />
        { 
        //<p className={styles.search_clear} onClick={this.handleClearSearch}></p>
        }
      </div>
    )
  }
}

