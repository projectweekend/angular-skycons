module.exports = function ( grunt ) {

    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),
        watch: {
            scripts: {
                files: [ "angular-skycons.js" ],
                tasks: [ "uglify" ]
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: {}
            },
            project: {
                files: {
                    "angular-skycons.min.js": [
                        "tmp/angular-skycons.concat.js"
                    ]
                }
            }
        },
        concat: {
            scripts: {
                src: [
                    "bower_components/skycons/skycons.js",
                    "angular-skycons.js"
                ],
                dest: "tmp/angular-skycons.concat.js"
            },
        }

    } );

    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );
    grunt.loadNpmTasks( "grunt-contrib-concat" );

    grunt.registerTask( "default", [ "concat", "uglify" ] );

};
