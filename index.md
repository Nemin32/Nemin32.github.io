---
layout: index_layout
---

<div class="featured">
<h2>Featured posts</h2>
<div id="featured_posts">
{% assign side = "guide,foundarchives,miodd,timeline,mapinterview,pgyft,swinterview,unreleased" | split: ',' %}
{% assign posts = site.tags.spec %}

<ul id="main">
{% assign sides = "guide,timeline" | split: ',' %}
{% for side in sides %}
{% assign post = posts | where:"slug", side | first %}
{% include list.html post=post %}
{% endfor %}
</ul>

<ul id="sidebar">
{% assign sides = "foundarchives,miodd,squeek,pgyft" | split: ',' %}
{% for side in sides %}
{% assign post = posts | where:"slug", side | first %}
{% assign id = post.id | split: '/' %}
{% include list.html post=post %}
{% endfor %}
</ul>

<ul id="footer">
{% assign sides = "swinterview,unreleased,mapinterview" | split: ',' %}
{% for side in sides %}
{% assign post = posts | where:"slug", side | first %}
{% include list.html post=post %}
{% endfor %}
</ul>

</div>
</div>

<div class="category">
<h2>Newest posts</h2>
<ul>
  {% for post in site.posts limit:8 %} {% include elem.html post=post %} {% endfor %}
</ul>
</div>

<div class="category">
<h2 id="owc">General Oddworld content</h2>
<ul>
  {% for post in site.categories["other"] %} {% include elem.html post=post %} {% endfor %}
</ul>
</div>

<div class="category">
<h2 id="ssc">Soulstorm-related content</h2>
<ul>
  {% for post in site.categories["soulstorm"] %} {% include elem.html post=post %} {% endfor %}
</ul>
</div>

<div class="category">
<h2 id="blog">Blog</h2>
<ul>
  {% for post in site.categories["blog"] %} {% include elem.html post=post %} {% endfor %}
</ul>
</div>

<div class="category">
<h2 id="essays">Essays</h2>
<ul>
  {% for post in site.categories["essay"] %} {% include elem.html post=post %} {% endfor %}
</ul>
</div>

<h3 id="rss">The RSS feed can be found <a href="/feed">here.</a></h3>
