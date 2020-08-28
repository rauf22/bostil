import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Select() {
  


  const [value, setValue] = React.useState('front');

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    console.log('valueselect', value);
    this.props.setStateA(this.state);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select your position</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="front"
          control={<Radio />}
          label="Frontend developer"
        />
        <FormControlLabel
          value="back"
          control={<Radio />}
          label="Backend developer"
        />
        <FormControlLabel value="design" control={<Radio />} label="Desigher" />
        <FormControlLabel value="QA" control={<Radio />} label="QA" />
      </RadioGroup>
    </FormControl>
  );
}
