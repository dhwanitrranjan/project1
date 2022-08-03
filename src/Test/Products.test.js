import { render, screen, fireEvent } from "@testing-library/react";
import ProductPage from "../Components/ProductPage";
import React from 'react'
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
import '@testing-library/jest-dom'

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// 1
test("renders Products page", () => {
  render(<ProductPage />);
    // screen.debug();
  const text = screen.getByText("Shopping Cart");
  expect(text).toBeInTheDocument(); // jest
});

// 2
test("renders correct product", () => {
    render(<ProductPage />);
      // screen.debug();
    const product = screen.getByText("iPhone 9");
    expect(product).toBeInTheDocument(); // jest
  });

  // 3
test("renders all 100 products", () => {
    render(<ProductPage />);
      // screen.debug();
    const product = screen.getAllByText("Rating:");
    expect(product.length).toBe(100); // jest
  });

  // 4
test("renders products details page on click", () => {
    render(<ProductPage />);
      // screen.debug();
    const product = screen.getByText("iPhone 9");
    fireEvent.click(product);
    const expectedproduct = screen.getByText("iPhone 9");
    expect(expectedproduct).toBeInTheDocument();
    // expect(product.length).toBe(100); // jest
  });

  // 5
test("renders products details page on click with correct detail", () => {
    render(<ProductPage />);
      const product = screen.getByText("iPhone 9");
      fireEvent.click(product);
      const expectedtext = screen.getByText("An apple mobile which is nothing like apple");
      expect(expectedtext).toBeInTheDocument();
  });