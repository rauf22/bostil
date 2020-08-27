import React from 'react';
// import PropTypes from 'prop-types';
import './Form.scss';
import Select from '../Select/Select';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import ImageIcon from '@material-ui/core/ImageIcon'

// const styles = (theme) => ({
//   input: {
//     display: 'none',
//   },
// });

class Form extends React.Component {
  // static propTypes = {
  //   classes: PropTypes.object.isRequired
  // };
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setStateA(this.state);
  }

  render() {
    // let className = 'form';
    // if (this.props.isOpenForm) {
    //   className += 'open';
    // }

    return (
      <div className="forma">
        <p className="title">Register to get a work</p>
        <p className="subtitle">
          Attention! After successful registration and alert, update the
          <br />
          list of users in the block from the top
        </p>

        <form onSubmit={this.handleSubmit}>
          <label className="name">
            Name
            <div>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder="Your name"
              />
            </div>
          </label>

          <label className="email">
            Email
            <div>
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                placeholder="Your email"
              />
            </div>
          </label>

          <label className="phone">
            Phone number
            <div>
              <input
                type="tel"
                name="phone"
                onChange={this.handleChange}
                placeholder="+380 XX XXX XX XX"
              />
            </div>
          </label>

          <span className="spanphone">Еnter phone number in open format</span>

          <div className="selbuttons">
            <Select />
          </div>

          {/* <div className="uploadfile"> */}
          <label className="photo">
            Photo
            <div>
              <input
                type="text"
                name="photo"
                onChange={this.handleChange}
                placeholder="Upload your photo"
              />

              <Button variant="contained" component="label">
                Upload File
                <input type="file" style={{ display: 'none' }} />
              </Button>
            </div>
          </label>
          {/* </div> */}

          <Button className="btnsignun" variant="contained" color="secondary">
            Sign up now
          </Button>
        </form>
      </div>
    );
  }
}
export default Form;
