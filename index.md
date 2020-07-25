---
layout: index_layout
---

<div class="category featured">
<h2>Featured posts</h2>
<ul>
{% assign posts = site.tags.spec | reverse %}
{% for post in posts %}
    {% assign id = post.id | split: '/' %}
    <li>
    <a href="{{ post.url }}">
        <div>
        <img src="/imgs/thumbs/{{id[1]}}.webp">
        </div>
        <p title="{{ post.title }}" class="link">{{ post.title }}</p>
        <p class="content"> {{ post.summary }} </p>
        <p class="date">{{ post.date | date: "%Y.%m.%d" }}</p>
    </a>
    </li>
{% endfor %}
</ul>
</div>

<div class="category">
    <h2>Newest posts</h2>
    <ul>
    {% for post in site.posts limit:8 %}
    <li>
    <a href="{{ post.url }}">
        <p title="{{ post.title }}" class="link">{{ post.title }}</p>
        <p class="content"> {{ post.summary }} </p>
        <p class="date">{{ post.date | date: "%Y.%m.%d" }}</p>
    </a>
    </li>
    {% endfor %}
    </ul>
</div>

<div class="category">
    <h2>Soulstorm-related content</h2>
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
</div>

<div class="category">
    <h2>Other Oddworld-related content</h2>
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
</div>

<div class="category">
    <h2>Blog</h2>
    <ul>
    {% for post in site.categories["blog"] %}
    <li>
    <a href="{{ post.url }}">
        <p title="{{ post.title }}" class="link">{{ post.title }}</p>
        <p class="content"> {{ post.summary }} </p>
        <p class="date">{{ post.date | date: "%Y.%m.%d" }}</p>
    </a>
    </li>
    {% endfor %}
    </ul>
</div>

<div class="category">
    <h2>Essays</h2>
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
</div>

<h3 id="rss">The RSS feed can be found <a href="/feed">here.</a></h3>
