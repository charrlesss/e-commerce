import { createSlice, current } from "@reduxjs/toolkit";
import adidas1 from "../../assets/img/shoes/adidas/adidas1.webp";
import adidas2 from "../../assets/img/shoes/adidas/adidas2.webp";
import adidas3 from "../../assets/img/shoes/adidas/adidas3.webp";
import adidas4 from "../../assets/img/shoes/adidas/adidas4.webp";
import jordan1 from "../../assets/img/shoes/jordan/jordan1.avif";
import jordan2 from "../../assets/img/shoes/jordan/jordan2.jpg";
import jordan3 from "../../assets/img/shoes/jordan/jordan3.jpg";
import jordan4 from "../../assets/img/shoes/jordan/jordan4.jpg";
import nike1 from "../../assets/img/shoes/nike/nike1.webp";
import nike2 from "../../assets/img/shoes/nike/nike2.webp";
import nike3 from "../../assets/img/shoes/nike/nike3.jpg";
import nike4 from "../../assets/img/shoes/nike/nike4.jpg";
import halfsleeve1 from "../../assets/img/T-shirt/half/halfsleeve1.png";
import halfsleeve2 from "../../assets/img/T-shirt/half/halfsleeve2.png";
import halfsleeve3 from "../../assets/img/T-shirt/half/halfsleeve3.webp";
import longsleeve2 from "../../assets/img/T-shirt/long/longsleeve2.jpg";
import longsleeve3 from "../../assets/img/T-shirt/long/longsleeve3.webp";
import longsleeve4 from "../../assets/img/T-shirt/long/longsleeve4.webp";
import polo1 from "../../assets/img/T-shirt/polo/polo1.jpg";
import polo2 from "../../assets/img/T-shirt/polo/polo2.jpg";
import polo3 from "../../assets/img/T-shirt/polo/polo3.webp";
import polo4 from "../../assets/img/T-shirt/polo/polo4.webp";
import polo5 from "../../assets/img/T-shirt/polo/polo5.jpg";
import jeans1 from "../../assets/img/Pants/jeans/jeans1.jpg";
import jeans2 from "../../assets/img/Pants/jeans/jeans2.jpg";
import jeans3 from "../../assets/img/Pants/jeans/jeans3.webp";
import leggins1 from "../../assets/img/Pants/leggins/leggins1.jpg";
import leggins2 from "../../assets/img/Pants/leggins/leggins2.webp";
import leggins3 from "../../assets/img/Pants/leggins/leggins3.webp";
import maong1 from "../../assets/img/Pants/maong/maong1.jpg";
import maong2 from "../../assets/img/Pants/maong/maong2.jpg";
import maong3 from "../../assets/img/Pants/maong/maong3.jpg";

