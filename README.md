# Mid-Atlantic Esotericon

Repository for the homepage of the Mid-Atlantic Esotericon, the premier Masonic Esoteric Conference. The site is built with Gatsby, using the Grayscale starter template edited to fit our needs as an organization.

## Build Badges

![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiTG9QV1hZL1lmUHpVdFI3UUJ0K0JoTHZXNUd3Vm1ycmJkUFFCV0g0b2xyaFd1YlpaWXo5SkRWaGVibXEvVGNLZGpaWmYwWFhUU1JtUks5TnRiVmNtQTdrPSIsIml2UGFyYW1ldGVyU3BlYyI6IkxRRmdlS3ZobEJxYjdWVWIiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master) ![Live audit of MAE website](https://github.com/Homan13/maEsotericon/workflows/Live%20audit%20of%20MAE%20website/badge.svg)

## Getting Started

This README will help the user install a local copy of the MAE site on a development machine, as well as configure the site for deployment in a production environment. For help setting up your local dev environment see the 'Prerequisites' and 'Installing' section. For deploying into the production environment, see the 'Deployment' section of the README.

### Prerequisites

To get a development environment up and running on a local workstation, you will need the following tools installed; Node, NPM or Yarn (this walk-through will use NPM), Git and the Gatsby CLI. This guide is assuming the user is using a Debian/Ubuntu based development environment, if you are using something different please see the installation instructions maintained by [Gatsby](https://gatsbyjs.org/tutorial/part-zero/).

#### Installing Node.js

For this case we're using NVM to install and manage Node, to start out make sure your workstation is up to date;

```sh
sudo apt update
sudo apt -y upgrade
```

If your workstation doesn't have curl installed, install it now;

`sudo apt-get install -y curl`

Once curl is installed, download and install nvm;

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash`

To confirm it has properly downloaded and installed run the following command;

`nvm --version`

If properly installed, the current version of nvm should be shown on the screen.

##### Set Default Node Version

Install and set the version of Node.js you want to run on your workstation;

```sh
nvm install 11.14.0
nvm use 11.14.0
```

To confirm it has been properly installed, run the following commands;

```sh
node --version
npm --version
```

If properly installed you should see version numbers respectively for Node and NPM.

#### Install Git

To install Git, run the following commands;

```sh
sudo apt-get update
sudo apt-get install -y git
```

To confirm it has been properly instlled, run the following command;

`git --version`

If properly installed you should see the version number. Next configure your git client;

```sh
git config --global user.name "Your Name"
git config --global user.email "yourname@example.com"
```

#### Install the Gatsby CLI

Install the Gatsby CLI on your workstation;

`npm install -g gatsby-cli`

Confirm Gatsby has been properly installed;

`gatsby --version`

If Gatsby has properly installed, you should see the installed version number on your screen.

### Installing

This section will get you up and running with the MAE sourcecode on your development workstation so you can start developing locally.

#### Clone MAE Repository to Your Local Workstation

Clone the repository onto your local development workstation by running the following command;

`git clone https://github.com/Homan13/maEsotericon.git`

CD into the code directory;

`cd maEsotericon`

#### Install Dependencies

Install dependencies for the application, this will read from the package.json file and install all necesary dependencies for the MAE website to properly run;

`npm install`

#### Start Development Server

Start the development server by running the following command;

`gatsby develop`

This will start up the Gatsby development server, if everything starts up properly you should be able to see the site by opening a web browser and navigating to http://localhost:8000/. You can work on the application using your IDE of choice, as you save your work the Gatsby development server will automatically update the site as you go.

## Running the tests

Currently we are only running Lighthouse tests on the site, with the plan being to add additional tests over the coming year. These tests are run automatically on every push or merge into Master using GitHub Actions. 

### Break down into end to end tests

#### Lighthouse Audit

Lighthouse is a Google developed tool that can be run against any website and audits it for "performance, accessibility, progressive web apps, Search Engine Optimization (SEO) and more". We use the [GitHub Action for Lighthouse Auditing](https://github.com/jakejarvis/lighthouse-action), developed by Jake Jarvis.

The Lighthouse audit config is found in the .github/workflows directory, currently under the workflow.yml file.

```yml
name: Live audit of MAE website
on: push

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
    - name: Live audit URL
      uses: jakejarvis/lighthouse-action@master
      with:
        url: 'https://home.maesotericon.com'
    - name: Upload results as an artifact
      uses: actions/upload-artifact@master
      with:
        name: report
        path: './report'
```

The test configuration is a relatively straight forward YAML file. In it we name it, and we define that we want it to run on every push (the action). Under the jobs section is where we define the actions included in our audit, the audit itself, and what we want to do with the results. All this run using containers, which in this case is run on the latest Ubuntu offering. We use Jake Jarvis' Lighthouse action and run it on the main URL of the website. Next we use the Upload Artifact action to then upload the generated report back into our repository.

### And coding style tests

Coming Soon

## Deployment

The site is hosted in Amazon Web Services (AWS) using S3 to host the source code, fronted by CloudFront with Route 53 providing DNS services. Code is deployed into S3 using AWS CodeBuild, with the final push done using the gatsby-plugin-s3 plugin. All deployments are started upon any push or merge into the Master branch of the repository.

### Buildspec

The buildspec file located in the document root of this repository tells CodeBuild what to do in a series of commands to build and deploy the code.

```yml
version: 0.1
phases:    
    install:        
        commands:            
            - 'touch .npmignore'            
            - 'npm install -g gatsby'    
    pre_build:        
        commands:            
            - 'npm install'    
    build:        
        commands:            
            - 'npm run build'    
    post_build:        
        commands:            
            - 'npm run deploy'
artifacts:    
    base-directory: public    
    files:        
        - '**/*'    
    discard-paths: yes
```

This build is broken up into four phases. In install a .npmignore file is created and Gatsby is installed globally on the build container. In the pre_build phase all our project dependencies are installed. In the build phase the project is built, with the artifacts that will be deployed to S3 stored in the /public directory. The last step deploys the code into the hosting S3 bucket. The artifacts section of the file just notes the directory our build artifacts are located in for the deploy stage, in this case /public and tells the build step to deploy all files recursively in that directory. The discard-paths discards the path to files in the final build artifact. For example, if a file had the following path; /com/mycompany/app/HelloWorld.java, by specifying that the build discard paths that file becomes HelloWorld.java. For more on CodeBuild buildspec files, and how they can be configured see their [documentation](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html).

### Gatsby S3 Plugin

This plugin deploys our built source code to its destination S3 bucket. The plugin is installed using npm, which installs it as a dependency in your package.json file;

`npm i gatsby-plugin-s3`

Next, configure your gatsby-config.js file so Gatsby knows you're using the plugin to deploy your code, and configure it with the bucket to deploy to;

```js
   {
     resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'maesotericon.com',
      },
   },
```

Finally, add the deployment script to your package.json file;

```json
"scripts": {
    ...
    "deploy": "gatsby-plugin-s3 deploy",
}
```
For more information on configuring the S3 plugin for Gatsby, you can check out their official [documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-s3/).

## Built With

* [Gatsby](https://www.gatsbyjs.org/) - React based web framework
* [Grayscale Template](https://anubhavsrivastava.github.io/gatsby-starter-grayscale/) - Starter Template
* [Amazon S3](https://aws.amazon.com/s3/) - Site hosting
* [Amazon CloudFront](https://aws.amazon.com/cloudfront/) - Content Delivery Network (CDN)
* [Amazon Route 53](https://aws.amazon.com/route53/) - Domain Name System (DNS) service
* [Amazon CodeBuild](https://aws.amazon.com/codebuild/) - Managed build service
* [Lighthouse Action](https://github.com/jakejarvis/lighthouse-action) - Lighthouse auditing

## Contributing

Contributions in the way of pull requests are always welcome! Repository should be updated shortly with contribution documentation.

## Versioning

This project follows semantic versioning, [SemVer](http://semver.org/).

## Authors

* **Kevin Homan**

## License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

Site will be updated with a license file soon

## Acknowledgments

* The Gatsby team
* Anubhav Srivastava - Developer of the Grayscale starter template
* Joe, Jason and Jon - My colleagues at the Mid-Atlantic Esotericon
* Our attendees and speakers who make the Mid-Atlantic Esotericon the success it is
