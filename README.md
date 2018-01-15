# Translator QA

Allows the translators team to view homepage mock-ups, edit the contents where necessary, then save the amended html.

## Getting Started

### Basic Requirements
Local Homepage Environment (GULP Project) using the data-include method.

### Set Up
* Place "translations-helper.js" in the "LocalHomepage/js" folder.
* Create one folder, named "translate" within the "LocalHomepage/views" folder. This should contain the HTML pages to be checked, named with the country code convention (DE, ES, FR, PL).
* Then place the provided "your-html.html" file within /views.
* In Terminal run "npm start" as normal.
* Disable Sync Options for BrowserSync. Click the UI access URL, once GULP/BrowserSync is up and running, go to "Sync Options" & click "Disable all".

You can now send the access URL to the translator team.


### Lots of room for improvement;
- [ ] Remove the need to download and email.
- [ ] Better process for amending SVG text.
- [ ] Warning if territory not provided.
- [ ] Store territory as global var, so the downloaded file is named correctly.
- [ ] Changing menu list items, updates link.