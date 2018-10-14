# A short project on Angular 6, RxJs, Angular Material Design and SCSS

A short project on Angular 6, RxJs, Angular Material Design and SCSS

## Requirement

Create an application that does the following:

1. Periodically (every 10 seconds) poll for new posts from this API https://hn.algolia.com/api/v1/search_by_date?tags=story via a GET request.

2. Display the title, url, created_at, and author of each post in a table.

3. Upon selecting a row in the table, a modal should appear containing the raw JSON data
   of post. This modal should support dismissal by clicking outside of the modal as well as
   upon clicking a close button.

4. Support the ability to filter/search the table by title.

## Project Details

### Status

All requirements have been implementted successfully.

### How to run and build project

Use below commands
```
// clone project repository
git clone git@github.com:arun9483/a-short-project-on-angular6-rxjs-mat-scss.git

// swith to a-short-project-on-angular6-rxjs-mat-scss directory and install npm packages
cd a-short-project-on-angular6-rxjs-mat-scss
npm install

// run in dev mode
npm run start

// create production ready code.
// content of dist/a-short-project-on-angular6-rxjs-mat-scss will be deployed in production server
npm run build
```

### Technology

Angular 6, SCSS, Angular material design, RxJs, Angular CLI, TypeScript

### Improvement Scope / Proposed feature addition

1. Loader.

2. Sort based on created_at, title and author.

3. Pagination on table items.

4. User interface.

5. caching
