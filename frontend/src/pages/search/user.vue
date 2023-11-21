<script setup></script>
<template>
 <p>user page</p>
 <button @click="$router.push({path : '/'})">root</button>
 <button @click="$router.push({name : 'board'})">board</button>
 <button @click="$router.push({name : 'board-detail'})">board detail</button>
 <p>Dynamic test</p>
 <button @click="$router.push({path : '/asdasdasda'})">all?</button>
 <button @click="$router.push({path : '/search/dynamic'})">search dynamic index</button>
 <button @click="$router.push({path : '/search/dynamic/ffff'})">search dynamic dynamic-path</button>

 <p>RouterLink test</p>
 <RouterLink :to="{name : 'board-detail'}">board detail </RouterLink>
 <RouterLink :to="{name : 'board'}">board index </RouterLink>
 <RouterLink to="/board/123123">board dynamic id</RouterLink>


</template>
<style scoped></style>
