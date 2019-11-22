---
layout: index_layout
---

# Oddwords
## An Oddworld fansite by Nemin

{:.centered}
New to the series? [Start here!](/guide.html)

### Soulstorm-related content
<ul>
{% for post in site.categories["soulstorm"] %}
<li>
  <a href="{{ post.url }}">
    <p title="{{ post.title }}" class="link">{{ post.title }}</p>
    <p class="content"> {{ post.summary }} </p>
    <p class="date">{{ post.date | date: "%Y.%m.%d" }}</p>
  </a>
</li>
{% endfor %}
</ul>

### Other Oddworld-related content:
<ul>
{% for post in site.categories["other"] %}
<li>
  <a href="{{ post.url }}">
    <p title="{{ post.title }}" class="link">{{ post.title }}</p>
    <p class="content"> {{ post.summary }} </p>
    <p class="date">{{ post.date | date: "%Y.%m.%d" }}</p>
  </a>
</li>
{% endfor %}
</ul>

### Essays
<ul>
{% for post in site.categories["essay"] %}
<li>
  <a href="{{ post.url }}">
    <p title="{{ post.title }}" class="link">{{ post.title }}</p>
    <p class="content"> {{ post.summary }} </p>
    <p class="date">{{ post.date | date: "%Y.%m.%d" }}</p>
  </a>
</li>
{% endfor %}
</ul>
