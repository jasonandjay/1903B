<template>
     <header>
      <div class="container">
        <div class="logo">
          <a href="/">
            <img
              src="https://wipi.oss-cn-shanghai.aliyuncs.com/2021-02-20/wipi-logo.png"
              alt=""
              height="36"
            />
          </a>
        </div>
        <div :class="{strick: true, active: showMenu}"  @click="showMenu=!showMenu">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav :class="{active: showMenu}">
          <ul>
            <li>
              <a href="/"><span>{{$t("menu.article")}}</span></a>
            </li>
            <li>
              <a href="/archive"><span>{{$t("menu.archive")}}</span></a>
            </li>
            <li>
              <a href="/knowledge"><span>{{$t("menu.knowledge")}}</span></a>
            </li>
            <li>
              <a href="/page/msgboard"><span>{{$t("menu.msgboard")}}</span></a>
            </li>
            <li>
              <a href="/page/about"><span>{{$t("menu.about")}}</span></a>
            </li>
            <li class="icons">
              <div class="iconsDiv">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="search"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                  ></path>
                </svg>
              </div>
            </li>
            <li class="icons">
              <theme />
            </li>
            <li class="icons">
              <language />
            </li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<script>
import Theme from './Theme.vue'
import Language from './Language.vue'

export default {
  components: {
    Theme,
    Language
  },
  data(){
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss">
header {
  // width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  position: relative;
  .container {
    display: flex;
    align-items: center;
  }
  .strick{
    display: none;
  }
  .logo {
    min-width: 100px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4rem;
  }
  nav {
    flex-grow: 1;
    ul {
      width: 100%;
      height: 100%;
      li {
        float: left;
        height: 100%;
        padding: 0 12px;
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
        }
      }
      .icons {
        float: right;
        cursor: pointer;
        .iconsDiv {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          svg {
            font-size: 24px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
    .container{
      nav{
        display: none;
      }
      nav.active{
        position: absolute;
        top: 64px;
        left: 0;
        width: 100%;
        background:var(--bg);
        color: var(--main-text-color);
        display: block;
        ul{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        a{
          color: var(--main-text-color);
        }
        ul li:hover, ul li:hover a{
          color: var(--primary-color);
        }
      }
      .strick{
        display: block;
        position: absolute;
        right: 15px;
        div{
          width: 25px;
          height: 4px;
          border-radius: var(--border-radius);
          background-color: var(--primary-color);
          opacity: 1;
          transition: all .25s ease-in-out 0s;
        }
        div:nth-child(2){
          margin: 5px 0;
        }
      }
      .strick.active{
          div:nth-child(1){
            transform: translateY(9px) rotate(45deg);
          }
           div:nth-child(3){
            transform: translateY(-9px) rotate(-45deg);
          }
          div:nth-child(2){
            opacity: 0;
          }
      }
    }
}
</style>