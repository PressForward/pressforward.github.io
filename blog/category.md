---
layout: default
class: blog
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - post
permalink: /category/{{ tag | slugify }}/
---

<div class="container-fluid">
  <h1>Blog</h1>
  <nav class="category-nav">
    <ul>
      <li><a href="/blog/">All Posts</a></li>
      {% assign categories = collections | getAllTags | filterTags %}

      {%- for category in categories -%}
        <li><a href="/category/{{ category | slugify }}" {% if category == tag %}class="selected"{% endif %}>{{ category }}</a></li>
      {%- endfor -%}
    </ul>
  </nav>
  {%- for post in collections[ tag ] reversed -%}
    {%- include "partials/post-preview" -%}
  {%- endfor -%}
</div>
