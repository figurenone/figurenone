---
title: Home
date: 2025-07-05
layout: default
---

# fig._

><hr>

>Life is an endless effort<br>
>of conscious change&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>¡<

><img src="/assets/media/rainbow-whisp.jpeg" alt="" width="333" />

>*Where the beginning<br>
>Reaches completion<br>
>In recursive<br>
>Absolution*<br>
<br>

>Θ Φ Ψ<br>
<br>

><hr>
<br>

## Recent Posts

{% for post in collections.posts | slice: 0, 3 %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.date | date: "%B %e, %Y" }}
{% endfor %}

<br>

><hr>
<br>

[View all posts](/posts)