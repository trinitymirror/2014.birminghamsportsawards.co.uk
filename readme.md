# Birmingham Sports Awards Website 2014
[birminghamsportsawards.co.uk/2014/](http://www.birminghamsportsawards.co.uk/2014/)

## Description



## Dependencies

- NodeJS
  - Grunt
  - LESS CSS
- Ruby
  - Jekyll

## Instructions

### Setup Development Area

```
npm install
gem install jekyll
```

### Run Development Server

```
grunt
```

Visit the url [localhost:3000](http://localhost:3000/) to view the site.

## Documentation

During the Alpha/Beta stages, due to constant changes, documentation will be mainly written in-line. With a dedicated section being created at the first major release.

### File Structure

```
|- _scripts              –  contains useful scripts to help with
|                           development of this project
|- _site                 –  compiled development files (not committed)
|- src
|  |- _includes          –  partial snippets of code to be used
|  |                        in layouts
|  |- _layouts           –  page layouts
|  |- _posts             -  markdown files of news posts
|  |- media              -
|  |- static             -
|  |- {**/*.txt,html,md} -  files for website
|- _config.yml           -  Jekyll config file
|- gruntfile.js
|- package.json
|- readme.md
```

## License

The source is opened for educational purposes. No rights are assigned to any downloads or forks.

## Copyright

Unless otherwise stated all code and content remain copyright &copy; Trinity Mirror. All rights reserved.
