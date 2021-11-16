<template>
    <div ref="container" class="markdown">
        <slot></slot>
    </div>
</template>

<script>
import hljs from 'highlight.js';
import copy from 'copy-to-clipboard';
import {Message} from 'element-ui';

export default {
    updated(){
        let codes = [...document.querySelectorAll('.markdown pre code')];
        console.log('codes..', codes);
        codes.forEach(item=>{
            let span = document.createElement('span');
            span.innerText = 'Copy';
            span.className = 'copy';
            span.onclick = function(){
                copy(item.innerText);
                Message.success('复制成功');
            }
            item.parentNode.appendChild(span);
            hljs.highlightBlock(item);
        })
    }
}
</script>

<style style="scoped" lang="scss">
.copy{
    position: absolute;
    right: 5px;
    top: 4px;
    font-size: 12px;
    transform: scale(0.9);
    color: rgba(140, 140, 140, 0.8);
    cursor: pointer;
}
</style>