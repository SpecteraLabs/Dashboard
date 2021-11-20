<template>
  <Navbar />
  <div>
		<router-view />
	</div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>