import * as React from 'react';
import PropTypes from 'prop-types';
import StarIcon from './StarIcon';

class Rating extends React.Component {
  handleOnClick = (event) => {
    const { onChange } = this.props;
    const value = event.currentTarget.getAttribute('value');
    onChange(parseInt(value, 10));
  }

  render() {
    const { id, name, value } = this.props;
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
      stars.push(
        <StarIcon
          key={i}
          height={30}
          value={i}
          fill={i <= value ? '#00544C' : '#00D4BE'}
          onClick={this.handleOnClick}
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
        />
      </div>
    );
  }
}

Rating.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.number,
};

Rating.defaultProps = {
  id: undefined,
  onChange: undefined,
  value: 0,
};

export default Rating;
