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
                compress: true
            },
            project: {
                files: {
                    "angular-skycons.min.js": [ "angular-skycons.js" ]
                }
            }
        }

    } );

    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );

    grunt.registerTask( "default", [ "uglify" ] );

};
