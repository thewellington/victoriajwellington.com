---
layout: default
---

<div class="hero" markdown="0">
  <p class="hero__kicker">Portfolio</p>
  <h1 class="hero__name">Victoria J. Wellington</h1>
  <p class="hero__tag">student · photographer · wilderness explorer</p>
  <p class="lede" style="max-width: 36rem; margin-left: auto; margin-right: auto; text-align: left">
    This site is my college portfolio: academics, time outside the classroom,
    and a gallery of the world as I see it through a lens.
  </p>
</div>

<div class="home-cards" markdown="0">
  <div class="card card--academic">
    <h2>Academic</h2>
    <p>
      Coursework, questions that keep me up at night, and the subjects I want to keep studying.
    </p>
    <a href="{{ '/academic/' | relative_url }}">Read more →</a>
  </div>
  <div class="card card--extracurricular card--tilt">
    <h2>Extracurriculars</h2>
    <p>
      Camp Wabun, the Vashon Island Rowing Club, clarinet, and the communities that teach me what textbooks cannot.
    </p>
    <ul class="card-gallery-thumbs">
      <li>
        <a
          class="card-gallery-thumbs__link"
          href="{{ '/extracurricular/' | relative_url }}"
          aria-label="Wabun canoe stern paddler — extracurriculars"
        >
          <img
            class="card-gallery-thumbs__img"
            src="{{ '/assets/images/home/wabun/thumbs/stern-paddler.jpg' | relative_url }}"
            alt="Stern paddler in a red Wabun canoe"
            width="400"
            height="280"
            loading="lazy"
            decoding="async"
          />
        </a>
      </li>
      <li>
        <a
          class="card-gallery-thumbs__link"
          href="{{ '/extracurricular/' | relative_url }}"
          aria-label="Four with cox from above — extracurriculars"
        >
          <img
            class="card-gallery-thumbs__img"
            src="{{ '/assets/images/home/rowing/thumbs/overhead-four.jpg' | relative_url }}"
            alt="Coxed four seen from above"
            width="400"
            height="280"
            loading="lazy"
            decoding="async"
          />
        </a>
      </li>
      <li>
        <a
          class="card-gallery-thumbs__link"
          href="{{ '/extracurricular/' | relative_url }}"
          aria-label="Sunrise shell on Quartermaster Harbor — extracurriculars"
        >
          <img
            class="card-gallery-thumbs__img"
            src="{{ '/assets/images/home/rowing/thumbs/sunrise-shell.jpg' | relative_url }}"
            alt="Rowing shell silhouetted at sunrise"
            width="400"
            height="280"
            loading="lazy"
            decoding="async"
          />
        </a>
      </li>
      <li>
        <a
          class="card-gallery-thumbs__link"
          href="{{ '/extracurricular/' | relative_url }}"
          aria-label="Quad under the bridge — extracurriculars"
        >
          <img
            class="card-gallery-thumbs__img"
            src="{{ '/assets/images/home/rowing/thumbs/under-bridge.jpg' | relative_url }}"
            alt="Quad rowing under a bridge"
            width="400"
            height="280"
            loading="lazy"
            decoding="async"
          />
        </a>
      </li>
    </ul>
    <a href="{{ '/extracurricular/' | relative_url }}">Read more →</a>
  </div>
  <div class="card card--gallery">
    <h2>Through the Lens</h2>
    <p>
      Frames from the trail, the water, and the quiet in between.
    </p>
    {% assign home_gallery_titles = "Iris|Shallow water|Avis" | split: "|" %}
    <ul class="card-gallery-thumbs">
      {% for want in home_gallery_titles %}
        {% assign shot = false %}
        {% for item in site.data.gallery %}
          {% if item.title == want %}
            {% assign shot = item %}
          {% endif %}
        {% endfor %}
        {% if shot %}
          {% assign thumb = shot.thumb | default: shot.image %}
          <li>
            <a
              class="card-gallery-thumbs__link"
              href="{{ '/photography/' | relative_url }}"
              aria-label="{{ shot.title | xml_escape }} — view gallery"
            >
              <img
                class="card-gallery-thumbs__img"
                src="{{ thumb | relative_url }}"
                alt="{{ shot.title | xml_escape }}"
                width="400"
                height="280"
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
    <a href="{{ '/photography/' | relative_url }}">View gallery →</a>
  </div>
</div>
