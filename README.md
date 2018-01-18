# Translator QA

Allows the translators team to view homepage mock-ups, edit the contents where necessary, then save the amended html.

## Getting Started

### Basic Requirements
Local Homepage Environment.

### Set Up
* Place "translations-helper.js" in the "LocalHomepage/js" folder.
* Create one folder, named "translate" within the "LocalHomepage/views" folder. This should contain the HTML pages to be checked, named with the country code convention (DE, ES, FR, PL).
* Then place the provided "your-html.html" file within /views.
* Disable Sync Options for BrowserSync. Either via the UI Dashboard later, or edit your default gulp task to turn off Ghost mode.
```
gulp.task('default', function() {
    browserSync.init({
      ghostMode: false,
      server: {
          baseDir: "./"
      }
    });
    gulp.watch('./js/**/*.js').on("change", browserSync.reload);
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./css/**/*.css').on("change", browserSync.reload);
    gulp.watch('**/*.html').on("change", browserSync.reload);
});
```
* In Terminal run "npm run start" as normal.
* You can now send the access URL to the translator team.