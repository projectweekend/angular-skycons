var angularSkycons = angular.module( 'angular-skycons', [] );


angularSkycons.directive( 'skycon', function () {
    return {
        restrict: 'E',
        link: function ( scope, element, attrs ) {

            // make a canvas for our icon
            var canvas = document.createElement( 'canvas' );

            // set default size if "size" attribute not present
            if ( !attrs.size ) {
                canvas.height = 64;
                canvas.width = 64;
            } else {
                canvas.height = attrs.size;
                canvas.width = attrs.size;
            }

            // set default color if "color" attribute not present
            var config = {};
            if ( !attrs.color ) {
                config.color = "black";
            } else {
                config.color = attrs.color;
            }

            var skycons = new Skycons(config);
            skycons.add( canvas, attrs.icon );
            skycons.play();

            if (element[0].nodeType === 8) {
                element.replaceWith( canvas );
            } else {
                element[0].appendChild( canvas );
            }
        }
    };
} );
