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
    this.setState({search})
  }

  handleClearSearch = ()=> {
    this.setState({search: ""})
  }

  render() {
    return (
      <div className={styles.search}>
        <input type="text" placeholder="search..." value={this.state.search} onChange={this.handleSearch} />
        <p onClick={this.handleClearSearch}>x</p>
      </div>
    )
  }
}

