import * as React from 'react';
import StarIcon from './StarIcon';
import { formInput } from './Forms';

class RatingInput extends React.Component {
  state = { value: '' };

  onClick = (event) => {
    const { update } = this.props;
    const value = event.currentTarget.getAttribute('value');
    this.setState({ value });
    update(value);
  }

  onchange = () => {
    console.log('Changeeeeee');
  }

  render() {
    const { id, name } = this.props;
    const { value } = this.state;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          height={30}
          value={i}
          fill={i <= value ? '#00544C' : '#00D4BE'}
          onClick={this.onClick}
        />,
      );
    }
    return (
      <div>
        {stars}
        <input id={id} type="hidden" name={name} value={value} onChange={this.onChange} />
      </div>
    );
  }
}

export default formInput(RatingInput);
