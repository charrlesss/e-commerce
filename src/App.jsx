import { useEffect, useRef } from "react";
import Layout from "./features/layout/layout";
import Routers from "./router/router";
import { useDispatch } from "react-redux";
import { setDefaultValue, defaultUrlParams } from "./store/reduces/appconfig";
import { useSearchParams } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const setDefaultUrlParams = useRef((params) => {
    setSearchParams(params);
  });
  const getParams = useRef(searchParams);

  useEffect(() => {
    dispatch(setDefaultValue());
    dispatch(defaultUrlParams(setDefaultUrlParams.current, getParams.current));
  }, [dispatch]);

  return (
    <Layout>
      <Routers />
    </Layout>
  );
}

