<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <a class="navbar-brand" href="#">
                    <img src="./assets/logo.png" width="35" height="35" alt="">
                </a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/getter">Getter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mutation-set-data">Mutation Set Data</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/mutation-set-data-user">Mutation Set Data User</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mutation-clear-data">Mutation Clear Data</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
