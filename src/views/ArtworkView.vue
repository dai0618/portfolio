<template>
  <div id="artwork_container">
    <div v-if="$mq === 'pc'" id="pc">
      <div class="header-title">
        <router-link to="/" class="link">Dai Takanashi</router-link>
      </div>
      <div id="nav">
        <router-link to="/artwork" class="link">Artwork</router-link> |
        <a href="../#about" v-scroll-to="'#about'" class="link">About</a> |
        <a href="../#contact" v-scroll-to="'#contact'" class="link">Contact</a>
      </div>
      <div id="Artwork">
        <h1>Artwork</h1>
        <router-link to="/vfr" class="link">
          <img class="artwork_image" src="../assets/vfr-image1.png" />
        </router-link>
        <router-link to="/smc" class="link">
          <img class="artwork_image" src="../assets/smc-image1.png" />
        </router-link>
        <router-link to="/cl" class="link">
          <img class="artwork_image" src="../assets/cl-image1.png" />
        </router-link>
        <router-link to="/xmc" class="link">
          <img class="artwork_image" src="../assets/xmc-image1.png" />
        </router-link>
      </div>
    </div>
    <div v-if="$mq === 'sp'" id="sp">
      <div class="header-title">
        <router-link to="/" class="link">Dai Takanashi</router-link>
      </div>
      <div id="nav">
        <router-link to="/artwork" class="link">Artwork</router-link> |
        <a href="../#about" v-scroll-to="'#about'" class="link">About</a> |
        <a href="../#contact" v-scroll-to="'#contact'" class="link">Contact</a>
      </div>
      <div id="Artwork">
        <h1>Artwork</h1>
        <router-link to="/vfr" class="link">
          <img class="artwork_image" src="../assets/vfr-image1.png" />
        </router-link>
        <router-link to="/smc" class="link">
          <img class="artwork_image" src="../assets/smc-image1.png" />
        </router-link>
        <router-link to="/cl" class="link">
          <img class="artwork_image" src="../assets/cl-image1.png" />
        </router-link>
        <router-link to="/xmc" class="link">
          <img class="artwork_image" src="../assets/xmc-image1.png" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#pc {
  padding: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

  .artwork_image {
    padding: 5px;
    width: 24%;
  }

  .artwork_image:hover {
    opacity: 0.5;
  }

  .link:hover {
    opacity: 0.5;
  }
}

#sp {
  padding: 5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

  .hooper {
    height: 100%;
    text-align: center;
  }

  h1 {
    font-size: 25px;
  }

  b {
    font-size: 15px;
  }

  .artwork_image {
    width: 100%;
  }

  .sns_image {
    border-radius: 15px;
    padding: 10px;
    width: 30px;
  }

  .image:hover {
    opacity: 0.5;
  }

  .sns_image:hover {
    opacity: 0.5;
  }

  .link:hover {
    opacity: 0.5;
  }
}
</style>
