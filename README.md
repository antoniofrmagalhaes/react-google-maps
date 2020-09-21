## React Google Map
##### This application implements google maps and google places api

Search for places using google places api.

![places-autocomplete](https://user-images.githubusercontent.com/49319968/93828962-7a658e00-fc3a-11ea-8818-9c613bb5171c.png)

Click to pin, click on pin to see the lat and lng values of that specific location.

![Screenshot from 2020-09-21 18-41-10 (1)](https://user-images.githubusercontent.com/49319968/93829709-370c1f00-fc3c-11ea-8146-679321c00a74.png)

## Installation

OS X, Windows or Linux:

```sh
npm install or yarn
```
## GOOGLE MAPS API KEY

In order to run this applicatuib correctly, you must provide your own google maps api key, can be created here: 
https://developers.google.com/maps/documentation/javascript/get-api-key
after create your google maps api key, you must enable maps javascript api, places api and geocoding api.

### How to enable Google Maps API?

#### Enable an API
* Go to the API Console.
* From the projects list, select a project or create a new one.
* If the APIs & services page isn't already open, open the console left side menu and select APIs & services, and then select Library.
* Click the API you want to enable...
* Click ENABLE.

#### Local Enviromnents
Your API key must be set on the .env.local file, you will need to create .env.local file and place your API key just like this:
> REACT_APP_GOOGLE_MAPS_API_KEY=MKSEkaweiaasdoOAIoWIO.zwmKakkswoiHUE

##### Once followed these steps, you can run the following command to start the development application.
> yarn start
