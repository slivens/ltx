import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './style/index.less';
import banner1 from '../../../assets/images/banner1.png';
import banner2 from '../../../assets/images/banner2.png';
import banner3 from '../../../assets/images/banner3.png';
import { withRouter } from 'react-router-dom';
class Banner extends React.Component {
  state = {
    data: [
      { pic: 'banner_news_1.jpg', id: "1", title: "传承红色基因,讲好红色故事" },
      { pic: 'banner_news_2.jpg', id: "2", title: "“从数字福建到数字中国”振奋人心" },
      { pic: 'banner_news_3.jpg', id: "3", title: "“不忘初心、牢记使命”主题教育工作会议" },
      { pic: 'banner_news_4.jpg', id: "4", title: "不忘初心 牢记使命" },
      { pic: 'banner_news_5.jpg', id: "5", title: "讲党史国史、传承红色基因" },
    ],
    imgHeight: "2rem",
  }
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: [banner1, banner2, banner3],
    //   });
    // }, 100);
  }
  render() {
    return (
      <Carousel
        autoplay
        infinite
        dotStyle={{ color: "red" }}
        // cellSpacing={10}
        // slideWidth={0.8}
        className="ltx_carousel"
        style={{ height: "2rem"}}
      // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      // afterChange={index => console.log('slide to', index)}
      >
        {this.state.data.map(val => (
          <a
            key={val.id}
            onClick={() => this.props.history.push(`/detail/${val.id}`)}
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={require(`../../../assets/images/${val.pic}`)}
              alt=""
              style={{ width: '100%', verticalAlign: 'top', height: "100%" }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
            <div className="banner_title">{val.title}</div>
          </a>
        ))}
      </Carousel>
    );
  }
}
export default withRouter(Banner);