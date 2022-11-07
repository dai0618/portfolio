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
      <div id="Music Curtain, Act.1: DJ">
        <h1>Music Curtain, Act.1: DJ</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img class="xmc_image" src="../../assets/xmc-image1.png" />
          </slide>
        </hooper>
        <div id="content_xmc">
          <p>
            <b>Concept</b>
            <br />
            本作品は、多様性の加速の一方であらゆる面・軸・次元で分断も進んだ世界において、
            そのような世界においても人々はひとつになり得るのではないかという蓋然性を音楽とDJを通して表現するものである。
            <br />
            <br />
            物体検知モデルのYOLOを用いて世界の都市の映像から人の数とその増減を取得し、
            そこで獲得した数値をGoogle
            Magentaの音楽生成モデルMusicVAEのパラメータに反映しながら三楽器
            (Drum, Bass, Melody) のMIDI生成を行う。
            こうして複数国分生成されたMIDIを、AbletonLive上にてそれぞれの国に対応した民族楽器で再生し、それを鑑賞者が映像と共にミックスしていく。
            多種多様な都市とそこにいる人間が現代テクノロジーによって音楽へと昇華され、鑑賞者によって作品として交ざり合う。
            人工知能がかける”音楽のカーテン”。それを開いた先に人間は、どんな多様性を見出すのだろうか。
            <a class="link" href="https://www.youtube.com/watch?v=fQJDBQdHA4M">
              [Movie]
            </a>
          </p>
        </div>
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
      <div id="Music Curtain, Act.1: DJ">
        <h1>Music Curtain, Act.1: DJ</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img class="xmc_image" src="../../assets/xmc-image1.png" />
          </slide>
        </hooper>
        <div id="content_xmc">
          <p>
            <b>Concept</b>
            <br />
            本作品は、多様性の加速の一方であらゆる面・軸・次元で分断も進んだ世界において、
            そのような世界においても人々はひとつになり得るのではないかという蓋然性を音楽とDJを通して表現するものである。
            <br />
            <br />
            物体検知モデルのYOLOを用いて世界の都市の映像から人の数とその増減を取得し、
            そこで獲得した数値をGoogle
            Magentaの音楽生成モデルMusicVAEのパラメータに反映しながら三楽器
            (Drum, Bass, Melody) のMIDI生成を行う。
            こうして複数国分生成されたMIDIを、AbletonLive上にてそれぞれの国に対応した民族楽器で再生し、それを鑑賞者が映像と共にミックスしていく。
            多種多様な都市とそこにいる人間が現代テクノロジーによって音楽へと昇華され、鑑賞者によって作品として交ざり合う。
            人工知能がかける”音楽のカーテン”。それを開いた先に人間は、どんな多様性を見出すのだろうか。
            <a class="link" href="https://www.youtube.com/watch?v=fQJDBQdHA4M">
              [Movie]
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    sp: 959,
    pc: 960,
  },
  defaultBreakpoint: "sp",
});

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        autoPlay: true,
        wheelControl: false,
        playSpeed: 7000,
      },
    };
  },
};
</script>

<style lang="scss">
#pc {
  padding: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  a {
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }

  b {
    font-size: 20px;
    line-height: 200%;
  }

  .hooper {
    height: 100%;
    text-align: center;
  }

  .xmc_image {
    width: 80%;
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

  a {
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }

  b {
    font-size: 20px;
    line-height: 200%;
  }

  .hooper {
    height: 100%;
    text-align: center;
  }

  .xmc_image {
    width: 100%;
  }

  .link:hover {
    opacity: 0.5;
  }
}
</style>
