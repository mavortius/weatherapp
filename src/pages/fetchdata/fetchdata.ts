import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

import { WeatherForecast } from "models/weather-forecast";

@autoinject()
export class Fetchdata {
  title = "Weather forecast";
  forecasts: WeatherForecast[];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config.withBaseUrl("http://localhost:5000/api")
      .withInterceptor({
        request(request) {
          console.log(`Requesting ${request.method} ${request.url}`);
          return request;
        },
        response(response) {
          console.log(`Received ${response.status} ${response.url}`);
          return response;
        }
      });
    });
  }

  created() {
    this.http
      .fetch("/weatherforecasts")
      .then(result => {
        return result.json() as Promise<WeatherForecast[]>;
      })
      .then(data => (this.forecasts = data))
      .catch(err => console.log(err));
  }
}
