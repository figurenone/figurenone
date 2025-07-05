---
title: Home
date: 2025-07-05
layout: default
---

# Welcome to Figure None

This is the beginning of your clean, CMS-free Eleventy site.

## Recent Posts

{% for post in collections.posts | slice: 0, 3 %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.date | date: "%B %e, %Y" }}
{% endfor %}

[View all posts](/posts)