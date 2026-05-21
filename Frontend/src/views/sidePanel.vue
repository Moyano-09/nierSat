<template>
  <aside class="side-panel">
    <section class="module-section side-panel-section">
      <div class="section-heading">
        <h3>Telemetry Feed</h3>
      </div>
    </section>

    <section class="module-section side-panel-section">
      <div class="section-heading">
        <p class="section-label">NASA</p>
        <h3>Astronomy Picture of the Day</h3>
      </div>
  
      <p v-if="loadingApod">Cargando APOD...</p>
  
      <p v-else-if="apodError">{{ apodError }}</p>
  
      <article v-else-if="apod" class="module-card side-panel-card">
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
          class="side-panel-image"
        />
      </article>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { modules } from '../data/modules'

type ApodResponse = {
  date: string
  explanation: string
  media_type: string
  title: string
  url: string
}

const apod = ref<ApodResponse | null>(null)
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
