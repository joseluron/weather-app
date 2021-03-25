# Weather App

This is a small weather app created with `create-react-app` and using the `openweathermap` API.

## How to use

The app is really simple to use. Once in the home page, weather information for Barcelona, San Francisco, London and aris will be fetched. Once it's loaded in the app store, you will be able to see some weather preview per city, or navigate to a specific city page to see more detailed information. The weather information will also be updated every minute for a more accurate reading.

A netlify version of the app can be found here: https://weather-app-jlc.netlify.app/

### Testing

A couple of test has been implented in the app `/tests` folder. To execute them, simply run the built-in `npm run test` script.

### Notes

The app might not be 100% responsive for every device. For convenience, the `openweathermap` has been directly written in the app code instead of in an `.env` file.

### Future work
 
 - Make sure there is message or fallback for every case where the app might not have fecthed every city weather information
 - Add an input to let the user search the information for specific cities