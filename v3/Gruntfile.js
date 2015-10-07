module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            options: {
                compress: true,
                yuicompress: true,
                optimization: 2
            },
            compile: {
                expand: true,
                cwd: 'app/assets/less/',
                src: ['*.less', '!**/variables.less', '!**/mixins.less', '!**/font-standards.less'],
                dest: 'app/assets/css/',
                ext: '.css'
            }
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'app/assets'
                },
                files: {
                    // JS
                    'js/angular/angular.min.js': 'angular/angular.min.js',
                    'js/angular-route/angular-route.min.js': 'angular-route/angular-route.min.js',
                    'js/angular-animate/angular-animate.min.js': 'angular-animate/angular-animate.min.js',
                    'js/angulartics/angulartics.min.js': 'angulartics/dist/angulartics.min.js',
                    'js/angulartics/angulartics-google-analytics.min.js': 'angulartics-google-analytics/dist/angulartics-google-analytics.min.js',

                    // CSS
                    'css/bootstrap.min.css': 'bootstrap-css-only/css/bootstrap.min.css'
                }
            }
        },
        uglify: {
            options: {
                compress: false,
                mangle: false,
                sourceMap: true
            },
            build: {
                files: {
                    'app/assets/js/uglify-all/lib.min.js': ['app/assets/js/**/*.js', '!**/angular/*', '!**/angular-route/*', '!**/angular-animate/*'],
                    'app/assets/js/uglify-all/app.min.js': ['app/app.js', 'app/components/**/*.js', 'app/views/**/*.js']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: '*',
                    base: 'app/',
                    livereload: true
                }
            }
        },
        watch: {
            styles: {
                files: [
                    'app/assets/less/*.less'
                ],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            all: {
                files: '**/*.html',
                options: {
                    livereload: true
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['bowercopy', 'connect', 'watch']);
    grunt.registerTask('bower', ['bowercopy']);
    grunt.registerTask('uglify-all', ['uglify']);
};