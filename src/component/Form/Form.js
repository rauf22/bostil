import React from 'react';
// import PropTypes from 'prop-types';
import './Form.scss';
import Select from '../Select/Select';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      formErrors: { email: '' },
      emailValid: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // this.setState({
    //   [name]: value,
    // });

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('formstate', this.state);

    var formData = new FormData(newuser);

    // var fileField = document.querySelector('input[type="file"]');
    // formData.append('position_id', 2);
    // formData.append('name', 'Jhon');
    // formData.append('email', 'Jhon@gmail.com');
    // formData.append('phone', '+380955388485');
    // formData.append('photo', fileField.files[0]);

    // file from input type='file' var fileField = document.querySelector('input[type="file"]'); formData.append('position_id', 2); formData.append('name', 'Jhon'); formData.append('email', 'Jhon@gmail.com'); formData.append('phone', '+380955388485'); formData.append('photo', fileField.files[0]);
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: formData,
      headers: {
        Token:
          'eyJpdiI6ImJFdjRHQVFUNWxDRHhiMVwvNElMYzVnPT0iLCJ2YWx1ZSI6Ijl2NTk2cFRBYWZwYTJuKzk5cE9odlJIWnlzY3gzTU80bHpCUDFwY2xUa2pJb090TTFxQWpPTmVcL2ZMRnFPZW9lTXdXdVwvVG5IVGFlZnpPTUpOdThLd2c9PSIsIm1hYyI6IjZlMjQzZDY0ZWY2OWY1NTk4MzczNTlhOTQ2MDJiODJhYWQzYzRkNTNiZmIyYTliMTEyOTM1MzQ1OGRlMzQ1ODEifQ==',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (data.success) {
          alert('OK');
        } else {
          console.log(data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case 'email':
        const re = RegExp(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );

        emailValid = re.test(value);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid });
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const value = this.state.select;
    return (
      <div className="forma">
        <p className="title">Register to get a work</p>
        <p className="subtitle">
          Attention! After successful registration and alert, update the
          <br />
          list of users in the block from the top
        </p>

        <form id="newuser" onSubmit={this.handleSubmit}>
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
                required
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Select your position</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="position_id"
                value={value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Frontend developer"
                />
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Backend developer"
                />
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="Desigher"
                />
                <FormControlLabel value={4} control={<Radio />} label="QA" />
              </RadioGroup>
            </FormControl>
          </div>

          {/* <div className="uploadfile"> */}
          <label className="photo">
            Photo
            <div>
              {/* <input
                type="text"
                name="photo"
                onChange={this.handleChange}
                placeholder="Upload your photo"
              /> */}

              <Button variant="contained" component="label">
                Photo
                <input
                  type="file"
                  style={{ display: 'inline-block' }}
                  name="photo"
                  onChange={this.handleChange}
                  placeholder="Upload your photo"
                />
              </Button>
            </div>
          </label>
          {/* </div> */}

          <Button
            type="submit"
            className="btnsignun"
            variant="contained"
            color="secondary"
          >
            Sign up now
          </Button>
        </form>
      </div>
    );
  }
}
export default Form;
