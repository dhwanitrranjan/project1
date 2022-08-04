import React from 'react'
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '../Components/Login'

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// 1

test("renders Login page", () => {
  render(<Login />);
    screen.debug();
  const email = screen.getByPlaceholderText("Enter email");
  expect(email).toBeInTheDocument(); // jest
});

// 2

test("should accept email value", () => {
  render(<Login />);
  const element = screen.getByPlaceholderText("Enter email");
  fireEvent.change(element, { target: { value: "test@gmail.com" } });
  screen.debug();
  expect(element.value).toBe("test@gmail.com");
});

// 3

test("should accept password value", () => {
  render(<Login />);
  const element = screen.getByPlaceholderText("Password");
  fireEvent.change(element, { target: { value: "Dhwanit!!11" } });
//   screen.debug();
  expect(element.value).toBe("Dhwanit!!11");
});

// 4
test("Checking for navigate.", () => {
    render(<Login />);
    var email = screen.getByPlaceholderText("Enter email");
    fireEvent.change(email,{target: {value: "dhwanit@gmail.com"}});

    var password = screen.getByPlaceholderText("Password");
    fireEvent.change(password, {target: {value:"Dhwanit111!!!"}});

    var button = screen.getByRole("button");
    fireEvent.click(button);
    // screen.debug()
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/add-data")
  });

  // 5 

  test("display password error", () => {
    render(<Login />);
    // var email = screen.getByPlaceholderText("Enter email");
    // fireEvent.change(email,{target: {value: "dhwani"}});

    // var password = screen.getByPlaceholderText("Password");
    // fireEvent.change(password, {target: {value:"Dhwanit"}});
    
    var element = screen.getByRole("button");
    fireEvent.click(element);
    const err = screen.getByText("The length of password should be more 8.");
    expect(err).toBeInTheDocument();
  });