import PropTypes from 'prop-types'

const Card = ({ product }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
          <span className="text-yellow-500">{'★'.repeat(Math.round(product.rating))}</span>
        </div>
      </div>
    </div>
  );

Card.propTypes = {
    product: PropTypes.object
};
  
  export default Card;
  