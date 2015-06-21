var angularSkycons = angular.module( "angular-skycons", [] );


angularSkycons.directive( "skycon", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            icon: "=",
            size: "=",
            animated: "=",
            color: "="
        },
        link: function ( scope, element, attrs ) {

            // make a canvas for our icon
            var canvas = document.createElement( "canvas" );

            // set the CSS class from attribute
            if ( !attrs.class ) {
                canvas.className = "";
            } else {
                canvas.className = attrs.class;
            }

            // set default color if "color" attribute not present
            var config = {
                color: scope.color || "black"
            };

            var skycons = new Skycons( config );

            // watch the size property from the controller
            scope.$watch( "size", function ( newVal, oldVal ) {
                if ( newVal ) {
                    canvas.height = newVal;
                    canvas.width = newVal;
                } else {
                    canvas.height = scope.size || 64;
                    canvas.width = scope.size  || 64;
                }
            }, true );

            // add the animation
            skycons.add( canvas, scope.icon );

            // watch the icon property from the controller for changes
            scope.$watch( "icon", function () {
                skycons.set( canvas, scope.icon );
            }, true );

            // watch the color property from the controller for changes
            scope.$watch( "color", function () {
                skycons.color = scope.color;
            }, true );

            if (scope.animated === "false" || scope.animated === false) {
                skycons.pause();
            }
            else {
                skycons.play();
            }

            if ( element[0].nodeType === 8 ) {
                element.replaceWith( canvas );
            } else {
                element[0].appendChild( canvas );
            }

            scope.$on("$destroy", function () {
                skycons.remove(canvas);
                if (skycons.list.length === 0) {
                    skycons.pause(canvas);
                }
            });
        }
    };
} );
