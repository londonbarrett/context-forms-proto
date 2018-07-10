import * as React from 'react';
import StarIcon from './StarIcon';
import { formInput } from './Forms';


class RatingInput extends React.Component {
  input = React.createRef();

  state = { value: '' };

  onComponentDidMount() {
    this.input.current.addEventListener('onreset', console.log('zorra'));
  }

  onClick = (event) => {
    const { setValue } = this.props;
    const value = event.currentTarget.getAttribute('value');
    this.input.current.value = value;
    this.setState({ value });
    setValue(value);
  }

  onChange = () => {
    console.log('Changeeeeee');
  }

  onReset = () => {
    console.log('estupida poney');
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
        <input
          id={id}
          type="hidden"
          name={name}
          value={value}
          onChange={this.onChange}
          onReset={this.onReset}
          ref={this.input}
          defaultValue="1"
        />
      </div>
    );
  }
}

export default formInput(RatingInput);
