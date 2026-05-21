<template>
  <main class="app-shell app-shell-main">
    <section class="hero main-stage">
      <div>
        <p class="section-label">Main View</p>
        <h1>Space Portfolio</h1>
        <p class="lead">
          Esta zona queda como la vista principal. El contenido editorial y el Astronomy Picture of
          the Day viven ahora en un side panel reutilizable.
        </p>
      </div>
      <aside class="hero-note">
        <p>Uso esperado del layout:</p>
        <ul>
          <li>panel principal para navegación o escena central</li>
          <li>side panel para estado, API data y contexto</li>
          <li>composición simple para reusar luego con router</li>
        </ul>
      </aside>
    </section>

    <SidePanel />
  </main>
</template>

<script setup lang="ts">
import SidePanel from './views/sidePanel.vue'
</script>
