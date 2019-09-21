
# [lxemily.com](http://lxemily.com)

[![Netlify Status](<https://api.netlify.com/api/v1/badges/705ad564-2b66-4068-9018-7e81bc71fd1c/deploy-status>)](<https://app.netlify.com/sites/lxemily/deploys>)

Personal website/portfolio/blog made with [Gatsby](https://gatsbyjs.org) and hosted with [Netlify](https://netlify.com). Check out the blog post I wrote about it [here](https://lxemily.com/gatsby-shenanigans-the-meat-of-this-site).

## Installing & Running

1.  Install Gatsby CLI
    
```
	npm install -g gatsby-cli
```
    
2.  Install dependencies
    
```
	npm install
```
    
3.  Start the development server and have fun
    
```
	gatsby develop
```
4.  Generate a production build
    
```
	gatsby build
```
5.  Preview the site as if deployed
    
```
	gatsby serve
```

## Sections

1.  **Home**
Name, short objective, social media and resume links queried from content.json.
2.  **Projects**
Pinned GitHub repositories queried from GitHub API V4.
3.  **Blog**, which links to the blog page
Blog posts written in Markdown queried using MarkdownRemark. Frontmatter in each post stores post information. Syntax highlighting enabled for code blocks. 
4. **Footer**
Short blurb, this repository, and social media links similarly queried from content.json.

Read more about the features, plugins, and configurations done [here](https://lxemily.com/gatsby-shenanigans-the-meat-of-this-site#Features-and-how-I-got-them).

## Color

Based off Discord dark mode. 

| Colour        | Hex     |
| ------------- | ------- |
| white         | #FFFFFF | 
| grayer        | #99AAB5 | 
| dark          | #2C2F33 | 
| darker        | #23272A | 

Syntax highlighting from [Sarah Drasner's Night Owl VSCode Theme](https://github.com/sdras/night-owl-vscode-theme), referencing [Erik Aybar's article](https://erikaybar.name/wrapping-up-my-gatsby-site-1-dot-0). Read more [here]([https://lxemily.com/gatsby-shenanigans-the-meat-of-this-site#Syntax-highlighting](https://lxemily.com/gatsby-shenanigans-the-meat-of-this-site)).

## Forking this site
This is my baby please link it back to me thank

## Full page preview
![Image](../readme/preview.png?raw=true)