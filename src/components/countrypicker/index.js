import React from "react";


import { CountryDropdown } from 'react-country-region-selector';


class CountryPicker extends React.Component {
    constructor (props) {
      super(props);
      this.state = { country: '' };
    }
   
    selectCountry (val) {
      this.setState({ country: val });
    }
   
    render () {
      const { country } = this.state;
      return (
        <div>
          <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)} />
        </div>
      );
    }
  }

  export default CountryPicker;