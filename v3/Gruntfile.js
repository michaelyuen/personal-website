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
                    'js/angular/angular.min.js': 'angular/angular.min.js',
                    'js/angular-route/angular-route.min.js': 'angular-route/angular-route.min.js',
                    'js/angular-animate/angular-animate.min.js': 'angular-animate/angular-animate.min.js',
                    'js/angulartics/angulartics.min.js': 'angulartics/dist/angulartics.min.js',
                    'js/angulartics/angulartics-google-analytics.min.js': 'angulartics-google-analytics/dist/angulartics-google-analytics.min.js'
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

        },
        uglify: {
            options: {
                compress: false,
                mangle: false,
                sourceMap: true
            },
            build: {
                files: {
                    'app/assets/js/uglify-all/all.min.js': ['app/app.js', 'app/assets/js/**/*.js', '!**/angular/*', '!**/angular-route/*', '!**/angular-animate/*']
                }
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true
            },
            build: {
                files: {
                    'app/index.min.html': 'app/index.html',
                    'app/views/about/about.min.html': 'app/views/about/about.html',
                    'app/views/work/work.min.html': 'app/views/work/work.html',
                    'app/views/work/sub/animalfax.min.html': 'app/views/work/sub/animalfax.html',
                    'app/views/work/sub/logoji-labs.min.html': 'app/views/work/sub/logoji-labs.html',
                    'app/views/work/sub/printaire.min.html': 'app/views/work/sub/printaire.html',
                    'app/views/work/sub/spur.min.html': 'app/views/work/sub/spur.html',
                    'app/views/contact/contact.min.html': 'app/views/contact/contact.html',
                    'app/views/blog/blog.min.html': 'app/views/blog/blog.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['bowercopy', 'connect', 'watch']);
    grunt.registerTask('bower', ['bowercopy']);
    grunt.registerTask('uglify-all', ['uglify']);
    grunt.registerTask('htmlmin-all', ['htmlmin']);
};