<script setup lang="ts">
import { modules } from './data/modules'
</script>

<template>
  <main class="app-shell">
    <header class="topbar">
      <p class="eyebrow">YoRHa Portfolio Interface</p>
      <p class="status">Vue 3 + TypeScript starter</p>
    </header>

    <section class="hero">
      <div>
        <p class="section-label">Overview</p>
        <h1>Nier Automata Space Portfolio</h1>
        <p class="lead">
          This frontend is intentionally small. The goal is to give you a calm starting point for
          building a portfolio that can later consume NASA, ESA, and other space APIs.
        </p>
      </div>
      <aside class="hero-note">
        <p>Keep the first version simple:</p>
        <ul>
          <li>one app shell</li>
          <li>one data source at a time</li>
          <li>one visual language across the project</li>
        </ul>
      </aside>
    </section>

    <section class="module-section">
      <div class="section-heading">
        <p class="section-label">Canvas</p>
        <h2>Planned Modules</h2>
      </div>

      <div class="module-grid">
        <article
          v-for="module in modules"
          :key="module.title"
          class="module-card"
          :data-size="module.size"
        >
          <div class="module-card-header">
            <div>
              <p class="section-label">Module</p>
              <h3>{{ module.title }}</h3>
            </div>
            <span class="tag">{{ module.source }}</span>
          </div>
          <p>{{ module.description }}</p>
        </article>
      </div>
    </section>
  </main>
</template>
