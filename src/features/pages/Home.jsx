import ProductDisplay from "../components/product-display";
import { motion as m } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import {
  updateUrlParams,
  updatePageParams,
} from "../../store/reduces/appconfig";
import { updateByPriceProducts } from "../../store/reduces/products";
import { useEffect, useState } from "react";

export default function Home() {
  const products = useSelector((state) => state.products.product);
  const productLength = useSelector((state) => state.products.productLength);
  const defaultPage = useSelector((state) => state.app.urlParams.page.Page);
  const urlParams = useSelector((state) => state.app.urlParams);
  
  return (
    <m.div
      initial={{ x: "100%", position: "absolute", top: "0px", left: "0px" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="w-full h-full bg-white relative"
    >
      <div className="w-full overflow-y-auto h-[900px] ">
        <ProductDisplay item={products} />
      </div>
      <div
        style={{
          boxShadow: "-6px -10px 17px -13px rgba(0,0,0,0.75)",
        }}
        className="pt-4 px-5 flex justify-end  bg-white z-[10] fixed border-t w-full h-[100px] bottom-0 overflow-x-hidden"
      >
        <ProductPagination
          page={productLength}
          color="primary"
          defaultPage={defaultPage}
          urlParams={urlParams}
        />
      </div>
    </m.div>
  );
}

function ProductPagination({ page, color, defaultPage, urlParams }) {
  const [pageSelected, setPageSelected] = useState(0);
  const setSearchParams = useSearchParams()[1];
  const dispatch = useDispatch();
  const itemRenderCount = 10;

  function customRound(number) {
    const decimalPart = number - Math.floor(number);
    if (decimalPart >= 0.1) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }

  const pageCount = page / itemRenderCount;
  const pages = pageCount < 1 ? customRound(pageCount) : customRound(pageCount);

  useEffect(() => {
    if (defaultPage) {
      setPageSelected(parseInt(defaultPage));
      const fromPage = (parseInt(defaultPage) - 1) * itemRenderCount;
      const toPage = fromPage + itemRenderCount;
      dispatch(
        updateByPriceProducts(urlParams, { from: fromPage, to: toPage })
      );
    }
  }, [defaultPage, dispatch, urlParams]);

  const updateParams = (params) => {
    setSearchParams(params);
  };

  const handleChange = (type, page) => {
    const fromPage = parseInt(page - 1) * itemRenderCount;
    const toPage = fromPage + itemRenderCount;
    setPageSelected(parseInt(page));
    dispatch(updatePageParams({ page }));
    dispatch(updateUrlParams(updateParams));
    dispatch(updateByPriceProducts(urlParams, { from: fromPage, to: toPage }));
  };

  if (!defaultPage) {
    return <div>Loading ...</div>;
  }

  return (
    <Pagination
      onChange={handleChange}
      count={pages}
      color={color}
      page={pageSelected}
      shape="rounded"
    />
  );
}

ProductPagination.propTypes = {
  page: PropTypes.any,
  color: PropTypes.any,
  defaultPage: PropTypes.any,
  urlParams: PropTypes.any,
};
