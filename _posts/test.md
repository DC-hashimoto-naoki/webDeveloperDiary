---
title: '2023年1月19日(spreadsheet, gsap)'
excerpt: 'Googleスプレッドシートの文字列を結合する方法で最も簡単な方法が**「&」**です。「&」は半角で使用しなければ結合できないので、気をつけてください。たくさんの文字列を結合する際には、**CONCATENATE関数**を使用することをおすすめします。'
coverImage: '/assets/blog/cool/technology.png'
date: '2023-01-16T05:35:07.322Z'
author:
  name: Naoki Hashimoto
  picture: '/assets/blog/authors/pigeon.svg'
ogImage:
  url: '/assets/blog/cool/technology.png'
---
## 2023年1月19日(spreadsheet, gsap)
https://u-note.me/note/68913
文字の連結

* 演算子「&」を使ってGoogleスプレッドシートの文字列を結合する方法
* CONCATENATE関数を使ってGoogleスプレッドシートの文字列を結合する方法
* TEXTJOIN関数を使ってGoogleスプレッドシートの文字列を結合する方法

Googleスプレッドシートの文字列を結合する方法で最も簡単な方法が**「&」**です。
「&」は半角で使用しなければ結合できないので、気をつけてください。

たくさんの文字列を結合する際には、**CONCATENATE関数**を使用することをおすすめします。
ex)
「=CONCATENATE(A2,B2)」
文字と文字をつなぐ場合は「=CONCATENATE(“山田”,”太郎”)」

結合した文字と文字の間に区切り文字を入れたい場合は「**TEXTJOIN関数**」を使用することをおすすめします。
「**=TEXTJOIN(“入れたい区切り文字”,TRUE,結合したい場所)**」のように使用します。

# chatGPT with spreadsheet

https://docs.google.com/spreadsheets/d/e/2PACX-1vT2hwwsVibQyDaXW6weZ18vVeESmL0WANwmdlpA2HX07aFtblpTZUjtWtQEPmyzCGDnO5Cx7OUA2lyU/pubhtml

* * *

gsap

CDN
https://greensock.com/docs/v3/Installation
`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>`

**e.clientX e.clientY**
カーソルのX/Y座標の取得
```
  const mouseX = e.clientX;
  const mouseY = e.clientY;
```

https://greensock.com/docs/v3/GSAP/gsap.to()
**[gsap.to](http://gsap.to)()**
[gsap.to](http://gsao.to)("対象の要素", { オブジェクト })

stagger (ずらし)

If multiple targets are defined, you can easily [stagger](https://codepen.io/GreenSock/pen/938f5cd34818443c43af9ba2692137a5) the start times for each by setting a value like `stagger: 0.1` (for 0.1 seconds between each start time). Or you can get much more advanced staggers by using a stagger object. For more information, see [the stagger documentation](https://greensock.com/docs/v3/Staggers).

stagger 複数のターゲットが定義されている場合、stagger: 0.1 (各開始時間の間の 0.1 秒) のような値を設定することで、それぞれの開始時間を簡単にずらすことができます。

gsap.set() : 遅延がないアニメーション **duration が 0**

要素の上下左右中央揃え
```
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
```

魔法のCSS！
```
mix-blend-mode: screen;
```

# scrollTrigger

CDNs
```
<script src="//cdn.jsdelivr.net/npm/gsap@3.7.0/dist/gsap.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/gsap@3.7.0/dist/ScrollTrigger.min.js"></script>
```

https://yumegori.com/gsap-scrolltrigger

https://www.youtube.com/watch?v=X7IBa7vZjmo

https://hakoirioyaji.com/blog/gsap-scrolltrigger/

**toggleActions**
`onEnter onLeave onEnterBack onLeaveBack`

# timeline

```
const tl = gsap.timeline();
```

ex)
```
  tl.to(".target", {
    x: 300
  }, 0)
  .to(".target", {
    y:400
  }, 1)
  .to(".target", {
    x: -200
  }, 2)
  .to(".target", {
    y: -500
  }, 3)
```

https://ics.media/entry/220825/
タイムラインの初期化
ex)
```
const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); // はじめに初期化
```

#### **タイムラインのメソッド**

to()    **gsap.to()トゥイーンをタイムラインの最後に追加します。**

モーションは直列でつないでいくと**台本的な動きになりがち**です
動きを重ねる！
ex)
```
  .to(".rect1", { y: -32, opacity: 0, duration: 0.5 })
  .to(".rect2", { y: 32, opacity: 0, duration: 0.5 }, "-=0.4") // 0.4秒開始を早める
```


# timeScale()

ex) ２倍速
```
.timeScale(2)
```

# call(*callbackFunc*)

コールバック関数を呼び出す
ex) 3.5秒後に 0.2倍速になる
```
gsap.timeline()
.call( ()=> {
    tl.timeScale(0.2)
}, null, 3.5)
```

公式ドキュメント
https://greensock.com/docs/v3/GSAP/Timeline/call()
`.call( callback:Function, params:Array, position:* )`

# scrollTrigger

https://qiita.com/k_watanabe_51/items/264542b564187d95a3e4
**scrub** の値に数値を指定することで遅延させることができ（スムーズに追いつきます）、数値が大きくなるほど遅延が大きくなります。
またこの際、数値は秒単位で指定します。
```
gsap.to('.box1', {
  x: 400,
  scrollTrigger: {
    trigger: '.container',
    start: 'center 70%',
    end: 'center 30%', // アニメーションの終了位置の指定
    scrub: true, // スクロールの進捗とアニメーションの進捗をリンクさせる
  }
});
```

## timeline と合わせ技

**const tl = gsap.timeline({**
 **scrollTrigger: {**
 **}**
**});**
ex)
```
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.container',
    start: 'center center',
    end: () => '+=' +
  }
});
tl.to('.box', {x: 400})
  .to('.box', {rotation: 1080})
  .to('.box', {backgroundColor: 'orange'})
  .to('.box', {scale: 3});
```

参考記事
https://www.to-r.net/media/scrolltrigger/

http://scrollmagic.io/

Tags:
  gsap