<template>
  <main class="app-shell">
    <header class="topbar">
      <p class="eyebrow">Portfolio Interface</p>
      <p class="status">Vue 3 + TypeScript starter</p>
    </header>

    <section class="hero">
      <div>
        <p class="section-label">Overview</p>
        <h1>Space Portfolio</h1>
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
        <p class="section-label">NASA</p>
        <h2>Astronomy Picture of the Day</h2>
      </div>

      <p v-if="loadingApod">Cargando APOD...</p>

      <p v-else-if="apodError">
        {{ apodError }}
      </p>

      <article v-else-if="apod" class="module-card">
        <div class="module-card-header">
          <div>
            <p class="section-label">{{ apod.date }}</p>
            <h3>{{ apod.title }}</h3>
          </div>
          <span class="tag">{{ apod.media_type }}</span>
        </div>

        <p>{{ apod.explanation }}</p>

        <img
          v-if="apod.media_type === 'image'"
          :src="apod.url"
          :alt="apod.title"
          style="width: 100%; margin-top: 1rem; border-radius: 12px;"
        />
      </article>
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

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { modules } from './data/modules'

const apod = ref<any>(null)
const loadingApod = ref(false)
const apodError = ref<string | null>(null)

async function getApod() {
  loadingApod.value = true
  apodError.value = null

  try {
    const response = await fetch('/api/nasa/apod')

    if (!response.ok) {
      throw new Error('No se pudo obtener APOD')
    }

    apod.value = await response.json()
  } catch (error) {
    apodError.value = 'Error al llamar a la API'
    console.error(error)
  } finally {
    loadingApod.value = false
  }
}

onMounted(() => {
  getApod()
})
</script>
