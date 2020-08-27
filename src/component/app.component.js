import React, { Component } from 'react';
import './app.component.scss';
import logo from '../images/logo.svg';
import banner from '../images/banner-photo.jpg';
import menlaptop from '../images/man-laptop-v1.svg';
import Form from './Form/Form';
import User from './User/User';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      users: [],
      next_url: '',
      div: '',
      currentPage: 1,
      displayData: [],
      page: [],
      grid: [],
    };
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    const url =
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
          users: data.users,
          next_url: data.next_link,
        });
        // console.log(this.state.users);
      });
  }

  async fetchData(url) {
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();
    // .then((response) => response.json())
    // .then((data) => {
    this.setState({
      data,
      users: data.users,
      next_url: data.links.next_url,
    });
  }

  onSelect(next_url) {
    // preventDefault();
    this.fetchData(next_url);
    // console.log(this.data.links.next_url);
  }

  // onClickHandler() {
  //   if (this.state.data.next_url !== null) {
  //     fetch(this.state.data.next_url, {
  //       method: 'GET',
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.setState({
  //           data,
  //           users: data.users,
  //           // div: document.getElementById('.showmorebtn'),
  //         });
  //         console.log(this.state.users);
  //       });
  //   }
  //   document.getElementById('.showmorebtn').style.display = 'none';
  // }

  render() {
    const grid = this.state.users.map((item) => {
      return <User key={item.id} attributes={item} />;
    });
    const next_url = this.state.next_url;
    // console.log('next', this.state.data.links.next_url);
    console.log('nextusers', this.state.users);
    console.log('nex_url', this.state.data.next_link);

    return (
      <>
        <header>
          <div className="centerBlockMain">
            <div className="headerTop clearfix">
              <p className="logo">
                <img src={logo} alt="" />
              </p>
              <nav className="menu">
                <a className="nav__link" href="#">
                  About me
                </a>
                <a className="nav__link" href="#">
                  Relationships
                </a>
                <a className="nav__link" href="#">
                  Requirements
                </a>
                <a className="nav__link" href="#">
                  Users
                </a>
                <a className="nav__link" href="#">
                  Sign Up
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="slide">
          <img src={banner} alt="" />
          <p className="title">
            Test assignment <br /> for Frontend <br /> Developer position
          </p>
          <p className="description">
            We kindly remind you that your test assignment should be submitted
            <br />
            as a link to github/bitbucket repository, Please be patient, we
            consider
            <br />
            and respond to every application that meets minimum requirements.
            <br />
            We look forward to your submission. Good luck! The photo has to
            scale
            <br />
            in the banner area on the different screens
          </p>
          <div className="baton">
            <button className="btn">Sugn up now</button>
          </div>
        </div>

        <div className="letsget">
          <p className="title">Let's get acquainted</p>
          <p className="menlaptop">
            <img src={menlaptop} alt="" />
          </p>
          <p className="subtitle">I am cool frontend developer</p>
          <p className="text">
            We will evaluate how clean your approach to writing CSS and
            Javascript
            <br />
            code is. You can use any CSS and Javascript 3rd party libraries
            without any
            <br />
            restriction.
            <br />
            <br />
            If 3rd party css/javascript libraries are added to the project via
            <br />
            bower/npm/yarn you will get bonus points. If you use any task runner
            <br />
            (gulp/webpack) you will get bonus points as well. Slice service
            directory
            <br />
            page PSD mockup into HTML5/CSS3.
          </p>
          <a href="" className="link">
            Sugn up now
          </a>
        </div>

        <div className="users">
          <p className="title">Our cheerful users</p>
          <p className="subtitle">
            Attention! Sorting users by registration date
          </p>
          <div className="grid">{grid}</div>

          <div className="showmorebtn">
            <button className="btn" onClick={() => this.onSelect(next_url)}>
              Show more
            </button>
          </div>
        </div>

        <Form />
        
      </>
    );
  }
}
export default MyComponent;
