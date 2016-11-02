import React, { Component } from "react"
import styles from "./styles.scss"

export default class ChannelHeader extends Component {

  static propTypes = {
    sortBy: React.PropTypes.func,
  }

  render() {
    const { sortBy } = this.props
    return (
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th_title} onClick={()=> sortBy("title")}>Channel</th>
          <th className={styles.th_view} onClick={()=> sortBy("views")}>Views</th>
          <th className={styles.th_created} onClick={()=> sortBy("created_on")}>Created</th>
        </tr>
      </thead>
    )
  }
}