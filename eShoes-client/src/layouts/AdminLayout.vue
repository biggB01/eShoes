<template>
    <q-layout>
    <q-header elevated>
    <q-toolbar>
    <q-btn
    flat
    dense
    round
    @click="leftDrawerOpen = !leftDrawerOpen"
    icon="menu"
    aria-label="Menu"
    />
    <q-toolbar-title>
        eShoes
 </q-toolbar-title>
 </q-toolbar>
 </q-header>
 <q-drawer
 v-model="leftDrawerOpen"
 show-if-above
 bordered
 content-class="bg-grey-2"
 >
 <q-list>
 <q-item-label header>Menu</q-item-label>
 <q-item
 clickable
 to="/Sensors"
 >
 <q-item-section avatar>
 <q-icon name="matApps" />
 </q-item-section>
 <q-item-section>
 <q-item-label>Sensors</q-item-label>
 </q-item-section>
 </q-item>
 <q-item
 clickable
 @click="home"
 >
 <q-item-section avatar>
 <q-icon name="home" />
 </q-item-section>
 <q-item-section>
 <q-item-label>Home</q-item-label>
 </q-item-section>
 </q-item>
 <q-separator />
 <q-item
 clickable
 @click="logout"
 >
 <q-item-section avatar>
 <q-icon name="power_settings_new" />
 </q-item-section>
 <q-item-section>
 <q-item-label>LogOut</q-item-label>
 </q-item-section>
 </q-item>
 </q-list>
 </q-drawer>
 <q-page-container>
 <router-view />
 </q-page-container>
 </q-layout>
</template>
<script>
import { ref } from 'vue'
export default {
 name: 'AdminLayout',
 setup () {
 const leftDrawerOpen = ref(false)
 const logout = () => {
 this.$auth.signOut()
 .then(() => {
 this.$router.push('/')
 })
 }
 const home = () => {
 this.$router.push('/')
 }
 return {
 leftDrawerOpen,
 logout,
 home
 }
 }
}
</script>
