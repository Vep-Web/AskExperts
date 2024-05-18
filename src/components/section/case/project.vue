<style scoped></style>

<template>
  <div class="project__container container">
    <div class="project__preview">
      <picture>
        <source srcset="@/img/project1.webp" type="image/webp" />
        <img
          class="project__img project__img--radius"
          src="@/img/project1.jpg"
          alt="Preview page project"
          width=""
          height=""
        />
      </picture>
      <div class="project__description">
        <ul class="project__list list-reset">
          <li class="project__item">
            <h3 class="project__title t-20 text-color">Case Name</h3>
            <span class="project__span t-16 text-color"
              >Taxes & Efficiency</span
            >
          </li>
          <li class="project__item">
            <h3 class="project__title t-20 text-color">Category</h3>
            <span class="project__span t-16 text-color">Business</span>
          </li>
          <li class="project__item">
            <h3 class="project__title t-20 text-color">Date</h3>
            <span class="project__span t-16 text-color"
              >27th September 2022</span
            >
          </li>
        </ul>
        <router-link
          to="error/"
          class="project__link link-reset link link-yellow"
          >Live Preview</router-link
        >
      </div>
    </div>
    <div class="project__content">
      <h1 class="project__title t-40">Project Overview</h1>
      <p class="project__text t-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident.
      </p>
      <ul class="project__info">
        <li class="project__item tsmal-16">
          It brings the right people together with all the right information and
          tools to get work done
        </li>
        <li class="project__item tsmal-16">
          We provide operational efficiency, data security, and flexible scale
        </li>
        <li class="project__item tsmal-16">
          Your best work, together in one package that works seamlessly from
          your computer
        </li>
        <li class="project__item tsmal-16">
          Delivers the tools you need to save time Improve field performance
          always
        </li>
      </ul>

      <h2 class="project__title project__title--mar t-30">Storyboard</h2>
      <p class="project__text project__text--mar t-16">
        Completely synergize resource taxing relationships via premier niche
        markets. Professionally cultivate one-to-one customer service with
        robust ideas. Dynamically innovate resource-leveling customer service
        for state of the art customer service. Objectively innovate empowered
        manufactured products whereas parallel platforms. Holistically
        predominate extensible testing procedures for reliable supply chains.
      </p>
      <p class="project__text project__text--mar t-16">
        Proactively envisioned multimedia based expertise and cross-media growth
        strategies. Seamlessly visualize quality intellectual capital without
        superior collaboration and idea-sharing. Holistically pontificate
        installed base portals after maintainable products completely pursue
        scalable customer service.
      </p>

      <picture>
        <source srcset="@/img/project2.webp" type="image/webp" />
        <img
          class="project__img project__img--centr"
          src="@/img/project2.jpg"
          alt="Preview page project"
          width="710"
        />
      </picture>

      <h2 class="project__title project__title--mar t-30">Project result</h2>
      <p class="project__text project__text--mar t-16">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </p>
      <p class="project__text project__text--mar t-16">
        Bring to the table win-win survival strategies to ensure proactive
        domination. At the end of the day, going forward, a new normal that has
        evolved from generation X is on the runway heading towards a streamlined
        cloud solution. User generated content in real-time will have multiple
        touchpoints for offshoring.
      </p>
    </div>
  </div>
</template>

<script></script>
