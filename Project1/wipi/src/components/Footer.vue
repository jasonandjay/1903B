<template>
  <footer>
    <ul>
      <li>
        <a
          aria-label="rss"
          href="/rss"
          target="_blank"
          rel="noopener noreferrer"
          ><span role="img" class="anticon"
            ><svg
              viewBox="0 0 1024 1024"
              version="1.1"
              p-id="4788"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
            >
              <!-- <defs><style type="text/css"></style></defs> -->
              <path
                d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m-182.4 768C288 768 256 736 256 694.4s32-73.6 73.6-73.6 73.6 32 73.6 73.6-32 73.6-73.6 73.6z m185.6 0c0-144-115.2-259.2-259.2-259.2v-80c185.6 0 339.2 150.4 339.2 339.2h-80z m172.8 0c0-240-195.2-432-432-432V256c281.6 0 512 230.4 512 512h-80z"
                fill="currentColor"
              ></path></svg></span
        ></a>
      </li>
      <li>
        <a
          aria-label="Github"
          href="https://github.com/fantasticit/wipi"
          target="_blank"
          rel="noopener noreferrer"
          ><span role="img" aria-label="github" class="anticon anticon-github"
            ><svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="github"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
              ></path></svg></span
        ></a>
      </li>
    </ul>
    <div class="desc">
      <p>
        Designed by
        <a
          rel="noopener noreferrer"
          href="https://github.com/fantasticit/wipi"
          target="_blank"
          >Fantasticit</a
        >
        .
        <a
          href="https://admin.blog.wipi.tech/"
          target="_blank"
          rel="noopener noreferrer"
          >后台管理</a
        >
      </p>
      <p>Copyright © 2021. All Rights Reserved.</p>
      <p>皖ICP备18005737号</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
    position: relative;
    padding: 20px 0;
    border-top: 1px solid var(--border-color);
    color: #c1bdbd;
    background: var(--bg-footer);
    text-align: center
}

footer ul {
    background: transparent;
    color: var(--main-text-color)
}

a{
    color: #c1bdbd;
    background: var(--bg-footer);
}
ul {
    display: inline-flex;
    flex-wrap: nowrap;
    margin: 8px 0 16px
}

ul li {
    display: inline-block;
    border-radius: 50%;
    margin: 0 5px;
    font-size: 24px;
    text-align: center
}

ul li:first-of-type {
    margin-top: 1px
}

ul li:hover {
    color: var(--primary-color)
}

.desc {
    font-size: 10px;
    line-height: 15px
}
</style>