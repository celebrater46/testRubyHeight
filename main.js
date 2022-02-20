"use strict";

const noRuby = document.getElementById("noRuby");
const ruby = document.getElementById("ruby");

const noRubyP = document.getElementById("noRubyP");
const rubyP = document.getElementById("rubyP");


console.log(noRuby.clientHeight);
console.log(ruby.clientHeight);
console.log(noRubyP.clientHeight);
console.log(rubyP.clientHeight);

// 'Kosugi' 仕様、line-height: 150% の場合、noRuby: 238, ruby: 273

// Firefox 以外で ruby タグを使いつつ、ルビの行間幅を固定する方法は現時点でないっぽい。


// 220220

// CSS で font-size: 20px, line-height: 100%, padding: 12px 0 0
// にしてみたところ、何とルビありとルビなしで同じ高さになった。

// フォントを変えても成功。
//