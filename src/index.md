---
title: Home
---

# Welcome to Figure None

This is the beginning of your clean, CMS-free Eleventy site.

## Recent Posts

{% for post in collections.posts | slice(0, 3) %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.date | date("yyyy-MM-dd") }}
{% endfor %}

[View all posts](/posts)