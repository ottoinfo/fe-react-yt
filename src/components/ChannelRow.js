import React, { Component } from "react"
import numeral from "numeral"
import styles from "./styles.scss"

export default class ChannelRow extends Component {

  static propTypes = {
    channel: React.PropTypes.object,
  }

  static defaultProps = {
    channel: {
      created_on: "2011-02-17T13:38:27Z",
      id: "UC--BMyA2X4a9PGAo3lTuopg",
      thumb_url_default: "https://yt3.ggpht.com/-T0H7xR-9iA8/AAAAAAAAAAI/AAAAAAAAAAA/VA9CSBc5Q8A/s88-c-k-no/photo.jpg",
      title: "psychicpebbles",
      views: 105689500,
    }
  }

  render() {
    const { channel } = this.props
    return (
      <tr className={styles.row}>
        <td className={styles.td}>
          <div className={styles.channel_info}>
            <img src={channel.thumb_url_default} alt={channel.title}/> 
            <p>{channel.title}</p>
          </div>
        </td>
        
        <td className={styles.td}>
          <p>{numeral(channel.views).format('0,0')}</p>
        </td>
        
        <td className={styles.td}>
          <p>{numeral(channel.created_on).format('00:00:00')}</p>
        </td>
      </tr>
    )
  }
}