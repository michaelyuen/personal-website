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
            dev: {
                options: {
                    destPrefix: 'app/development/assets/js'
                },
                files: {
                    'angular/angular.min.js': 'angular/angular.min.js',
                    'angular-route/angular-route.min.js': 'angular-route/angular-route.min.js',
                    'angular-animate/angular-animate.min.js': 'angular-animate/angular-animate.min.js',
                    'angulartics/angulartics.min.js': 'angulartics/dist/angulartics.min.js',
                    'angulartics/angulartics-google-analytics.min.js': 'angulartics-google-analytics/dist/angulartics-google-analytics.min.js'
                }
            },
            prod: {
                options: {
                    destPrefix: 'app/production/assets/js',
                    runBower: false
                },
                files: {
                    'angular/angular.min.js': 'angular/angular.min.js',
                    'angular-route/angular-route.min.js': 'angular-route/angular-route.min.js',
                    'angular-animate/angular-animate.min.js': 'angular-animate/angular-animate.min.js'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: '*',
                    base: 'app/development/',
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

        },
        uglify: {
            options: {
                compress: false,
                mangle: false,
                sourceMap: true
            },
            build: {
                files: {
                    'app/production/assets/js/uglify-all/all.min.js': ['app/development/app.js', 'app/development/assets/js/**/*.js', '!**/angular/*', '!**/angular-route/*', '!**/angular-animate/*']
                }
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true
            },
            prod: {
                files: {
                    'app/production/index.html': 'app/development/index.html',
                    'app/production/views/about/about.html': 'app/development/views/about/about.html',
                    'app/production/views/work/work.html': 'app/development/views/work/work.html',
                    'app/production/views/work/sub/animalfax.html': 'app/development/views/work/sub/animalfax.html',
                    'app/production/views/work/sub/logoji-labs.html': 'app/development/views/work/sub/logoji-labs.html',
                    'app/production/views/work/sub/printaire.html': 'app/development/views/work/sub/printaire.html',
                    'app/production/views/work/sub/spur.html': 'app/development/views/work/sub/spur.html',
                    'app/production/views/contact/contact.html': 'app/development/views/contact/contact.html',
                    'app/production/views/blog/blog.html': 'app/development/views/blog/blog.html'
                }
            }
        },
        copy: {
            prod: {
                cwd: 'app/development/assets',
                src: ['css/*', 'fonts/*', 'img/*'],
                dest: 'app/production/assets',
                expand: true
            }
        },
        compress: {
            prod: {
                options: {
                    mode: 'gzip'
                },
                cwd: 'app/production',
                src: ['assets/css/*.css', 'assets/js/uglify-all/*.js', 'views/**/*.html', 'index.html'],
                dest: 'app/production',
                expand: true,
                ext: '.gz'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['bowercopy:dev', 'connect', 'watch']);
    grunt.registerTask('uglify-all', ['uglify']);
    grunt.registerTask('htmlmin-all', ['htmlmin']);
    grunt.registerTask('compress-all', ['compress']);

    // Automate everything for production
    grunt.registerTask('prod', ['bowercopy:prod', 'copy', 'uglify', 'htmlmin', 'compress']);
};