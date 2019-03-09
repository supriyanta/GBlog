# GBlog
A backend implementation of a blog app where you can get real-time updates from story of a particular topic when someone publishes a new story.

# User Guide

### How to Setup

Clone the repository.

`git clone https://github.com/supriyanta/GBlog.git`

Change directry to the folder.

`cd GBlog/`

And run npm install to install the dependencies.

```
 npm install
```

Change the MongoDB url to user local mongodb database url in *GBlog/keys.js*.

example:
```
module.exports = {
        mongoURI: "mongodb://localhost:27017/admin"
}
```

### How to Use

Start the mongodb server in your local machine

`sudo service mongod start`

Open the terminal.

start the npm server 

`npm start`

And use [localhost:4000](https://) to browse.

### Mutation


