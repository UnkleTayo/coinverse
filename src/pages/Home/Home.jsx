import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  console.log(productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default Home;
