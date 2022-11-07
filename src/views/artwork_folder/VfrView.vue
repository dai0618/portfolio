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
      <div id="VariableFlavorRemix">
        <h1>Variable Flavor Remix</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img class="vfr_image" src="../../assets/vfr-image1.png" />
          </slide>
          <slide>
            <img class="vfr_image" src="../../assets/vfr-image2.jpg" />
          </slide>
          <slide>
            <img class="vfr_image" src="../../assets/vfr-image3.png" />
          </slide>
        </hooper>
        <div id="content_vfr">
          <p>
            <b>Concept</b>
            <br />
            オーディエンスからリクエストされた複数楽曲をもとに、リアルタイムにリミックス／マッシュアップを行なうシステム。
            <br />
            <br />
            クラブにおけるDJ（パフォーマー）と観客（オーディエンス）とのコミュニケーションは音楽シーンや時代の流れとともに非双方向的に
            なっており、若者を中心としたクラブ離れの一因となっている、新型コロナウイルスはこの流れを加速させ、両者の関係をさらに希薄なも
            のにさせた。コロナ禍においても、オンラインでのDJパフォーマンスを行なうなど、これまでとは異なる形式で観客との交流を図った試
            みはあったが、期待したほどの効果は達成されず、現在に至る。
            <br />
            <br />
            このパフォーマーとオーディエンスの非双方向性を取り除くべく、音楽を通したコミュニケーションの促進を目的としたシステム制作に取
            り組んだ。深層学習を用いた音源分離モデルと、楽曲内で周期性のあるループを抽出する技術を組み合わせることで、異なる楽曲同士のリ
            ミックス／マッシュアップを容易にする。本システムをライヴ・パフォーマンスの場で使うことで、オーディエンスによる曲のリクエスト
            に基づいて、パフォーマーは即興性のあるリミックス／マッシュアップを生み出すことができる。両者の新たな関係構築が行なわれること
            で、コミュニケーションを創出し、課題となっていた非双方向性を取り除きクラブ文化の再盛を目指す。
          </p>
          <p>
            <b>Exhibition & Society</b>
            <br />
            [2022.2.28]音源分離技術を用いた、観客からのリクエスト楽曲を即興でリミックスするシステムの制作
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
            [2022.6.25 - 2022.9.11]Variable Flavor Remix
            <a
              class="link"
              href="https://www.ntticc.or.jp/ja/archive/works/variable-flavor-remix/"
            >
              [Link]
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
      <div id="VariableFlavorRemix">
        <h1>Variable Flavor Remix</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img class="vfr_image" src="../../assets/vfr-image1.png" />
          </slide>
          <slide>
            <img class="vfr_image" src="../../assets/vfr-image2.jpg" />
          </slide>
          <slide>
            <img class="vfr_image" src="../../assets/vfr-image3.png" />
          </slide>
        </hooper>
        <div id="content_vfr">
          <p>
            <b>Concept</b>
            <br />
            オーディエンスからリクエストされた複数楽曲をもとに、リアルタイムにリミックス／マッシュアップを行なうシステム。
            <br />
            <br />
            クラブにおけるDJ（パフォーマー）と観客（オーディエンス）とのコミュニケーションは音楽シーンや時代の流れとともに非双方向的に
            なっており、若者を中心としたクラブ離れの一因となっている、新型コロナウイルスはこの流れを加速させ、両者の関係をさらに希薄なも
            のにさせた。コロナ禍においても、オンラインでのDJパフォーマンスを行なうなど、これまでとは異なる形式で観客との交流を図った試
            みはあったが、期待したほどの効果は達成されず、現在に至る。
            <br />
            <br />
            このパフォーマーとオーディエンスの非双方向性を取り除くべく、音楽を通したコミュニケーションの促進を目的としたシステム制作に取
            り組んだ。深層学習を用いた音源分離モデルと、楽曲内で周期性のあるループを抽出する技術を組み合わせることで、異なる楽曲同士のリ
            ミックス／マッシュアップを容易にする。本システムをライヴ・パフォーマンスの場で使うことで、オーディエンスによる曲のリクエスト
            に基づいて、パフォーマーは即興性のあるリミックス／マッシュアップを生み出すことができる。両者の新たな関係構築が行なわれること
            で、コミュニケーションを創出し、課題となっていた非双方向性を取り除きクラブ文化の再盛を目指す。
          </p>
          <p>
            <b>Exhibition & Society</b>
            <br />
            [2022.2.28]音源分離技術を用いた、観客からのリクエスト楽曲を即興でリミックスするシステムの制作
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
            [2022.6.25 - 2022.9.11]Variable Flavor Remix
            <a
              class="link"
              href="https://www.ntticc.or.jp/ja/archive/works/variable-flavor-remix/"
            >
              [Link]
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

  .vfr_image {
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

  .vfr_image {
    width: 100%;
  }

  .link:hover {
    opacity: 0.5;
  }
}
</style>
