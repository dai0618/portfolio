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
      <div id="Scream Music Composer">
        <h1>Scream Music Composer</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img
              class="smc_image"
              id="smc_image1"
              src="../../assets/smc-image1.png"
            />
          </slide>
          <slide>
            <img class="smc_image" src="../../assets/smc-image2.png" />
          </slide>
        </hooper>
        <div id="content">
          <p>
            <b>Concept</b>
            <br />
            私たちは日々のストレスや葛藤を何かしらの形で昇華させている。ある人は芸術分野で、ある人はスポーツで、叫びたいほどのストレスや葛藤を何かしらの形で別の物としてアウトプットしている。私の場合は音楽で、ピアノを弾くことによって、そういった感情を昇華させている。
            そのような、感情の昇華を多くの人に体験してもらいたいと思い、研究の一貫として
            「Scream Music Composer」という作品の制作を始めた。
            <br />
            本作品の主な概要としては、ユーザーが叫び声をweb上で録音し、録音した音声をFFT解析(高速フーリエ変換)を用いて解析することでその人の叫び声から楽曲を生成するというものだ。具体的には、firebaseでHTMLファイルを動かし、そこで録音と音声のダウンロードを行う。その後、ダウンロードした音声をPythonでFFT解析を行う。
            解析した結果、波長と周波数(今後はそれ以外のパラメータも増やす予定)を取得し、その値によって、生成される曲の長さやBPMが変化する。
            楽曲生成はLSTMの三層構造を用いて機械学習を行い、教師データは著作権がないクラシック音楽を使用した。
            以上の工程をすべてweb上で動かせるようにし、多くの人が自分の叫び声を入力するだけで曲を生成できるアプリケーションの開発を現在目指している。
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
      <div id="Scream Music Composer">
        <h1>Scream Music Composer</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img
              class="smc_image"
              id="smc_image1"
              src="../../assets/smc-image1.png"
            />
          </slide>
          <slide>
            <img class="smc_image" src="../../assets/smc-image2.png" />
          </slide>
        </hooper>
        <div id="content">
          <p>
            <b>Concept</b>
            <br />
            私たちは日々のストレスや葛藤を何かしらの形で昇華させている。ある人は芸術分野で、ある人はスポーツで、叫びたいほどのストレスや葛藤を何かしらの形で別の物としてアウトプットしている。私の場合は音楽で、ピアノを弾くことによって、そういった感情を昇華させている。
            そのような、感情の昇華を多くの人に体験してもらいたいと思い、研究の一貫として
            「Scream Music Composer」という作品の制作を始めた。
            <br />
            本作品の主な概要としては、ユーザーが叫び声をweb上で録音し、録音した音声をFFT解析(高速フーリエ変換)を用いて解析することでその人の叫び声から楽曲を生成するというものだ。具体的には、firebaseでHTMLファイルを動かし、そこで録音と音声のダウンロードを行う。その後、ダウンロードした音声をPythonでFFT解析を行う。
            解析した結果、波長と周波数(今後はそれ以外のパラメータも増やす予定)を取得し、その値によって、生成される曲の長さやBPMが変化する。
            楽曲生成はLSTMの三層構造を用いて機械学習を行い、教師データは著作権がないクラシック音楽を使用した。
            以上の工程をすべてweb上で動かせるようにし、多くの人が自分の叫び声を入力するだけで曲を生成できるアプリケーションの開発を現在目指している。
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

  .smc_image {
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

  .smc_image {
    width: 100%;
  }

  .link:hover {
    opacity: 0.5;
  }
}
</style>
