import Weather from "./Weather";
import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe("Weather renders correct data", () => {
  const initialStore = {
    weather: []
  }
  const mockStore = configureStore()
  let store
  const data = {
    dt: 1711524828,
    weather: { id: 802, description: "scattered clouds", icon: "03d" },
    temperature: 11.01,
    unit: "metric",
  };

  it('Should render correct date', () => {
    store = mockStore(initialStore)
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Weather currentWeather={data} />
        </BrowserRouter>
      </Provider>
    )

    const dateValue = getByTestId("date").textContent;
    expect(dateValue).toEqual("Wednesday");
  })
  
  // const { getByTestId } = render(<Weather currentWeather={data} />);
  // const dateValue = getByTestId("date").textContent;
  // expect(dateValue).toEqual("Wednesday");
});
