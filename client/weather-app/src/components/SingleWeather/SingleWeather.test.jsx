import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import SingleWeather from "./SingleWeather";

describe('Single Weather should show correct data', () => {
    const initialStore = {
        weather: {
            value: [],
            forecast: [{
                    "dt": 1711724400,
                    "main": {
                        "temp": 21.43,
                        "feels_like": 20.52,
                        "temp_min": 21.08,
                        "temp_max": 21.43,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 931,
                        "humidity": 34,
                        "temp_kf": 0.35
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 3
                    },
                    "wind": {
                        "speed": 1.09,
                        "deg": 60,
                        "gust": 0.98
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-29 15:00:00"
                },
                {
                    "dt": 1711735200,
                    "main": {
                        "temp": 17.78,
                        "feels_like": 16.81,
                        "temp_min": 15.87,
                        "temp_max": 17.78,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 932,
                        "humidity": 46,
                        "temp_kf": 1.91
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 31
                    },
                    "wind": {
                        "speed": 1.6,
                        "deg": 122,
                        "gust": 1.74
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-03-29 18:00:00"
                },
                {
                    "dt": 1711746000,
                    "main": {
                        "temp": 14.19,
                        "feels_like": 13.23,
                        "temp_min": 14.19,
                        "temp_max": 14.19,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 932,
                        "humidity": 60,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 1.5,
                        "deg": 119,
                        "gust": 1.75
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-03-29 21:00:00"
                },
                {
                    "dt": 1711756800,
                    "main": {
                        "temp": 12.61,
                        "feels_like": 11.65,
                        "temp_min": 12.61,
                        "temp_max": 12.61,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 932,
                        "humidity": 66,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 98
                    },
                    "wind": {
                        "speed": 0.34,
                        "deg": 161,
                        "gust": 0.87
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-03-30 00:00:00"
                }],
            city: 'Veliko Tarnovo',
        }
      }
      const mockStore = configureStore()
      let store
    it('Should display the name of the city', () => {
        store = mockStore(initialStore)
        render(
          <Provider store={store}>
            <BrowserRouter>
              <SingleWeather />
            </BrowserRouter>
          </Provider>
        )

        expect(screen.getByText('Veliko Tarnovo')).toBeInTheDocument();
    });

    it('Should display correct symbol for the metric unit', () => {
        store = mockStore(initialStore)
        const { container  } = render(
          <Provider store={store}>
            <BrowserRouter>
              <SingleWeather unit='metric'/>
            </BrowserRouter>
          </Provider>
        )

        expect(container.getElementsByClassName('temp').item.toString()).toContain('C');
    });
    it('Should display correct symbol for the imperial unit', () => {
        store = mockStore(initialStore)
        const { container  } = render(
          <Provider store={store}>
            <BrowserRouter>
              <SingleWeather unit='imperial'/>
            </BrowserRouter>
          </Provider>
        )

        expect(container.getElementsByClassName('temp').item.toString()).toContain('F');
    });
});