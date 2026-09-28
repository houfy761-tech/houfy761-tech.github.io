---
layout: page
title: theses
permalink: /theses/
description: Thesis title pages and English abstracts.
nav: true
nav_order: 4
---

<style>
  .thesis-jump-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin: 1.5rem 0 3rem;
  }

  .thesis-jump-link {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 1.1rem 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    color: var(--global-text-color);
    text-decoration: none;
    transition:
      border-color 0.2s ease,
      transform 0.2s ease;
  }

  .thesis-jump-link:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
    text-decoration: none;
    transform: translateY(-2px);
  }

  .thesis-jump-link span {
    color: var(--global-text-color-light);
    font-size: 0.95rem;
  }

  .thesis-document {
    display: none;
    margin-bottom: 5rem;
    scroll-margin-top: 5rem;
  }

  .thesis-document:target {
    display: block;
  }

  .thesis-page-stack {
    display: grid;
    gap: 2rem;
    max-width: 52rem;
    margin: 1.5rem auto 0;
  }

  .thesis-page {
    margin: 0;
  }

  .thesis-page a {
    display: block;
  }

  .thesis-page-image {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.35rem;
    box-shadow: 0 0.25rem 0.8rem rgba(0, 0, 0, 0.12);
  }

  .thesis-page figcaption {
    margin-top: 0.6rem;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    .thesis-jump-links {
      grid-template-columns: 1fr;
    }

    .thesis-page-stack {
      gap: 1.5rem;
    }
  }
</style>

<nav class="thesis-jump-links" aria-label="Thesis sections">
  <a class="thesis-jump-link" href="#undergraduate-thesis">
    <strong>Undergraduate Thesis</strong>
    <span>Sequence-based Prediction of Antibody Neutralisation Capacity</span>
  </a>
  <a class="thesis-jump-link" href="#masters-thesis">
    <strong>Master's Thesis</strong>
    <span>Neutron Scattering Instruments for Soft Matter and Biological Physics</span>
  </a>
</nav>

<section id="undergraduate-thesis" class="thesis-document">
  <h2>Undergraduate Thesis</h2>
  <h3>Sequence-based Prediction of Antibody Neutralisation Capacity</h3>

  <div class="thesis-page-stack">
    <figure class="thesis-page">
      <a href="{{ '/assets/img/theses/bsc-thesis-title.png' | relative_url }}" aria-label="Open the undergraduate thesis title page">
        <img
          class="thesis-page-image"
          src="{{ '/assets/img/theses/bsc-thesis-title.png' | relative_url }}"
          alt="Title page of the undergraduate thesis"
        >
      </a>
      <figcaption>Title Page</figcaption>
    </figure>

    <figure class="thesis-page">
      <a href="{{ '/assets/img/theses/bsc-thesis-abstract.png' | relative_url }}" aria-label="Open the undergraduate thesis English abstract page">
        <img
          class="thesis-page-image"
          src="{{ '/assets/img/theses/bsc-thesis-abstract.png' | relative_url }}"
          alt="English abstract page of the undergraduate thesis"
          loading="lazy"
        >
      </a>
      <figcaption>English Abstract</figcaption>
    </figure>

  </div>
</section>

<section id="masters-thesis" class="thesis-document">
  <h2>Master's Thesis</h2>
  <h3>Neutron Scattering Instruments for Soft Matter and Biological Physics</h3>

  <div class="thesis-page-stack">
    <figure class="thesis-page">
      <a href="{{ '/assets/img/theses/msc-thesis-title.png' | relative_url }}" aria-label="Open the first title page of the master's thesis">
        <img
          class="thesis-page-image"
          src="{{ '/assets/img/theses/msc-thesis-title.png' | relative_url }}"
          alt="First title page of the master's thesis"
          loading="lazy"
        >
      </a>
      <figcaption>Title Page 1</figcaption>
    </figure>

    <figure class="thesis-page">
      <a href="{{ '/assets/img/theses/msc-thesis-page-2.png' | relative_url }}" aria-label="Open the second title page of the master's thesis">
        <img
          class="thesis-page-image"
          src="{{ '/assets/img/theses/msc-thesis-page-2.png' | relative_url }}"
          alt="Second title page of the master's thesis"
          loading="lazy"
        >
      </a>
      <figcaption>Title Page 2</figcaption>
    </figure>

    <figure class="thesis-page">
      <a href="{{ '/assets/img/theses/msc-thesis-abstract.png' | relative_url }}" aria-label="Open the master's thesis English abstract page">
        <img
          class="thesis-page-image"
          src="{{ '/assets/img/theses/msc-thesis-abstract.png' | relative_url }}"
          alt="English abstract page of the master's thesis"
          loading="lazy"
        >
      </a>
      <figcaption>English Abstract</figcaption>
    </figure>

  </div>
</section>
