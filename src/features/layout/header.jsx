import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/img/logo.jpg";
import SearchInput from "../components/searchInput";
import { sidebarCloseOpen } from "../../store/reduces/appconfig";
import { useState } from "react";
import PropTypes from "prop-types";
import { removeItemCart } from "../../store/reduces/addToCart";
import { openModal } from "../../store/reduces/modal";

export function countAndRemoveDuplicates(arr) {
  const countMap = new Map();
  const uniqueArr = [];

  // Count occurrences of each data
  for (const item of arr) {
    if (countMap.has(item)) {
      countMap.set(item, countMap.get(item) + 1);
    } else {
      countMap.set(item, 1);
    }
  }

  // Create a new array without duplicates
  for (const [item, count] of countMap) {
    uniqueArr.push({ item, count });
  }

  return uniqueArr;
}

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.addToCart.cart);
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(sidebarCloseOpen());
  };
  const handleCart = () => {
    setShowCart((d) => !d);
  };
  const handleBuyNow = (event) => {
    event.stopPropagation();
    dispatch(openModal());
  };

  return (
    <div className="w-full h-full bg-white xl:px-32 mobile:px-10 px-5 border">
      <div className="flex justify-between items-center">
        <div className="w-auto h-auto flex justify-center items-center ">
          <img src={logo} alt="..." className="w-[80px] h-auto" />
          <p className="font-semibold sm:block hidden">Shopping</p>
        </div>
        <div className="flex-1  mx-10 group xl:block hidden">
          <SearchInput className="xl:block hidden" />
        </div>
        <div className="flex xs:gap-x-10 mobile:gap-x-6 gap-x-5 items-center ">
          <button className="font-semibold text-indigo-500 lg:text-md text-sm">
            Sign in
          </button>
          <button className="font-semibold text-indigo-500  lg:text-md text-sm">
            Sign up
          </button>
          <button className="relative" onClick={handleCart}>
            <svg
              className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#6366f1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {cart.length > 0 && (
              <p className="flex justify-center items-center text-white  text-xs bg-red-500 w-7 h-7 rounded-full absolute bottom-0 left-[92%]">
                {cart.length}
              </p>
            )}
            {showCart &&
              (cart.length <= 0 ? (
                <div className="fixed inline-block text-left">
                  <div
                    className="py-5  text-center absolute right-0 z-10 mt-2 w-[420px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    Empty
                  </div>
                </div>
              ) : (
                <div className="fixed inline-block text-left">
                  <div
                    className="  absolute right-0 z-10 mt-2 w-[420px]  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="relative border h-[500px] overflow-auto">
                      <div className="p-5 mb-10">
                        {countAndRemoveDuplicates(cart).map(
                          ({ item, count }, idx) => {
                            return (
                              <DisplayItems
                                key={idx}
                                item={item}
                                count={count}
                              />
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="w-full absolute bottom-0">
                      <button
                        onClick={handleBuyNow}
                        className="w-full hover:bg-orange-600 hover:text-white  px-4 py-3 border text-orange-500 bg-orange-500 text-white"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </button>
        </div>
      </div>
      <div className="xl:hidden block w-full h-auto mt-3 flex gap-x-5">
        <div className="self-start  cursor-pointer" onClick={handleMenuClick}>
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="Menu / Menu_Alt_03">
              <path
                id="Vector"
                d="M5 17H13M5 12H19M5 7H13"
                stroke="#6366f1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="flex-1">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

const DisplayItems = ({ item, count }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (event) => {
    event.stopPropagation();
    dispatch(removeItemCart({ id: item.id }));
  };
  return (
    <div className="m-2 border flex gap-x-2 py-2 px-2 relative">
      <div
        className="absolute top-[5px] right-[5px] cursor-pointer"
        onClick={handleRemoveItem}
      >
        <svg fill="red" width="15px" height="15px" viewBox="-3.5 0 19 19">
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
        </svg>
      </div>
      <div className="w-16 h-16 relative">
        <p className="left-[60%] -top-[4px] absolute w-7 h-7 text-red-500 text-sm flex justify-center items-center bg-white border t text-center rounded-full">
          {count}x
        </p>
        <img src={item.mainpic} className="w-full h-full" alt="..." />
      </div>
      <div>
        <div className="flex gap-x-3">
          <p>{item.name}</p>
        </div>
        <div>{item.description}</div>
        <div className="mt-3">
          {item?.discount !== 0 || item?.discount != null ? (
            <div className="flex gap-x-2 px-2 text-xl ">
              <p className="md:text-sm text-xs relative ">
                ${item?.price}₱
                <span className="w-full absolute top-[50%] left-0 h-[0.2px] bg-black"></span>
              </p>
              <p className="md:text-sm text-xs text-orange-500">
                ${item?.price - item?.discount}₱
              </p>
              <p className="border border-red-500 text-left ml-5 px-1 md:text-sm text-xs text-orange-500">
                total = ₱{(item?.price - item?.discount) * count}
              </p>
            </div>
          ) : (
            <p className="md:text-sm text-xs text-orange-500">
              <p className="md:text-sm text-xs text-orange-500">
                {item?.price}₱
              </p>
              <p className="border border-red-500 text-left ml-5 px-1 md:text-sm text-xs text-orange-500">
                total = ₱{(item?.price - item?.discount) * count}
              </p>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

DisplayItems.propTypes = {
  item: PropTypes.any,
  count: PropTypes.any,
};
