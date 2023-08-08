import { createSlice, current } from "@reduxjs/toolkit";
import { store } from "../store";
function updateItems(data, item) {
  let newItem = [];
  newItem = item.map((list) => {
    if (data.text.toLowerCase() === "all") {
      if (list.text.toLowerCase() === "all") {
        list = { ...list, check: true };
      } else {
        list = { ...list, check: false };
      }
      return list;
    } else {
      if (list.text.toLowerCase() === "all") {
        list = { ...list, check: false };
      } else {
        if (list.text === data.text) {
          list = { ...list, check: !list.check };
          if (list.category) {
            const newCatList = list.category.map((listed) => {
              if (listed.text.toLowerCase() === "all") {
                listed = { ...listed, check: true };
              } else {
                listed = { ...listed, check: false };
              }
              return listed;
            });
            list = { ...list, category: newCatList };
          }
        }
      }
    }
    return list;
  });
  if (newItem.every((listed) => listed.check === false)) {
    newItem = newItem.map((list) => {
      if (list.text.toLowerCase() === "all") {
        list = { ...list, check: true };
      } else {
        list = { ...list, check: false };
      }
      return list;
    });
  }
  return newItem;
}

function setNewUrlParamsCategory(item, parent) {
  function generateResult(arr) {
    let result = {};
    if (parent.text.toLowerCase() === "all") {
      result = {};
      result["Category"] = "All";
      return result;
    }
    arr.forEach((item) => {
      if (item.category && item.category.length > 0) {
        const checkedSubcategories = item.category
          .filter((subcategory) => subcategory.check)
          .map((subcategory) => subcategory.text);

        if (checkedSubcategories.length > 0) {
          result[item.text] = checkedSubcategories.join(", ");
        }
      }
    });

    return result;
  }

  const newParams = generateResult(item);
  const newUrlPrams = Object.entries(newParams).map((a) => {
    if (a[0].toLowerCase() === "category") {
      return `All`;
    }
    return `${a[0]}=[${a[1]}]`;
  });
  return { Category: newUrlPrams.join("&") };
}

function setNewUrlParamsPrice(item, parent) {
  function generateResult(arr) {
    let result = {};
    arr.forEach((item) => {
      if (item.text === parent.text) {
        result = {};
        result["Price"] = item.text;
      }
    });
    return result;
  }

  return generateResult(item);
}

