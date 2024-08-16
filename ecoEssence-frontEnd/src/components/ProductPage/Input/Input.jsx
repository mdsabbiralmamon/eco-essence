import PropTypes from 'prop-types'


const Input = (props) => (
    <input
      {...props}
      className={`border rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 ${props.className}`}
    />
  );

Input.propTypes = {
    className: PropTypes.string
};
  
  export default Input;
  