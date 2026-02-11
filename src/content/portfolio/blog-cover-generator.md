---
title: "Dynamic blog cover image generator"
description: ""
tags: ["code"]
pubDate: "Jan 28 2026"
heroImage: "/blog/generator/cover.jpg"
postOrder: 5
---

## Intro

This piece of code was made to help the design team so they wouldn't waste time making social share images for every blog image, and speed up blog post creation.

## Libraries used

We used Vercel's library satori that renders an SVG using HTML markup, very useful! After that we convert the image to PNG and sent it through an express miniserver.

## Design

We designed the api in this format 

```
/endpoint?type={post_type}&id={id}&size={size}
```

Where:
* `post_type` was used for blog posts, press releases and case studies.
* `id` is the id of the blog post, to be able to fetch details quickly
* `size` is either `cover`, `social`, or `square`

## Roadblocks

### Color matching

One of the hardest issues was matching the color properly: We calculated the average color of the cover image of the blog post: and then choose from a palette of brand colors. Sounds simple right? I tried calculating the "difference" between colors using some existing libraries. But there was an issue: bright colors and dark colors don't mix! If you try to calculate the "closest" color blindly you'll get some mathematically correct, but non sensical answers.

### The solution

I calculated the average lightness of our brand colors, and then the cover image darkened/lightened the image to that same approximate brightness. Then we got _much_ more accurate results!

### Caching

We also had a question: Do we build a complex Redis cache, don't cache at all, or what? For speed of development, and considering content _might_ change (a blog post title, or something), we decided a simple solution: an in-memory cache that will cache generated images. Since we didn't expect a lot of high traffic (we only get hit when someone shares the link somewhere), we expected this to be a good enough solution at the moment.

## The results

![Sample image](/blog/generator/image.png)

![Sample image](/blog/generator/image-2.png)

![Sample image](/blog/generator/image-3.png)