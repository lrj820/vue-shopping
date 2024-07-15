<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutSticky from './components/LayoutSticky.vue';
</script>
<template>
<LayoutNav />
<LayoutHeader />
<layout-footer />
<LayoutSticky />
<router-view></router-view>
</template>