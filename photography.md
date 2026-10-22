---
layout: default
title: "Through the Lens"
description: Photographs from the trail, the water, and the moments in between.
slug: photography
---

<div class="prose" markdown="1">

<p class="lede">I chase light because the world looks honest when you frame it carefully.</p>

</div>

<div class="gallery" data-gallery>
  {% for item in site.data.gallery %}
    {% assign thumb = item.thumb | default: item.image %}
    <article
      class="photo-card"
      data-gallery-item
      data-index="{{ forloop.index0 }}"
      {% if item.category %}data-category="{{ item.category | xml_escape }}"{% endif %}
      {% if item.year %}data-year="{{ item.year }}"{% endif %}
    >
      <a
        class="photo-card__link"
        href="{{ item.image | relative_url }}"
        data-full="{{ item.image | relative_url }}"
        data-title="{{ item.title | xml_escape }}"
        data-caption="{{ item.caption | xml_escape }}"
      >
        <img
          class="photo-card__img"
          src="{{ thumb | relative_url }}"
          alt="{{ item.title | xml_escape }}"
          width="800"
          height="560"
          loading="lazy"
          decoding="async"
        />
      </a>
      <div class="photo-card__meta">
        <h2 class="photo-card__title">{{ item.title }}</h2>
        <p class="photo-card__cap">{{ item.caption }}</p>
      </div>
    </article>
  {% endfor %}
</div>

<dialog class="lightbox" data-lightbox aria-label="Photo viewer">
  <div class="lightbox__frame">
    <button type="button" class="lightbox__close" data-lightbox-close aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <button type="button" class="lightbox__nav lightbox__nav--prev" data-lightbox-prev aria-label="Previous photo">
      <span aria-hidden="true">&#8249;</span>
    </button>
    <figure class="lightbox__figure">
      <img class="lightbox__img" data-lightbox-img src="" alt="" />
      <figcaption class="lightbox__caption">
        <span class="lightbox__title" data-lightbox-title></span>
        <span class="lightbox__text" data-lightbox-caption></span>
      </figcaption>
    </figure>
    <button type="button" class="lightbox__nav lightbox__nav--next" data-lightbox-next aria-label="Next photo">
      <span aria-hidden="true">&#8250;</span>
    </button>
  </div>
</dialog>
