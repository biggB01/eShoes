<template>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-grey-8 text-white">
        <q-toolbar>
          <div class="flex flex-center">
            <span>e-Shoes</span>
          </div>
          <q-btn @click="$router.push({name:'home'})" flat dense icon="apps" aria-label="Products"/>
        </q-toolbar>
      </q-header>
      <router-view/>
    </q-layout>
  </template>
<script>
  export default {
    name: 'DefaultLayout'
  }
  </script>
