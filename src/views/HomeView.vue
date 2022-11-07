<template>
  <div id="home">
    <div v-if="$mq === 'pc'" id="pc">
      <div id="profile_container">
        <div class="header-title">
          <router-link to="/" class="link">Dai Takanashi</router-link>
        </div>
        <div id="nav">
          <router-link to="/artwork" class="link">Artwork</router-link> |
          <a href="#about" class="link">About</a> |
          <a href="#contact" class="link">Contact</a>
        </div>
        <div id="Artwork">
          <h1>Artwork</h1>
          <router-link to="/artwork" class="link">
            <hooper :settings="hooperSettings" class="hooper">
              <slide>
                <img class="image" src="../assets/vfr-image1.png" />
              </slide>
              <slide>
                <img class="image" src="../assets/smc-image1.png" />
              </slide>
              <slide>
                <img class="image" src="../assets/cl-image1.png" />
              </slide>
              <slide>
                <img class="image" src="../assets/xmc-image1.png" />
              </slide>
            </hooper>
          </router-link>
        </div>
        <div id="about">
          <h1>About</h1>
          <p>
            <b>髙梨大/Dai Takanashi</b>
            <br />
            2001年、東京都生まれ。
            <br />
            慶應義塾大学・環境情報学部3年
            <br />
            徳井直生研究室[Computational Creativity Lab]
            、古谷知之研究室に所属。
            <br />
            幼少期からピアノを習い、音楽に興味を持ち始める。
            <br />
            大学では、プログラミングや機械学習を用いた新しい音楽表現を日々模索している。
          </p>
          <p>
            <b>Exhibition & Society</b>
            <br />
            [2022.2.28]
            音源分離技術を用いた、観客からのリクエスト楽曲を即興でリミックスするシステムの制作
            <a
              class="link"
              href="https://www.interaction-ipsj.org/2022/catalog/#intaractive1_demo"
            >
              [About]
            </a>
            <a
              class="link"
              href="http://www.interaction-ipsj.org/proceedings/2022/data/pdf/1D10.pdf"
            >
              [Paper]
            </a>
            <a class="link" href="https://www.youtube.com/watch?v=wS9SHdIG2a8">
              [Movie]
            </a>
            <br />
            [2022.6.25 - 2022.9.11] Variable Flavor Remix
            <a
              class="link"
              href="https://www.ntticc.or.jp/ja/archive/works/variable-flavor-remix/"
            >
              [Link]
            </a>
          </p>
          <p>
            <b>Work Experience</b>
            <br />
            [2022.2.10 - Current]
            株式会社dual&Co.にてフルスタックエンジニアとして勤務。
            <a class="link" href="https://dual.tokyo/">[Link]</a>
          </p>
        </div>
        <div id="contact">
          <h1 id="contact">Contact</h1>
          <p>
            お問い合わせは、SNSかメールにてお願いいたします。
            <br />
            <a
              class="link"
              href="https://www.instagram.com/0618_dai/?r=nametag"
            >
              <img class="sns_image" src="../assets/SNS1.png" />
            </a>
            <a class="link" href="https://twitter.com/ut42uzelwwkuau2">
              <img class="sns_image" src="../assets/SNS2.png" />
            </a>
            <br />
            dai0618taka[at]gmail.com
          </p>
        </div>
      </div>
    </div>
    <div v-if="$mq === 'sp'" id="sp">
      <div id="profile_container">
        <div class="header-title">
          <a href="/" class="link">Dai Takanashi</a>
        </div>
        <div id="nav">
          <router-link to="/artwork" class="link">Artwork</router-link> |
          <a href="#about" class="link">About</a> |
          <a href="#contact" class="link">Contact</a>
        </div>
        <div id="Artwork">
          <h1>Artwork</h1>
          <router-link to="/artwork" class="link">
            <hooper :settings="hooperSettings" class="hooper">
              <slide>
                <img class="image" src="../assets/vfr-image1.png" />
              </slide>
              <slide>
                <img class="image" src="../assets/smc-image1.png" />
              </slide>
              <slide>
                <img class="image" src="../assets/cl-image1.png" />
              </slide>
              <slide>
                <img class="image" src="../assets/xmc-image1.png" />
              </slide>
            </hooper>
          </router-link>
        </div>
        <div id="about">
          <h1>About</h1>
          <p>
            <b>髙梨大/Dai Takanashi</b>
            <br />
            2001年、東京都生まれ。
            <br />
            慶應義塾大学・環境情報学部3年
            <br />
            徳井直生研究室[Computational Creativity Lab]
            、古谷知之研究室に所属。
            <br />
            幼少期からピアノを習い、音楽に興味を持ち始める。
            <br />
            大学では、プログラミングや機械学習を用いた新しい音楽表現を日々模索している。
          </p>
          <p>
            <b>Exhibition & Society</b>
            <br />
            [2022.2.28]
            音源分離技術を用いた、観客からのリクエスト楽曲を即興でリミックスするシステムの制作
            <a
              class="link"
              href="https://www.interaction-ipsj.org/2022/catalog/#intaractive1_demo"
            >
              [About]
            </a>
            <a
              class="link"
              href="http://www.interaction-ipsj.org/proceedings/2022/data/pdf/1D10.pdf"
            >
              [Paper]
            </a>
            <a class="link" href="https://www.youtube.com/watch?v=wS9SHdIG2a8">
              [Movie]
            </a>
            <br />
            [2022.6.25 - 2022.9.11] Variable Flavor Remix
            <a
              class="link"
              href="https://www.ntticc.or.jp/ja/archive/works/variable-flavor-remix/"
            >
              [Link]
            </a>
          </p>
          <p>
            <b>Work Experience</b>
            <br />
            [2022.2.10 - Current]
            株式会社dual&Co.にてフルスタックエンジニアとして勤務。
            <a class="link" href="https://dual.tokyo/">[Link]</a>
          </p>
        </div>
        <div id="contact">
          <h1 id="contact">Contact</h1>
          <p>
            お問い合わせは、SNSかメールにてお願いいたします。
            <br />
            <a
              class="link"
              href="https://www.instagram.com/0618_dai/?r=nametag"
            >
              <img class="sns_image" src="../assets/SNS1.png" />
            </a>
            <a class="link" href="https://twitter.com/ut42uzelwwkuau2">
              <img class="sns_image" src="../assets/SNS2.png" />
            </a>
            <br />
            dai0618taka[at]gmail.com
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
  font-family: "游明朝", "Yu Mincho", YuMincho, "Hiragino Mincho Pro", serif;
  padding: 30px;
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

  h1 {
    padding-left: 30px;
  }

  p {
    padding-left: 30px;
  }

  .header-title {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 30px;
  }

  .hooper {
    height: 100%;
    text-align: center;
  }

  .image {
    width: 80%;
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

#sp {
  font-family: "游明朝", "Yu Mincho", YuMincho, "Hiragino Mincho Pro", serif;
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

  #nav {
    padding-left: 5px;
  }

  .header-title {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 30px;
  }

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

  .image {
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
