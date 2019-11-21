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
  <p class="link"><a href="{{ post.url  }}">{{ post.title }}</a></p>
  <p class="date">{{ post.date | date: "%Y.%m.%d" }}</p>
  <p class="content"> {{ post.summary }} </p>
</li>
{% endfor %}
</ul>


### Essays
<ul>
{% for post in site.categories["essay"] %}
<li>
  <p class="link"><a href="{{ post.url  }}">{{ post.title }}</a></p>
  <p class="date">{{ post.date | date: "%Y.%m.%d" }}</p>
  <p class="content"> {{ post.summary }} </p>
</li>
{% endfor %}
</ul>


### Other Oddworld-related content:
<ul>
{% for post in site.categories["other"] %}
<li>
  <p class="link"><a href="{{ post.url  }}">{{ post.title }}</a></p>
  <p class="date">{{ post.date | date: "%Y.%m.%d" }}</p>
  <p class="content"> {{ post.summary }} </p>
</li>
{% endfor %}
</ul>
