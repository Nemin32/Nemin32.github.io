---
layout: index_layout
---


<div class="category">
    <h2>Newest posts</h2>
    
    <ul>
    {% for post in site.posts limit:4 %}
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
