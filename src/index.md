---
title: Home
date: 2025-07-05
layout: default
---

# fig._

><hr>

><br>
Life is an endless effort<br>
of conscious change            >¡<

><img src="/assets/media/rainbow-whisp.jpeg" alt="" width="333" />

><br>
*Where the beginning<br>
Reaches completion<br>
In recursive<br>
Absolution*<br>
<br>
Θ Φ Ψ<br>
<br>

><hr>

## Recent Posts

{% for post in collections.posts | slice: 0, 3 %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.date | date: "%B %e, %Y" }}
{% endfor %}

[View all posts](/posts)