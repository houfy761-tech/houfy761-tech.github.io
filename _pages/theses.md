---
layout: page
title: theses
permalink: /theses/
description: Thesis title pages and English abstracts.
nav: true
nav_order: 4
---

<style>
  .thesis-entry {
    margin: 0 0 4rem;
  }

  .thesis-grid {
    display: grid;
    grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
    gap: 2rem;
    align-items: start;
  }

  .thesis-title-page {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.35rem;
    box-shadow: 0 0.25rem 0.8rem rgba(0, 0, 0, 0.12);
  }

  .thesis-meta {
    color: var(--global-text-color-light);
    margin-bottom: 1.25rem;
  }

  .thesis-abstract {
    line-height: 1.7;
    text-align: justify;
  }

  @media (max-width: 768px) {
    .thesis-grid {
      grid-template-columns: 1fr;
    }

    .thesis-title-page {
      max-width: 32rem;
      margin: 0 auto;
    }
  }
</style>

<p>
  Selected undergraduate and master's research, presented with the original
  title pages and English abstracts. Line breaks in the abstracts have been
  normalized for web readability; the wording is preserved from the source
  documents.
</p>

<section class="thesis-entry">
  <h2>Master's Project</h2>
  <h3>Neutron Scattering Instruments for Soft Matter and Biological Physics</h3>
  <p class="thesis-meta">
    M.Sc. in Applied Physics · Department of Physics, City University of Hong Kong · April 2024
  </p>

  <div class="thesis-grid">
    <a href="{{ '/assets/img/theses/msc-thesis-title.png' | relative_url }}" aria-label="Open the master's project title page">
      <img
        class="thesis-title-page"
        src="{{ '/assets/img/theses/msc-thesis-title.png' | relative_url }}"
        alt="Title page of the master's project on neutron scattering instruments"
        loading="lazy"
      >
    </a>

    <div>
      <h4>Abstract</h4>
      <p class="thesis-abstract">
        Soft matter and biomolecules exhibit complex structural and dynamical properties and play a
        major role in a wide range of phenomena and technological applications. Understanding the
        structural and dynamical properties of these matter can enable the development of rapid
        research fields such as drug delivery, biomaterial design and biophysics. Neutron scattering
        is similar to X-ray experiments. However, the properties of neutrons make it possible to
        probe the structure and dynamic properties of microscopic matter with precision and
        sensitivity. This article introduces the principle, instrument performance characteristics
        and applications of neutron scattering technology, and looks forward to the future
        development direction of neutron scattering.
      </p>
    </div>
  </div>
</section>

<section class="thesis-entry">
  <h2>Undergraduate Thesis</h2>
  <h3>Sequence-based Prediction of Antibody Neutralisation Capacity</h3>
  <p class="thesis-meta">
    B.Sc. in Physics · School of Physical Science and Technology, Lanzhou University · 2023
  </p>

  <div class="thesis-grid">
    <a href="{{ '/assets/img/theses/bsc-thesis-title.png' | relative_url }}" aria-label="Open the undergraduate thesis title page">
      <img
        class="thesis-title-page"
        src="{{ '/assets/img/theses/bsc-thesis-title.png' | relative_url }}"
        alt="Title page of the undergraduate thesis on antibody neutralisation prediction"
        loading="lazy"
      >
    </a>

    <div>
      <h4>Abstract</h4>
      <p class="thesis-abstract">
        Antibodies are a special class of secreted proteins produced by B cells. They are diverse
        and participate in most immune responses in living things, playing an irreplaceable role in
        a variety of immune processes such as neutralising pathogens, destroying and destroying
        germs and activating complement. When the body is attacked by a virus, neutralising
        antibodies prevent the virus from attaching to susceptible cells and prevent the virus from
        penetrating into the cell to proliferate. Exploring neutralising antibodies not only helps
        to uncover the neutralising mechanisms of the body's immune system, but also has good
        applications in the development of antibody agents and research reagents. The traditional
        method of studying the neutralising ability of antibodies is to use the enzyme-linked
        adsorption assay in biology. This method is time-consuming and difficult to obtain rapid
        results for large numbers of antibodies. Therefore, the use of machine learning-based
        methods for antibody neutralisation prediction is particularly important and has practical
        applications. In this paper, we use amino acid sequence information, combined with various
        feature extraction algorithms, such as support vector machines, convolutional neural
        networks and graphical convolutional neural networks, to predict the neutralising ability
        of antibodies to foot-and-mouth disease virus based on the neutralising features exhibited
        by the sequences.
      </p>
      <p><strong>Keywords:</strong> Foot-and-mouth disease virus; antibodies; support vector machines; deep learning</p>
    </div>
  </div>
</section>
