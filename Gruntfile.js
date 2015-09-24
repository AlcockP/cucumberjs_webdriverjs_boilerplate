module.exports = function(grunt) {
 
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-cucumber');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cucumberjs: {
      src: 'cucumbers/features/',
      options: {
        steps: 'cucumbers/steps/'
      }
    }
  });
 
  grunt.registerTask(
    'e2e', 
    [
      'selenium_start',
      'cucumberjs',
      'selenium_stop',
    ]);
 
};