function categoryUrlToData(url, initialCategory) {
  const dataOnUrl = url.category.Category.split("&").map((d) => ({
    parent: d.split("=")[0],
    child: d.split("=")[1].replace("[", "").replace("]", "").split(","),
  }));
  return initialCategory.map((ds) => {
    const find = dataOnUrl.filter((dss) => dss.parent === ds.text)[0];
    if (find && ds.category.length > 0) {
      const newChildCat = ds.category.map((dsss) => {
        find.child.forEach((childData) => {
          if (childData === dsss.text) {
            dsss = { ...dsss, check: true };
          }
        });
        return dsss;
      });
      ds = { ...ds, category: newChildCat, check: true };
    } else {
      ds = { ...ds, check: false };
    }
    return ds;
  });
}
function priceyUrlToData(url, initialPrice) {
  return initialPrice.map((list) => {
    if (list.text === url.price.Price) {
      list = { ...list, check: true };
    } else {
      list = { ...list, check: false };
    }
    return list;
  });
}
const initialState = {
  urlParams: {
    price: {},
    category: {},
    page: {},
  },
  isSidebarShow: false,
  category: [
    {
      text: "All",
      check: false,
      category: [],
    },
    {
      text: "Shoes",
      check: false,
      category: [
        {
          text: "All",
          check: false,
        },
        {
          text: "Nike",
          check: false,
        },
        {
          text: "adidas",
          check: false,
        },
        {
          text: "jordan",
          check: false,
        },
      ],
    },
    {
      text: "T-shirt",
      check: false,
      category: [
        {
          text: "All",
          check: false,
        },
        {
          text: "Polo",
          check: false,
        },
        {
          text: "long sleeve",
          check: false,
        },
        {
          text: "half sleeve",
          check: false,
        },
      ],
    },
    {
      text: "Pants",
      check: false,
      category: [
        {
          text: "All",
          check: false,
        },
        {
          text: "Jeans",
          check: false,
        },
        {
          text: "Maong",
          check: false,
        },
        {
          text: "leggins",
          check: false,
        },
      ],
    },
  ],
  price: [
    {
      from: 0,
      to: Infinity,
      text: "All",
      check: false,
    },
    {
      from: 0,
      to: 50,
      text: "₱0-₱50",
      check: false,
    },
    {
      from: 50,
      to: 100,
      text: "₱50-₱100",
      check: false,
    },
    {
      from: 100,
      to: 150,
      text: "₱100-₱150",
      check: false,
    },
    {
      from: 150,
      to: 250,
      text: "₱150-₱250",
      check: false,
    },
    {
      from: 250,
      to: 500,
      text: "₱250-₱500",
      check: false,
    },
    {
      from: 500,
      to: Infinity,
      text: "Over-₱500",
      check: false,
    },
  ],
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    sidebarCloseOpen: (state) => {
      state.isSidebarShow = !state.isSidebarShow;
    },
    sidebarSetOpen: (state) => {
      state.isSidebarShow = false;
    },
    sidebarSetClose: (state) => {
      state.isSidebarShow = true;
    },
    updateParentCategories: (state, action) => {
      const data = action.payload.data;
      const item = current(state).category;
      const newItem = updateItems(data, item);
      state.category = newItem;
      state.urlParams.category = setNewUrlParamsCategory(newItem, data);
    },
    updateChildCategories: (state, action) => {
      const { data, parent } = action.payload;
      const item = current(state).category;
      const newItem = item.map((list) => {
        if (list.text.toLowerCase() === "all") {
          return list;
        }
        if (list.text === parent.text) {
          list = { ...list, category: updateItems(data, list.category) };
        }
        return list;
      });
      state.category = newItem;
      state.urlParams.category = setNewUrlParamsCategory(newItem, parent);
    },
    updatePrices: (state, action) => {
      const data = action.payload.data;
      const item = current(state).price;
      const newItem = item.map((list) => {
        if (data.text === list.text) {
          list = { ...list, check: true };
        } else {
          list = { ...list, check: false };
        }
        return list;
      });
      state.price = newItem;
      state.urlParams.price = setNewUrlParamsPrice(newItem, data);
    },
    setDefaultValue: (state) => {
      if (
        !state.category.every((ds) => ds.check === false) &&
        !state.price.every((ds) => ds.check === false)
      ) {
        return;
      }
      state.category = updateItems(
        { text: "All", check: false },
        current(state).category
      );
      state.price = current(state).price.map((list) => {
        if (list.text.toLowerCase() === "all") {
          list = { ...list, check: true };
        } else {
          list = { ...list, check: false };
        }
        return list;
      });
    },
    setDefaultUrlParams: (state) => {
      state.urlParams = {
        price: { Price: "All" },
        category: { Category: "All" },
        page: { Page: "1" },
      };
    },
    reflectParamsToOptions: (state, action) => {
      const url = action.payload.params;
      const item = current(state).category;
      const price = current(state).price;
      const initialCategory = [...item];
      const initialPrice = [...price];

      if (url.category.Category.toLowerCase().trim() !== "all") {
        state.category = categoryUrlToData(url, initialCategory);
      }
      state.price = priceyUrlToData(url, initialPrice);
      state.urlParams = action.payload.params;
    },
    updatePageParams: (state, action) => {
      const page = action.payload.page;
      const params = current(state).urlParams;
      state.urlParams = { ...params, page: { Page: page } };
    },
    getAllStateUpdate: (state) => {
      state.urlParams = current(state).urlParams;
    },
    resetPageParams: (state) => {
      state.urlParams.page.Page = '1';
    },
  },
});

export const {
  sidebarCloseOpen,
  sidebarSetOpen,
  sidebarSetClose,
  updatePrices,
  updateParentCategories,
  updateChildCategories,
  setDefaultValue,
  setDefaultUrlParams,
  getAllStateUpdate,
  reflectParamsToOptions,
  updatePageParams,
  resetPageParams,
} = counterSlice.actions;

export const defaultUrlParams = (callback, getParams) => (dispatch) => {
  if (
    getParams.get("Price") === null &&
    getParams.get("Category") === null &&
    getParams.get("Page") === null
  ) {
    dispatch(setDefaultUrlParams());
    const params = store.getState().app.urlParams;
    callback({ ...params.price, ...params.category, ...params.page });
    return;
  }
  const params = {
    price: { Price: getParams.get("Price") ?? "All" },
    category: { Category: getParams.get("Category") ?? "All" },
    page: { Page: getParams.get("Page") ?? "1" },
  };
  dispatch(reflectParamsToOptions({ params }));
};

export const updateUrlParams = (callback) => (dispatch) => {
  dispatch(getAllStateUpdate());
  const params = store.getState().app.urlParams;
  callback({ ...params.price, ...params.category, ...params.page });
};

export default counterSlice.reducer;
