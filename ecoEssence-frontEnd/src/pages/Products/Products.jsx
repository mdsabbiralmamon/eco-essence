import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Input from '../../components/ProductPage/Input/Input';
import Button from '../../components/ProductPage/Button/Button';
import Select from '../../components/ProductPage/Select/Select';
import Card from '../../components/ProductPage/Card/Card';
import Pagination from '../../components/ProductPage/Pagination/Pagination';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://eco-essence-back-end.vercel.app/api/products/allProducts?page=${page}&limit=${perPage}&sort=${sort}&search=${search}&brand=${brand}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
    };
    fetchProducts();
  }, [page, perPage, sort, search, brand, category, minPrice, maxPrice]);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(results);
  }, [search, products]);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleSort = (e) => setSort(e.target.value);
  const handlePageChange = (pageNumber) => setPage(pageNumber);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'brand':
        setBrand(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'minPrice':
        setMinPrice(value);
        break;
      case 'maxPrice':
        setMaxPrice(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto my-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <Input
            type="text"
            placeholder="Search products"
            onChange={handleSearch}
            value={search}
            className="w-full md:w-64"
          />
          <Button className="ml-2 flex justify-center items-center">
            <FaSearch />
            <p className="ml-2">Search</p>
          </Button>
        </div>
        <Select className="w-48 mb-4 md:mb-0" onChange={handleSort} value={sort}>
          <option value="newest">Sort by Newest</option>
          <option value="priceAsc">Sort by Price: Low to High</option>
          <option value="priceDesc">Sort by Price: High to Low</option>
        </Select>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <Select
          name="brand"
          className="w-full md:w-48 mb-4 md:mb-0"
          onChange={handleFilterChange}
          value={brand}
        >
          <option value="">Select Brand</option>
          <option value="GreenLeaf">GreenLeaf</option>
          <option value="EarthCare">EarthCare</option>
          <option value="Nature's Touch">Nature`&apos;`s Touch</option>
          <option value="PurePath">PurePath</option>
          <option value="EcoLiving">EcoLiving</option>
          <option value="SustainCraft">SustainCraft</option>
          <option value="BioBasics">BioBasics</option>
          <option value="GreenGoods">GreenGoods</option>
          <option value="EcoWorld">EcoWorld</option>
          <option value="NatureNest">NatureNest</option>
        </Select>
        <Select
          name="category"
          className="w-full md:w-48 mb-4 md:mb-0"
          onChange={handleFilterChange}
          value={category}
        >
          <option value="">Select Category</option>
          <option value="Organic Clothing">Organic Clothing</option>
          <option value="Sustainable Home Goods">Sustainable Home Goods</option>
          <option value="Eco-friendly Gadgets">Eco-friendly Gadgets</option>
          <option value="Accessories">Accessories</option>
        </Select>
        <div className="flex items-center">
          <p>Price Range:</p>
          <Input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            onChange={handleFilterChange}
            value={minPrice}
            className="w-24 mr-2"
          />
          <Input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            onChange={handleFilterChange}
            value={maxPrice}
            className="w-24"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
