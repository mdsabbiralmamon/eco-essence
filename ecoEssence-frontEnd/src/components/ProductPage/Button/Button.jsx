import PropTypes from 'prop-types';

const Button = (props) => (
    <button
      {...props}
      className={`bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ${props.className}`}
    >
      {props.children}
    </button>
  );

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
  
  export default Button;
  