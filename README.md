This is an [AngularJS](http://angularjs.org/) module that makes it super easy to add [Forecast.io](http://forecast.io/) skycons to your app. [Skycons](http://darkskyapp.github.io/skycons/) is an open-source set of animated weather glyphs that uses JavaScript and the HTML5 canvas element.

![Example Skycons](https://raw.githubusercontent.com/projectweekend/angular-skycons/master/screenshots/example-skycons.png)

## Install it
If you're familar with how to include third-party modules in AngularJS, then you can probably skip this section. If you're new to the framework, this should help.

### Step 1
Copy the `skycons.js` file from [darkskyapp/skycons](https://github.com/darkskyapp/skycons) and the `angular-skycons.js` file from this repository into your project. In this example, I'm using the directory '/js/lib' for the location. My main AngularJS app in this case is in `/js`.

![Screenshot of files in project folder](https://raw.githubusercontent.com/projectweekend/angular-skycons/master/screenshots/copy-files-into-project.png)

### Step 2
Include both of these files before the main app file:

~~~html
<script src="/js/lib/skycons.js"></script>
<script src="/js/lib/angular-skycons.js"></script>
<script src="/js/app.js"></script>
~~~

### Step 3
Add `angular-skycons` to the app requirements (`/js/app.js`).
~~~javascript
var app = angular.module('myApp', [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    // 3rd party dependencies
    'angular-skycons'
]);
~~~

## Use it
This module creates a custom directive (tag) that you can use anywhere in your templates. This directive has three attributes:

* icon - This one is **required** since it defines which icon you want to display. Unlike the other two attributes, this one must be bound to a property of a controller. The accepted values for this attribute correspond to the values returned in the `icon` property of data point objects in the [Forecast.io API](https://developer.forecast.io/docs/v2). The possible options are: `clear-day`, `clear-night`, `rain`, `snow`, `sleet`, `wind`, `fog`, `cloudy`, `partly-cloudy-day`, or `partly-cloudy-night`.
* color - This is optional. If the `color` attribute is not present, the default is `black`.
* size - This is optional. Since the icon is always a square, you only need to provide a single value. If the `size` attribute is not present, the default is a 64px square.

#### Controller Example
~~~javascript
var cMod = angular.module( 'myApp.controllers', [] );

cMod.controller( 'WeatherCtrl', function ( $scope ) {

    /*
        This example is over simplified to demonstrate the relationship
        between the 'controller' and the 'template' with regard to loading
        the 'icon' value. Hopefully, you will be loading your controller with
        data from an actual API response. :)
    */
	$scope.CurrentWeather = {
        forecast: {
            icon: "partly-cloudy-night",
            ...
        }
    };

} );
~~~

#### Template Example
~~~html
<skycon icon="CurrentWeather.forecast.icon" color="blue" size="100"></skycon>

<skycon icon="CurrentWeather.forecast.icon" color="pink"></skycon>

<skycon icon="CurrentWeather.forecast.icon"></skycon>
~~~
