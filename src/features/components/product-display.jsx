import RatingStar from "./rating-star";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function ProductDisplay({ item }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}${window.location.search}`);
  };
  return (
    <div className="relative md:w-[96%] w-full md:justify-start justify-center mx-auto h-auto flex flex-wrap  gap-x-2 gap-y-4 md:py-10 py-24">
      {item.map((data, idx) => {
        const discount = data.price * (5 / 100);
        return (
          <div
            key={idx}
            className={`border md:w-[180px] w-[150px] h-auto border shadow cursor-pointer hover:bg-gray-100`}
            onClick={() => handleClick(data.id)}
          >
            <p className="absolute text-xs bg-orange-400 text-white p-1">
              {data.name}
            </p>
            <img
              className="w-[200px] h-[200px] object-contain"
              src={data.mainpic}
              alt="...."
            />
            <div className="w-auto px-2">
              <p className="px-2 md:text-sm text-xs pt-2">{data.description}</p>
              <p className="md:text-sm text-xs text-red-400 text-center  border border-red-400 w-auto p-1 my-1">
                {"Enjoy all for " + data.discount + "% "}
              </p>
              {discount !== 0 || data.discount != null ? (
                <div className="flex gap-x-2 px-2 ">
                  <p className="md:text-sm text-xs relative ">
                    ${data.price}₱
                    <span className="w-full absolute top-[50%] left-0 h-[0.2px] bg-black"></span>
                  </p>
                  <p className="md:text-sm text-xs text-orange-500">
                    ${data.price - discount}₱
                  </p>
                </div>
              ) : (
                <p className="md:text-sm text-xs text-orange-500">
                  ${data.price}₱
                </p>
              )}
            </div>
            <div className="flex items-center justify-end px-2 gap-x-2 py-2">
              <div className=" relative flex flex-row-reverse  gap-x-[0.5px]">
                <RatingStar rating={data.rating} />
              </div>
              <p className="text-xs">{data.sold} sold</p>
            </div>
            <div className="flex items-center justify-end px-2 pb-2 ">
              <p className="text-xs capitalize">{data.location}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ProductDisplay.propTypes = {
  item: PropTypes.any,
};
