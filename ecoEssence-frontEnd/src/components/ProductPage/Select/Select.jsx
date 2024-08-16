import PropTypes from 'prop-types'

const Select = (props) => (
    <select
      {...props}
      className={`border rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 ${props.className}`}
    >
      {props.children}
    </select>
  );

Select.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
  
  export default Select;
  