const productsData = [
  {
    id: "1",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: adidas1,
    otherpic: adidas1,
    quantity: 200,
    location: "caloocan city",
    price: 50,
    sold: 100,
    rating: 0,
    brand: "adidas",
    type: "Shoes",
  },
  {
    id: "2",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: adidas2,
    otherpic: adidas2,
    quantity: 200,
    location: "caloocan city",
    price: 100,
    sold: 100,
    rating: 2,
    brand: "adidas",
    type: "Shoes",
  },
  {
    id: "3",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: adidas3,
    otherpic: adidas3,
    quantity: 200,
    location: "caloocan city",
    price: 140,
    sold: 100,
    rating: 3,
    brand: "adidas",
    type: "Shoes",
  },
  {
    id: "4",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: adidas4,
    otherpic: adidas4,
    quantity: 200,
    location: "caloocan city",
    price: 78,
    sold: 100,
    rating: 2,
    brand: "adidas",
    type: "Shoes",
  },
  {
    id: "5",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: jordan1,
    otherpic: jordan1,
    quantity: 200,
    location: "caloocan city",
    price: 90,
    sold: 100,
    rating: 5,
    brand: "jordan",
    type: "Shoes",
  },
  {
    id: "6",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: jordan2,
    otherpic: jordan2,
    quantity: 200,
    location: "caloocan city",
    price: 20,
    sold: 100,
    rating: 4,
    brand: "jordan",
    type: "Shoes",
  },
  {
    id: "7",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: jordan3,
    otherpic: jordan3,
    quantity: 200,
    location: "caloocan city",
    price: 550,
    sold: 100,
    rating: 3,
    brand: "jordan",
    type: "Shoes",
  },
  {
    id: "8",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: jordan4,
    otherpic: jordan4,
    quantity: 200,
    location: "caloocan city",
    price: 1000,
    sold: 100,
    rating: 1,
    brand: "jordan",
    type: "Shoes",
  },
  {
    id: "9",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: nike1,
    otherpic: nike1,
    quantity: 200,
    location: "caloocan city",
    price: 340,
    sold: 100,
    rating: 3,
    brand: "nike",
    type: "Shoes",
  },
  {
    id: "10",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: nike2,
    otherpic: nike2,
    quantity: 200,
    location: "caloocan city",
    price: 200,
    sold: 160,
    rating: 3,
    brand: "nike",
    type: "Shoes",
  },
  {
    id: "11",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: nike3,
    otherpic: nike3,
    quantity: 200,
    location: "caloocan city",
    price: 24,
    sold: 100,
    rating: 3,
    brand: "nike",
    type: "Shoes",
  },
  {
    id: "12",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: nike4,
    otherpic: nike4,
    quantity: 200,
    location: "caloocan city",
    price: 40,
    sold: 100,
    rating: 3,
    brand: "nike",
    type: "Shoes",
  },
  {
    id: "13",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: halfsleeve1,
    otherpic: halfsleeve1,
    quantity: 112,
    location: "caloocan city",
    price: 200,
    sold: 100,
    rating: 3,
    brand: "half sleeve",
    type: "T-shirt",
  },
  {
    id: "14",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: halfsleeve2,
    otherpic: halfsleeve2,
    quantity: 160,
    location: "caloocan city",
    price: 200,
    sold: 100,
    rating: 3,
    brand: "half sleeve",
    type: "T-shirt",
  },
  {
    id: "15",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: halfsleeve3,
    otherpic: halfsleeve3,
    quantity: 200,
    location: "caloocan city",
    price: 170,
    sold: 100,
    rating: 3,
    brand: "half sleeve",
    type: "T-shirt",
  },
  {
    id: "16",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: longsleeve2,
    otherpic: longsleeve2,
    quantity: 200,
    location: "caloocan city",
    price: 280,
    sold: 100,
    rating: 3,
    brand: "long sleeve",
    type: "T-shirt",
  },
  {
    id: "17",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: longsleeve3,
    otherpic: longsleeve3,
    quantity: 200,
    location: "caloocan city",
    price: 290,
    sold: 100,
    rating: 3,
    brand: "long sleeve",
    type: "T-shirt",
  },
  {
    id: "18",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: longsleeve4,
    otherpic: longsleeve4,
    quantity: 200,
    location: "caloocan city",
    price: 1200,
    sold: 100,
    rating: 3,
    brand: "long sleeve",
    type: "T-shirt",
  },
  {
    id: "19",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: polo1,
    otherpic: polo1,
    quantity: 2200,
    location: "caloocan city",
    price: 200,
    sold: 100,
    rating: 3,
    brand: "polo",
    type: "T-shirt",
  },
  {
    id: "20",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: polo2,
    otherpic: polo2,
    quantity: 3200,
    location: "caloocan city",
    price: 200,
    sold: 100,
    rating: 3,
    brand: "polo",
    type: "T-shirt",
  },
  {
    id: "21",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: polo3,
    otherpic: polo3,
    quantity: 200,
    location: "caloocan city",
    price: 230,
    sold: 100,
    rating: 3,
    brand: "polo",
    type: "T-shirt",
  },
  {
    id: "22",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: polo4,
    otherpic: polo4,
    quantity: 200,
    location: "caloocan city",
    price: 150,
    sold: 100,
    rating: 3,
    brand: "polo",
    type: "T-shirt",
  },
  {
    id: "23",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: polo5,
    otherpic: polo5,
    quantity: 200,
    location: "caloocan city",
    price: 30,
    sold: 100,
    rating: 3,
    brand: "polo",
    type: "T-shirt",
  },
  {
    id: "24",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: jeans1,
    otherpic: jeans1,
    quantity: 200,
    location: "caloocan city",
    price: 250,
    sold: 100,
    rating: 3,
    brand: "jeans",
    type: "Pants",
  },
  {
    id: "25",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: jeans2,
    otherpic: jeans2,
    quantity: 200,
    location: "caloocan city",
    price: 600,
    sold: 100,
    rating: 3,
    brand: "jeans",
    type: "Pants",
  },
  {
    id: "26",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: jeans3,
    otherpic: jeans3,
    quantity: 200,
    location: "caloocan city",
    price: 70,
    sold: 100,
    rating: 3,
    brand: "jeans",
    type: "Pants",
  },
  {
    id: "27",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: leggins1,
    otherpic: leggins1,
    quantity: 200,
    location: "caloocan city",
    price: 123,
    sold: 100,
    rating: 3,
    brand: "leggins",
    type: "Pants",
  },
  {
    id: "28",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: leggins2,
    otherpic: leggins2,
    quantity: 200,
    location: "caloocan city",
    price: 170,
    sold: 100,
    rating: 3,
    brand: "leggins",
    type: "Pants",
  },
  {
    id: "29",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: leggins3,
    otherpic: leggins3,
    quantity: 200,
    location: "caloocan city",
    price: 200,
    sold: 100,
    rating: 3,
    brand: "leggins",
    type: "Pants",
  },
  {
    id: "30",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: maong1,
    otherpic: maong1,
    quantity: 200,
    location: "caloocan city",
    price: 270,
    sold: 100,
    rating: 3,
    brand: "maong",
    type: "Pants",
  },
  {
    id: "31",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: maong2,
    otherpic: maong2,
    quantity: 200,
    location: "caloocan city",
    price: 10,
    sold: 100,
    rating: 3,
    brand: "maong",
    type: "Pants",
  },
  {
    id: "32",
    size: "xl",
    discount: 5,
    description: "kyrie irving shoes for kids",
    name: "Kyrie2023",
    mainpic: maong3,
    otherpic: maong3,
    quantity: 200,
    location: "caloocan city",
    price: 220,
    sold: 100,
    rating: 3,
    brand: "maong",
    type: "Pants",
  },
];

