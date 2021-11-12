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
        <nav>
          <ul>
            <li>
              <a href="/"><span>文章</span></a>
            </li>
            <li>
              <a href="/archives"><span>归档</span></a>
            </li>
            <li>
              <a href="/knowledge"><span>知识小册</span></a>
            </li>
            <li>
              <a href="/page/msgboard"><span>留言板</span></a>
            </li>
            <li>
              <a href="/page/about"><span>关于</span></a>
            </li>
            <li class="icons">
              <div class="iconsDiv"><button>登录</button></div>
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
              <div class="iconsDiv">
                <svg
                  class="sun"
                  style="width: 24px; height: 24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"
                  ></path>
                </svg>
              </div>
            </li>
            <li class="icons">
              <div class="iconsDiv">
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    d="M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<style lang="scss">
header {
  // width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  .container {
    display: flex;
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
    height: 64px;
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
</style>