---
title: Blog
date: 2025-07-05
layout: default
---

# Posts

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.date | date: "%B %e, %Y" }}
{% endfor %}

[← Back to Home](/)