const initialState = {
  product: productsData,
  productLength: productsData.length,
  subProduct: productsData,
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    sliceByPage(state, action) {
      state.product = current(state).subProduct;
      state.product = current(state).product.slice(
        action.payload.from,
        action.payload.to
      );
    },
    sliceProductByPrice(state, action) {
      let container = [];
      const { from, to } = action.payload.page;
      if (action.payload.price === "All" || action.payload.category == "All") {
        container = current(state).product;
      }
      if (action.payload.price !== "All") {
        state.product = current(state).subProduct;

        const [priceFromStr, priceToStr] = action.payload.price
          .replaceAll("₱", "")
          .split("-");

        let priceFrom = 0;
        let priceTo = 0;
        if (priceFromStr === "Over") {
          priceFrom = parseInt(priceToStr);
          priceTo = Infinity;
        } else {
          priceFrom = parseInt(priceFromStr);
          priceTo = parseInt(priceToStr);
        }

        const filteredItems = current(state).product.filter(
          (item) => item.price >= priceFrom && item.price < priceTo
        );
        filteredItems.sort((a, b) => a.price - b.price);
        container = filteredItems;
      }
      if (action.payload.category !== "All") {
        if (container.length <= 0) {
          container = current(state).subProduct;
        }
        const removeBraces = action.payload.category
          .replaceAll("[", "")
          .replaceAll("]", "");
        const arrStr = removeBraces.split("&");
        const newArr = arrStr.map((str) => str.split("="));
        let categoryFilter = [];

        newArr.map(([key, value]) => {
          let childs = [];
          if (value.includes(",")) {
            childs = [...childs, ...value.replaceAll(" ", "").split(",")];
          } else {
            childs.push(value);
          }
          categoryFilter.push({ key, value: childs });
        });
        let handleArray = [];

        categoryFilter.forEach((data) => {
          if (container.filter((prod) => prod.type === data.key)) {
            data.value.forEach((prods) => {
              if (prods.toLowerCase() === "all") {
                handleArray = [
                  ...handleArray,
                  ...container.filter(
                    (p) => p.type.toLowerCase() === data.key.toLowerCase()
                  ),
                ];
              } else {
                handleArray = [
                  ...handleArray,
                  ...container.filter(
                    (p) => p.brand.toLowerCase() === prods.toLowerCase()
                  ),
                ];
              }
            });
          }
        });
        container = handleArray;
      }
      state.product = container;
      state.productLength = container.length;
      const slices = container.slice(from, to);
      state.product = slices;
    },
    sortProductByPrice(state, action) {
      state.product = current(state).subProduct;
      const { from, to } = action.payload.data;
      const filteredItems = current(state).product.filter(
        (item) => item.price >= from && item.price < to
      );

      filteredItems.sort((a, b) => a.price - b.price);
      state.product = filteredItems;
      state.productLength = filteredItems.length;
    },
    defaultProductData(state) {
      state.product = current(state).subProduct;
      state.productLength = state.product;
    },
  },
});

export const {
  sliceProductByPrice,
  sortProductByPrice,
  sliceByPage,
  defaultProductData,
} = products.actions;

export const updateByPriceProducts = (urlParams, data) => (dispatch) => {
  if (
    urlParams.price.Price === "All" &&
    urlParams.category.Category === "All"
  ) {
    dispatch(sliceByPage(data));
  } else {
    dispatch(
      sliceProductByPrice({
        category: urlParams.category.Category,
        price: urlParams.price.Price,
        page: data,
      })
    );
  }
};

export default products.reducer;
