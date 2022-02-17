"use strict";

const noRuby = document.getElementById("noRuby");
const ruby = document.getElementById("ruby");

console.log(noRuby.clientHeight);
console.log(ruby.clientHeight);

// 'Kosugi' 仕様、line-height: 150% の場合、noRuby: 238, ruby: 273

// Firefox 以外で ruby タグを使いつつ、ルビの行間幅を固定する方法は現時点でないっぽい。