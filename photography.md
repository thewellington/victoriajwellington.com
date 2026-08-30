---
layout: default
title: "Through the Lens"
description: A small gallery of photographs — replace images with your own.
---

<div class="prose" markdown="1">

<p class="lede">I chase light because the world looks honest when you frame it carefully.</p>

Add a sentence here about *what* you photograph&mdash;people, landscapes, architecture, early morning on the water&mdash;and *why* a camera is part of your story.

{% comment %} Gallery paused
**How to add images:** put files in `assets/images/gallery/`, then edit `_data/gallery.yml` to set `image`, `title`, and `caption` for each piece.
{% endcomment %}

</div>

{% comment %} Gallery paused
<div class="gallery">
  {% for item in site.data.gallery %}
    <article class="photo-card">
      <a
        class="photo-card__link"
        href="{{ item.image | relative_url }}"
        target="_blank"
        rel="noopener"
      >
        <img
          class="photo-card__img"
          src="{{ item.image | relative_url }}"
          alt="{{ item.title | xml_escape }}"
          width="800"
          height="560"
          loading="lazy"
        />
      </a>
      <div class="photo-card__meta">
        <h2 class="photo-card__title">{{ item.title }}</h2>
        <p class="photo-card__cap">{{ item.caption }}</p>
      </div>
    </article>
  {% endfor %}
</div>
{% endcomment %}
