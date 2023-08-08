import PropTypes from "prop-types";
import Checkbox from "../components/checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPageParams,
  updateChildCategories,
  updateParentCategories,
  updatePrices,
  updateUrlParams,
} from "../../store/reduces/appconfig";
import { useSearchParams } from "react-router-dom";
import { sortProductByPrice } from "../../store/reduces/products";

export default function Sidebar() {
  const { price, category } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const setSearchParams = useSearchParams()[1];

  const updateUrl = (params) => {
    setSearchParams(params);
  };

  const updateParentCategory = (data) => {
    dispatch(updateParentCategories({ data }));
    dispatch(updateUrlParams(updateUrl));
    dispatch(sortProductByPrice({ data }));
  };
  const updateChildCategory = (data, parent) => {
    dispatch(updateChildCategories({ data, parent }));
    dispatch(updateUrlParams(updateUrl));
    dispatch(sortProductByPrice({ data }));
  };
  const updatePrice = (data) => {
    dispatch(updatePrices({ data }));
    dispatch(updateUrlParams(updateUrl));
    dispatch(sortProductByPrice({ data }));
    dispatch(resetPageParams());
  };

  return (
    <div className="h-full fixed sm:w-[400px] w-[280px] overflow-x-hidden overflow-y-auto bg-white flex ">
      <div className="sm:w-[150px] w-[80px] self-start"></div>
      <div className="bg-white   h-full px-4 flex-1 pt-24">
        <h2 className="font-semibold mb-2">Category</h2>
        <ul>
          {category.map((d, idx) => {
            return (
              <li key={idx} className="mb-2">
                <CategoryList
                  data={d}
                  update={updateParentCategory}
                  parent={d}
                />
                {d.check &&
                  d.category.map((ds, idx) => {
                    return (
                      <ul key={idx} className="pl-5">
                        <CategoryList
                          data={ds}
                          update={updateChildCategory}
                          parent={d}
                        />
                      </ul>
                    );
                  })}
              </li>
            );
          })}
        </ul>
        <h2 className="font-semibold mb-2">Price</h2>
        <ul>
          {price.map((d, idx) => {
            return (
              <li key={idx} className="mb-2">
                <CategoryList data={d} update={updatePrice} parent={d} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const CategoryList = ({ update, data, parent }) => {
  return (
    <div className="flex gap-x-2 items-center">
      <Checkbox check={data.check} onChange={() => update(data, parent)} />
      <p>{data.text}</p>
    </div>
  );
};

CategoryList.propTypes = {
  update: PropTypes.any,
  data: PropTypes.any,
  parent: PropTypes.any,
  item: PropTypes.any,
};
