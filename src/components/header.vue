<template>
    <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="/">TrackYou</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/add">Add Weight</b-nav-item>
        <b-nav-item href="/measure">Enter your Details</b-nav-item>
        <b-nav-item href="/show">Show Results</b-nav-item>    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {

}
</script>
