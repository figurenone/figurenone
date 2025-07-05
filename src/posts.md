---
title: Blog
---

# Blog

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.date | date: "yyyy-MM-dd" }}
{% endfor %}