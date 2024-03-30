import Weather from "./Weather";
import { render } from "@testing-library/react";
import { describe } from "vitest";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe("Weather renders correct data", () => {
  const initialStore = {
    value: [],
    forecast: [],
  }
  const mockStore = configureStore()
  let store
  const data = {"coord": {
        "lon": 23.36,
        "lat": 42.65
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 20.82,
        "feels_like": 19.69,
        "temp_min": 20.6,
        "temp_max": 21.46,
        "pressure": 1011,
        "humidity": 28
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.63,
        "deg": 210
    },
    "clouds": {
        "all": 20
    },
    "dt": 1711629903,
    "sys": {
        "type": 2,
        "id": 2033225,
        "country": "BG",
        "sunrise": 1711599320,
        "sunset": 1711644451
    },
    "timezone": 7200,
    "id": 731061,
    "name": "Sofia-Capital",
    "cod": 200};

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
    expect(dateValue).toEqual("Thursday");
  })

  it('Should display correct symbol for the metric unit', () => {
    store = mockStore(initialStore)
    const { container  } = render(<Provider store={store}>
        <BrowserRouter>
            <Weather unit='metric'/>
        </BrowserRouter>
    </Provider>)

    expect(container.getElementsByClassName('current-temperature').item.toString()).toContain('C');
  });
  
  it('Should display correct symbol for the imperial unit', () => {
    store = mockStore(initialStore)
    const { container  } = render(<Provider store={store}>
        <BrowserRouter>
            <Weather unit='imperial'/>
        </BrowserRouter>
    </Provider>)

    expect(container.getElementsByClassName('current-temperature').item.toString()).toContain('F');
  });
});
