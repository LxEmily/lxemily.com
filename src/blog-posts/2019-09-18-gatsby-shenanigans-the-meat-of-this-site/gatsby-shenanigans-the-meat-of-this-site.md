---
slug: gatsby-shenanigans-the-meat-of-this-site
date: 2019-09-18
title: "Gatsby Shenanigans: The Meat of this Site"
published: false
---

Welcome to [lxemily.com](http://lxemily.com). It's made with Gatsby and lots of experimenting. This is the first blog post I've written in over 7 years - I'll probably need to edit out any weird bits later.

## A little background...

I used to blog and customized the look of the blog often. It was how I got kind of enthusiastic about design, the web, and ultimately tech. 

I still like the idea of that. I had An Idea of what it'll look like, but not quite sure how to pull it off. Then I got more ideas from tech twitter. 

## Why [Gatsby](https://www.gatsbyjs.org/)?

Or why static sites at all? 

1. It's fast. ([Una's Tumblr vs GitHub pages speed comparison](https://github.com/una/una.github.io))
2. I'd own my own content. ([Here's Favio's argument for that](https://flaviocopes.com/build-your-platform))
3. I've never learned React and this seems like a cool way to start. 
4. Gatsby is recent and has an active community. And plenty of starters and plugins and tutorials to get started. 

## Gatsby Starter

I started with [Gatby's default starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/) and customized it into what you're seeing now. 

A starter basically a working site without your content. Check the [docs](https://www.gatsbyjs.org/docs/) to get started.

## Features and how I got them

Style wise, lots of Flexbox. [CSS-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) has a concise reference. I used [Tachyons](http://tachyons.io/) and [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/) to style components directly.

GraphQL is very powerful and confusing at first. It's used to query blog posts, site content, and GitHub info on this site. Head to `yourdevelopmentserver/___graphql` or [GitHub's explorer](https://developer.github.com/v4/explorer/) to explore queries for your Gatsby project or GitHub API. 

### Projects

Install [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/) to pull my repository info through [GitHub GraphQL API v4](https://developer.github.com/v4/). 

### Blogging in Markdown

Use [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem) to let Gatsby know where your blog posts are stored, then [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) to get the frontmatter in your posts. I referenced this [course's](https://www.udemy.com/complete-react-developer-zero-to-mastery/) Gatsby section while it was free, but here's [an article](https://www.creativebloq.com/how-to/build-a-blogging-site-with-gatsby) and [some videos](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby) that are similar.

If you want custom urls for posts, look into [gatsby-plugin-slug](https://www.gatsbyjs.org/packages/gatsby-plugin-slug/).

### Site content from another JSON file

[gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem) to let Gatsby know where your content files are stored.

### Syntax Highlighting

Intall [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/), then import [Sarah Drasner's Night Owl VSCode Theme](https://github.com/sdras/night-owl-vscode-theme) in your post template. To use language specific syntax highlighting in markdown, put `language-javascript` at the top of your code block. I figured this out with [Erik Aybar's article](https://erikaybar.name/wrapping-up-my-gatsby-site-1-dot-0) and source code.

For inline code, set `inlineCodeMarker` to a symbol like this in your config file.
```
inlineCodeMarker: `±`, 
```
To use in markdown like `css±.some-class { background-color: red }`, add that symbol like this.
```
css±.some-class { background-color: red }
``` 

### Open all external links in a new tab

Install [gatsby-remark-external-links](https://www.gatsbyjs.org/packages/gatsby-remark-external-links/) and set the options to 
```json
resolve: "gatsby-remark-external-links",
options: {
    target: "_blank",
    rel: "nofollow noopener noreferrer"
}
```
### Fancy script to populate your post's frontmatter automatically

Or in Erik Aybar's words, ease of writing. I referenced this [article](https://joelhooks.com/a-handy-npm-script-for-creating-a-new-gatsby-blog-post). 

Input 
```js
npm run new-post "Gatsby Shenanigans: The Meat of this Website"
```
Output
```md
---
slug: gatsby-shenanigans-the-meat-of-this-site
date: 2019-09-18
title: "Gatsby Shenanigans: The Meat of this Site"
published: false
---
```
## Future Features

I'll probably update this post or post an update after implementing these.

### Tags

- Add tags to my posts
- Filter featured posts through tags
- Filter posts on blog page
- [This](https://erikaybar.name/adding-tags-to-a-gatsby-blog) seems like a good resource

### SEO, site metadata, robots.txt

These aren't exactly set up yet... Though it seems like a matter of configuring some Gatsby plugins.

## Shoutout

To these amazing sites and resources I can't get out of my head and for publicizing their source. 

- [Erik Aybar](https://erikaybar.name)
- [Brittany Chiang](http://brittanychiang.com)
- [Flavio Copes](https://flaviocopes.com)
- [gatsby-portfolio-dev](https://github.com/smakosh/gatsby-portfolio-dev)
- [Jia Hao](https://jiahao.codes)
- [Una](https://una.im/)