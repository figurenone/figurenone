---
title: Home
date: 2025-07-05
layout: default
---

# fig._

Where the beginning<br>
reaches for completion<br>
in recursive absolution

## Recent Posts

{% for post in collections.posts | slice: 0, 3 %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.date | date: "%B %e, %Y" }}
{% endfor %}

[View all posts](/posts)
[← Back to Home](/)