---
layout: index_layout
---

<div class="featured">
<h2>Featured posts</h2>
<div id="featured_posts">
{% assign side = "history,guide,foundarchives,miodd,timeline,mapinterview,pgyft,swinterview,unreleased" | split: ',' %}
{% assign posts = site.tags.spec %}

<ul id="main">
{% assign sides = "history,swinterview,mapinterview" | split: ',' %}
{% for side in sides %}
{% assign post = posts | where:"slug", side | first %}
{% include list.html post=post %}
{% endfor %}
</ul>


<h2>Featured Non-Oddwords Oddworld Content</h2>
<div class="buttons">
  <a href="/game">
    <div class="imgbg">
      <img src="/imgs/thumbs/escaperf.webp">
    </div>
    <div class="description">
      <span class="title">Escape from RuptureFarms 1029</span>
      <span class="desc">A Text-Adventure Game by Nemin</span>
    </div>
  </a>

  <a href="https://aliveteam.github.io/">
    <div class="imgbg">
      <img src="/imgs/thumbs/relive.webp">
    </div>
    <div class="description">
      <span class="title">R.E.L.I.V.E.</span>
      <span class="desc">Abe's Oddysee and Exoddus on modern systems</span>
    </div>
  </a>

  <a href="https://magogonthemarch.wordpress.com">
    <div class="imgbg">
      <img src="/imgs/thumbs/mom.webp">
    </div>
    <div class="description">
      <span class="title">The Magog on The March</span>
      <span class="desc">An Independent Source of Everything Oddworld</span>
    </div>
  </a>

  <a href="https://oddworldlibrary.net">
    <div class="imgbg">
      <img src="/imgs/thumbs/tol.webp">
    </div>
    <div class="description">
      <span class="title">Oddworld Library</span>
      <span class="desc">A comprehensive collection of all things Oddworld</span>
    </div>
  </a>
</div>


<h2>Resources</h2>

<ul class="sidebar">
{% assign sides = "guide,timeline,foundarchives,pgyft" | split: ',' %}
{% for side in sides %}
{% assign post = posts | where:"slug", side | first %}
{% assign id = post.id | split: '/' %}
{% include list.html post=post %}
{% endfor %}
</ul>

<h2>Cut content</h2>

<ul class="sidebar">
{% assign sides = "miodd,abesquest,unreleased,squeek" | split: ',' %}
{% for side in sides %}
{% assign post = posts | where:"slug", side | first %}
{% assign id = post.id | split: '/' %}
{% include list.html post=post %}
{% endfor %}
</ul>

<!--
<ul id="footer">
{% assign sides = "swinterview,unreleased,mapinterview" | split: ',' %}
{% for side in sides %}
{% assign post = posts | where:"slug", side | first %}
{% include list.html post=post %}
{% endfor %}
</ul>
-->

</div>
</div>

<div class="category">
<h2>Newest posts</h2>
<ul>
  {% for post in site.posts limit:4 %} {% include elem.html post=post %} {% endfor %}
</ul>
</div>

<div class="category">
<h2 id="statistics">Fandom-related Statistics</h2>
<ul>
  {% for post in site.categories["statistics"] %} {% include elem.html post=post %} {% endfor %}
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

<h3>Archive</h3>
<p>Below you can find a list of posts that largely concern pre-release speculation from my part and so provide little relevant information these days.</p>
<details>
<summary>Reveal list</summary>
<ul>
  {% for post in site.categories["ssarchive"] %} {% include elem.html post=post %} {% endfor %}
</ul>
</details>
</div>

<div class="category">
<h2 id="blog">Blog</h2>
<ul>
  {% for post in site.categories["blog"] %} {% include elem.html post=post %} {% endfor %}
</ul>
</div>

<h3 id="rss">The RSS feed can be found <a href="/feed">here.</a></h3>
