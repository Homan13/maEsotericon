# gatsby-starter-grayscale ![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiTG9QV1hZL1lmUHpVdFI3UUJ0K0JoTHZXNUd3Vm1ycmJkUFFCV0g0b2xyaFd1YlpaWXo5SkRWaGVibXEvVGNLZGpaWmYwWFhUU1JtUks5TnRiVmNtQTdrPSIsIml2UGFyYW1ldGVyU3BlYyI6IkxRRmdlS3ZobEJxYjdWVWIiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master) ![Live audit of MAE website](https://github.com/Homan13/maEsotericon/workflows/Live%20audit%20of%20MAE%20website/badge.svg)

Gatsby.js V2 starter template based on Grayscale by startbootstrap

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

Check online preview [here](https://anubhavsrivastava.github.io/gatsby-starter-grayscale/)

## Screenshot

![Screenshot](./src/assets/img/demo.png)

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

And run from your CLI:

```sh
gatsby new <site-name> https://github.com/anubhavsrivastava/gatsby-starter-grayscale
```

Then you can run it by:

```sh
cd gatsby-example-site
npm install
gatsby develop
```

### Personalization

Edit `config.js` to put up your details

```javascript
module.exports = {
  siteTitle: 'Gatsby Starter grayscale', // <title>
  ...
  heading: 'Anubhav Srivastava',
  subHeading: 'Full time Web Developer. Part time Open source contributor  ',

  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/anubhavsrivastava',
    }
    ...
  ],
};

```

### Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://theanubhav.com/somePath/`. If you are hosting it as root site, i.e, `https://theanubhav.com/` , remove the pathPrefix configuration.

### Contribution

Suggestions and PRs are welcome!

Please create issue or open PR request for contribution.

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.
