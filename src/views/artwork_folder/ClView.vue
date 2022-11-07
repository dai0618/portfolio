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
      <div id="Calculative Linescape">
        <h1>Calculative Linescape</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img class="cl_image" src="../../assets/cl-image1.png" />
          </slide>
          <slide>
            <img class="cl_image" src="../../assets/cl-image2.png" />
          </slide>
        </hooper>
        <div id="content_cl">
          <p>
            <b>Concept</b>
            <br />
            電線は時に、景観を損ねるとして風景から排除されたり、風景において注目されず無視されている存在である。
            <br />
            <br />
            一方で、電線を始めとする土木建造物を鑑賞し、その美しさに魅了される人も増えている。本作品では、そんな電線がなす風景の新たな形を模索する。
            電線がなす風景(以下、電線景)の鑑賞方法には様々あるが、今回は、”電線景を描く”という行為に着目する。人間ではなく、AIが電線を描くということは、
            AIが自身の原動力である電気を運ぶための道=電線のランドスケープをデザインしているとも言い換えられる。人間が電線を描く際には、その人にとって美しいと思える電線の抽出であり、
            それは同時に美しくない電線という存在を生む。AIは無差別に電線写真を学習し、電線がなす線の新たな形を提案してくれる。
            <br />
            <br />
            本作品では、人間とAIが共同して、普段は邪魔者にされている電線とそれがなす風景の新たな形とあり方を考えるきっかけとなる。
            <a
              class="link"
              href="https://www.youtube.com/watch?v=-mmADeq37l0&ab_channel=%E9%AB%98%E6%A2%A8%E5%A4%A7"
            >
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
      <div id="Calculative Linescape">
        <h1>Calculative Linescape</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img class="cl_image" src="../../assets/cl-image1.png" />
          </slide>
          <slide>
            <img class="cl_image" src="../../assets/cl-image2.png" />
          </slide>
        </hooper>
        <div id="content_cl">
          <p>
            <b>Concept</b>
            <br />
            電線は時に、景観を損ねるとして風景から排除されたり、風景において注目されず無視されている存在である。
            <br />
            <br />
            一方で、電線を始めとする土木建造物を鑑賞し、その美しさに魅了される人も増えている。本作品では、そんな電線がなす風景の新たな形を模索する。
            電線がなす風景(以下、電線景)の鑑賞方法には様々あるが、今回は、”電線景を描く”という行為に着目する。人間ではなく、AIが電線を描くということは、
            AIが自身の原動力である電気を運ぶための道=電線のランドスケープをデザインしているとも言い換えられる。人間が電線を描く際には、その人にとって美しいと思える電線の抽出であり、
            それは同時に美しくない電線という存在を生む。AIは無差別に電線写真を学習し、電線がなす線の新たな形を提案してくれる。
            <br />
            <br />
            本作品では、人間とAIが共同して、普段は邪魔者にされている電線とそれがなす風景の新たな形とあり方を考えるきっかけとなる。
            <a
              class="link"
              href="https://www.youtube.com/watch?v=-mmADeq37l0&ab_channel=%E9%AB%98%E6%A2%A8%E5%A4%A7"
            >
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

  .cl_image {
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

  .cl_image {
    width: 100%;
  }

  .link:hover {
    opacity: 0.5;
  }
}
</style>
