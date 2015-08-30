module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'app/assets/css/variables.css': 'app/assets/less/variables.less',
                    'app/assets/css/main.css': 'app/assets/less/main.less'
                }
            }
        },
        watch: {
            styles: {
                files: [
                    'app/assets/less/variables.less',
                    'app/assets/less/main.less'
                ],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};