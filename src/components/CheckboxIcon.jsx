import * as React from 'react';
import PropTypes from 'prop-types';

const CheckboxIcon = ({
  checked, height, onClick, width,
}) => (
  <svg
    aria-checked={checked}
    height={height}
    onClick={onClick}
    role="checkbox"
    tabIndex="0"
    viewBox="0 0 971 971"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="checkbox">
      <rect id="box" fill="#00D4BE" x="0" y="0" width="971" height="971" rx="100" />
      { checked && <path id="check" fill="#00544C" d="M403.898,669.404 L237.498,503.004 C227.501,493.007 227.501,476.798 237.498,466.8 L273.701,430.596 C283.698,420.598 299.908,420.598 309.905,430.596 L422,542.69 L662.095,302.596 C672.092,292.599 688.302,292.599 698.299,302.596 L734.502,338.8 C744.499,348.797 744.499,365.006 734.502,375.004 L440.102,669.405 C430.104,679.402 413.895,679.402 403.898,669.404 Z" />}
    </g>
  </svg>
);

CheckboxIcon.propTypes = {
  checked: PropTypes.bool,
  height: PropTypes.number,
  onClick: PropTypes.func,
  width: PropTypes.number,
};

CheckboxIcon.defaultProps = {
  checked: false,
  height: undefined,
  onClick: undefined,
  width: undefined,
};

export default CheckboxIcon;
