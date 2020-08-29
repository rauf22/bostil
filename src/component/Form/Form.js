import React from 'react';
import './Form.scss';
import Select from '../Select/Select';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { FormErrors } from './FormErrors';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signupform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      formErrors: { name: '', email: '', phone: '', position_id: 1, image: '' },
      nameValid: false,
      emailValid: false,
      phoneValid: false,
      position_idValid: false,
      imageValid: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
    this.validateField(name, value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('formstate', this.state);

    var formData = new FormData(newuser);
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
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    let position_idValid = this.state.position_idValid;
    let imageValid = this.state.imageValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.length >= 2 && value.length <= 60;
        fieldValidationErrors.name = nameValid ? '' : ' must be from 2 to 60';
        break;
      case 'email':
        const re = RegExp(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        emailValid = re.test(value);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'phone':
        const ph = RegExp(/^[\+]{0,1}380([0-9]{9})$/);
        phoneValid = ph.test(value);
        fieldValidationErrors.phone = phoneValid ? '' : ' is invalid';
        break;
      case 'position_id':
        position_idValid = value.length >= 1;
        fieldValidationErrors.position_id = position_idValid
          ? ''
          : ' must be minimum 1';
        break;
      case 'image':
        imageValid = /\.jpe?g$/i.test(value);
        fieldValidationErrors.image = imageValid ? '' : ' is invalid';
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
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.phoneValid &&
        this.state.position_idValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const value = this.state.select;
    return (
      <div id="signup" className="forma">
        <p className="title">Register to get a work</p>
        <p className="subtitle">
          Attention! After successful registration and alert, update the
          <br />
          list of users in the block from the top
        </p>

        <form className="login-form" id="newuser" onSubmit={this.handleSubmit}>
          {/* <div className="panel panel-default formErrors">
            <FormErrors formErrors={this.state.formErrors} />
          </div> */}
          <FormGroup>
            <Label className="name">
              Name
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  placeholder="Your name"
                />
              </div>
            </Label>
          </FormGroup>

          <FormGroup>
            <Label className="email">
              Email
              <div>
                <input
                  value={this.state.email}
                  type="email"
                  name="email"
                  required
                  onChange={this.handleChange}
                  placeholder="Your email"
                  className="form-control"
                />
              </div>
            </Label>
          </FormGroup>

          <FormGroup>
            <Label className="phone">
              Phone number
              <div>
                <input
                  value={this.state.phone}
                  type="tel"
                  name="phone"
                  required
                  onChange={this.handleChange}
                  placeholder="+380XXXXXXXXX"
                />
              </div>
            </Label>
          </FormGroup>

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
          <Label className="photo">
            Photo
            <div>
              <Input
                type="file"
                name="photo"
                onChange={this.handleChange}
                style={{ display: 'block' }}
                placeholder="Upload your photo"
              />

              {/* <Button variant="contained" component="label">
                Photo
                <Input
                  type="file"
                  name="photo"
                  onChange={this.handleChange}
                  placeholder="Upload your photo"
                  style={{ display: 'none' }}
                />
              </Button> */}
            </div>
          </Label>
          {/* </div> */}

          <Button
            type="submit"
            className="btnsignun btn-danger"
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
export default Signupform;
