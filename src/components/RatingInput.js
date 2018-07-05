import * as React from 'react';
import StarIcon from './StarIcon';
import { formInput } from './Forms';

class RatingInput extends React.Component {
  state = {value: ''};
  onClick = (event) => {
    const {onInput} = this.props;
    this.setState({value: event.currentTarget.getAttribute('value')});
    if (onInput) {
      onInput({target: {value: this.state.value}});
    }
  }
  render() {
    const {id, name} = this.props;
    const {value} = this.state;
    let stars = [];
    for (let i=1; i<=5; i++) {
      stars.push(
        <StarIcon
          key={i}
          height={30}
          value={i}
          fill={i<=value ? '#00544C': '#00D4BE'}
          onClick={this.onClick}/>
      );
    }
    return(
      <div>
        {stars}
        <input id={id} type="hidden" name={name} value={value}/>
      </div>
    )
  }
}

export default formInput({propValue: 'value'})(RatingInput);
