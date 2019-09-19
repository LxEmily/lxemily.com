// https://joelhooks.com/a-handy-npm-script-for-creating-a-new-gatsby-blog-post

// plugins
const fs = require('fs')
const slugify = require('slug')
const dateFns = require('date-fns')

// frontmatter
const title = process.argv[2]
if (!title) {
  throw 'a title is required!'
}
const slug = slugify(title.toLowerCase())
const date = dateFns.format(new Date(), 'yyyy-MM-dd')

// where blog posts are stored
const dir = `./src/blog-posts/${date}-${slug}`

// make new folder for post, check if folder (post) already exists
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
} else {
  throw 'That post already exists!'
}

// add frontmatter to post
fs.writeFileSync(
  `${dir}/${slug}.md`,
  `---
slug: ${slug}
date: ${date}
title: "${title}"
published: false
---`,
  function(err) {
    if (err) {
      return console.log(err)
    }
    console.log(`${title} was created!`)
  },
)
