import React, { Component } from 'react';
import { Icon } from 'antd'
import { oss } from '@/libs/publicPath'
import './index.less'

class EssayItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props.item
    }
  }

  render() {
    let { item } = this.state
    return (
      <>
        <section className="essay-item">
          <div className="content">
            <h3>{item.title}</h3>
            <p dangerouslySetInnerHTML={{__html:item.describe}}></p>
            <div className="meta">
              <section className="browse_number"><Icon type="eye"/> {item.browseNumber || 0}</section>
              <section className="comment_number"><Icon type="message"/> {item.commentNumber || 0}</section>
              <section className="follow_number"><Icon type="heart"/> {item.star || 0}</section>
              <section className="created_time">{item.createdDate}</section>
            </div>
          </div>
          <div className="cover">
            <img src={item.cover ? (oss + item.cover) : ((item.categorys.length != 0 && item.categorys[0].cover) ? (oss + item.categorys[0].cover) : require('@/assets/img/defaultComm.png'))} />
          </div>
        </section>
      </>
    );
  }
}

export default EssayItem;