<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
</script>
<template>
<LayoutNav />
<LayoutHeader />
<layout-footer />
<router-view></router-view>
</template>