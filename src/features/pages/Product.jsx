import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../store/reduces/productsById";
import { addToCart } from "../../store/reduces/addToCart";
import { openModal } from "../../store/reduces/modal";

export default function Product() {
  const product = useSelector((state) => state.productById.product);
  const products = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      fetchProductById({
        data: products.filter((data) => data.id === params.id),
      })
    );
  }, [dispatch, params.id, products]);

  const handleClick = () => {
    navigate(`/${window.location.search}`);
  };
  const addToCartClick = () => {
    dispatch(addToCart({ data: product[0] }));
  };
  const handleBuynow = () => {
    dispatch(openModal());
  };
  return (
    <m.div
      initial={{ x: "-100%", position: "absolute", top: "0px", left: "0px" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="w-full h-full bg-white relative "
    >
      <h1 className="text-3xl p-10 mt-10">{product[0]?.name}</h1>

      <div className="h-auto  xl:flex-row flex-col overflow-hidden flex flex-col items-center bg-white px-4 border-gray-200 rounded-lg shadow md:flex-row bg-gray-100 dark:border-gray-700 dark:bg-gray-800  ">
        <img
          className=" flex-1  object-contain md:w-[300px] w-[450px] h-[800px] rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={product[0]?.mainpic}
          alt=""
        />
        <div className="w-[400px] flex flex-col justify-between p-4 leading-normal flex-0 ">
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product[0]?.name}
          </h5>
          <p className="mb-3  text-xl font-normal text-gray-700 dark:text-gray-400">
            {product[0]?.description}
          </p>
          {product[0]?.discount !== 0 || product[0]?.discount != null ? (
            <div className="flex gap-x-2 px-2 text-xl ">
              <p className="md:text-lg text-md relative ">
                ${product[0]?.price}₱
                <span className="w-full absolute top-[50%] left-0 h-[0.2px] bg-black"></span>
              </p>
              <p className="md:text-lg text-md text-orange-500">
                ${product[0]?.price - product[0]?.discount}₱
              </p>
            </div>
          ) : (
            <p className="md:text-lg text-md text-orange-500">
              ${product[0]?.price}₱
            </p>
          )}
          <button
            onClick={addToCartClick}
            className="hover:bg-orange-300 hover:text-white px-4 py-3 border my-5 text-orange-700 bg-orange-200 border-none rounded-md"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuynow}
            className="hover:bg-black hover:text-white  px-4 py-3 border text-orange-500 rounded-md"
          >
            Buy Now
          </button>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="mt-10 text-lg pl-10 flex items-center gap-x-4"
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M4 12L8 8M4 12L8 16"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-lg mb-1">Back</p>
      </button>
    </m.div>
  );
}
