---
title: Home
---
{% extends "layouts/base.njk" %}

{% block content %}
  <h2>Welcome to Figure None</h2>
  <ul>
    {% for post in collections.posts %}
      <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
        <small>— {{ post.date | date("MMMM D, YYYY") }}</small>
      </li>
    {% endfor %}
  </ul>
{% endblock %}