---
title: Blog
layout: default
---

# Blog

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.date | date: "%B %e, %Y" }}
{% endfor %}