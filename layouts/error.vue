<template>
  <div>
    <h1 v-if="error.statusCode === 404">Hups! Sivua ei löydy</h1>
    <h1 v-else>Virhe tapahtui: - {{ error.statusCode }} </h1>
    <NuxtLink to="/">Palaa etusivulle</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
