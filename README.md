# pressforward.github.io

## Prerequisites
Node.js as specified in .nvmrc

## Install dependencies
```
npm install
```

## Serve the site
```
npx @11ty/eleventy --serve
```

## Writing blog posts

### Excerpt
To create an excerpt, use the `---` excerpt separator in your post:
```
---
title: "Post title"
---

This excerpt is part of the post.

---

The post continues here.
```

To create an excerpt that is not part of the post, use the `excerpt` key in the front matter:
```
---
title: "Post title"
excerpt: "This excerpt is not part of the post."
---

The post starts here.
```

### Headline hierarchy
In order to keep the outline of a post semantic in terms of accessibility, no heading level should be omitted. In case a visually smaller heading is wanted you can use heading classes at the end of the line:

```
## Looks like heading 3 {.h3}
```

### Reference a footnote
To reference footnotes, use pairs of `ref *` and `#footnote-*` tags:
```
Text with reference.{% ref 1 %}

The footnote. {#footnote-1}
```

### Responsive image
Use a custom liquid tag to embed images with multiple resolutions (specify `@2x` version only). Optional attributes are `alt`, `width`, `height`, and `className`. The `"xs"`, `"sm"`, or `"lg"` sizing class can be used to adjust the width of the image.
```
{% image src: "/path/to/image@2x.png" alt: "Description" className: "sm" %}
```
### Image link
To wrap the image in a link, simply add a `href` attribute to the custom image tag:
```
{% image src: "/path/to/image@2x.png" href: "/path/to/image@full.png" %}
```

### Figure
Use a custom liquid tag to create figures with captions (specify `@2x` version for responsive images). You can use Markdown, Liquid, and HTML in the captions:
```
{% figure src: "/path/to/image@2x.png" caption: "*Example*" %}
```

## Deployment
Push to GitHub and your changes are live.
