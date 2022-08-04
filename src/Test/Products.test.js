import ProductPage from "../Components/ProductPage";
import {
  render as rtlRender,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "../Components/reducers";
import axios from "axios";


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

//Mock axios
jest.mock("axios");

//Mock redux
const render = (
  ui,
  {
  store = configureStore({
      reducer: reducers,
  }),
  ...renderOptions
  } = {}
) => {

const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}


test("renders page with redux", async () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      ],
    },
    {
      brand: "Samsung",
      category: "smartphones",
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      discountPercentage: 15.46,
      id: 3,
      images: ['https://dummyjson.com/image/i/products/3/1.jpg'],
      price: 1249,
      rating: 4.09,
      stock: 36,
      thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
      title: "Samsung Universe 9"
    }
  ];
  
  // Mock axios implementation
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: { products } })
  );

  render(<ProductPage />);

  // const makeCustomWait = () => {
  //   return waitForElementToBeRemoved(() => screen.queryByAltText("loading"));
  // };

  // await makeCustomWait();

  // screen.debug();

  // const title = screen.getByPlaceholderText("Enter Title");

  // fireEvent.change(title,{target:{value:"Samsung"}});

  var cards = screen.getAllByText("View Product");
  expect(cards.length).toBe(1);
});

// 2
// test("renders correct product", () => {
//     render(<ProductPage />);
//       // screen.debug();
//     const product = screen.getByText("iPhone 9");
//     expect(product).toBeInTheDocument(); // jest
//   });

//   // 3
// test("renders all 100 products", () => {
//     render(<ProductPage />);
//       // screen.debug();
//     const product = screen.getAllByText("Rating:");
//     expect(product.length).toBe(100); // jest
//   });

//   // 4
// test("renders products details page on click", () => {
//     render(<ProductPage />);
//       // screen.debug();
//     const product = screen.getByText("iPhone 9");
//     fireEvent.click(product);
//     const expectedproduct = screen.getByText("iPhone 9");
//     expect(expectedproduct).toBeInTheDocument();
//     // expect(product.length).toBe(100); // jest
//   });

//   // 5
// test("renders products details page on click with correct detail", () => {
//     render(<ProductPage />);
//       const product = screen.getByText("iPhone 9");
//       fireEvent.click(product);
//       const expectedtext = screen.getByText("An apple mobile which is nothing like apple");
//       expect(expectedtext).toBeInTheDocument();
//   });