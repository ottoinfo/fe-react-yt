import React, { Component } from "react"
import numeral from "numeral"
import styles from "./styles.scss"

export default class ChannelRow extends Component {

  static propTypes = {
    channel: React.PropTypes.object,
    handleFavorite: React.PropTypes.func,
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

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  formattedDate = (val) => {
    const date = new Date(val)
    return `${this.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  render() {
    const { channel } = this.props

    if (!channel.show) { 
      return null
    }

    return (
      <tr className={styles.row}>
        <td className={styles.td}>
          <p className={!channel.favorite ? `${styles.favorite}` : `${styles.favorite_true}`} onClick={()=> this.props.handleFavorite(channel.id) }></p>
        </td>

        <td className={styles.td}>
          <div className={styles.channel_info}>
            <img src={channel.thumb_url_default} alt={channel.title}/>
            
            <div className={styles.info}>
              <p className={styles.channel_title}>{channel.title}</p>
              <p className={styles.channel_id}>ID: {channel.id}</p>
              <a href={`https://www.youtube.com/${channel.title}`}>View Channel</a>
            </div>
          </div>
        </td>
        
        <td className={styles.td}>
          <p>{numeral(channel.views).format('0,0')}</p>
        </td>
        
        <td className={styles.td}>
          <p>{this.formattedDate(channel.created_on)}</p>
        </td>
      </tr>
    )
  }
}