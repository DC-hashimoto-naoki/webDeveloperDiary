---
title: '2022年12月29日(CSS, Next.js, styled-components)'
excerpt: '少し注意したいのがloading="lazy"属性を使うには<img>要素にきちんとwidth属性とheight属性が記述されている必要があります。Squooshやimageminといった画像圧縮ツール'
coverImage: '/assets/blog/cool/communication.png'
date: '2022-12-29T05:35:07.322Z'
author:
  name: Naoki Hashimoto
  picture: '/assets/blog/authors/pigeon.svg'
ogImage:
  url: '/assets/blog/cool/communication.png'
---

https://ics.media/entry/221223/
少し注意したいのがloading="lazy"属性を使うには<img>要素にきちんとwidth属性とheight属性が記述されている必要があります。

Squooshやimageminといった画像圧縮ツール

---
https://zenn.dev/denham/articles/fe25cc016f5f9a
Next.js

prettierの導入

```
npm install -D prettier eslint-config-prettier
```

CLI で firebase にログイン
```
firebase login
```
> Already logged in as hashimoto_naoki@discovery-inc.com

typescript のジェネリクス
Genericsは抽象的な型引数を使用して、実際に利用されるまで型が確定しないクラス・関数・インターフェイスを実現する為に使用されます。

```
const [message, setMessage] = useState<string>('')
```
関数の引数の型を指定している？？？

map 関数は return しないと出力されない！！！

---
styled-components
https://tech-blog.rakus.co.jp/entry/20210319/frontend

インストール
```
npm install styled-components
```
https://tekrog.com/styled-components/
```
npm install --save styled-components @types/styled-components
```
Typescriptで利用する場合は@types/styled-componentsも必要です。

エラー
does not exist on type 'JSX.IntrinsicElements'.
コンポーネント名は大文字で始める必要がある！！
NG: <styledButton>
OK: <StyledButton>

propsの渡し方
https://zenn.dev/lilac/articles/7c235a1841a8da


とりあえず、できたけどもっといい書き方ができるはず！

App.tsx
```
<Box borderWidth={5} />
```
Box.tsx
```
import styled from "styled-components"
type BoxProps = {
    borderWidth : number
}
export const Box = (props: BoxProps) => {
    const {borderWidth} = props;
    
    return(
        <StyledBox borderWidth={borderWidth}>
            Box
        </StyledBox>
    )
}
const StyledBox = styled.div<{borderWidth: number}>`
    color : lime;
    border: 0px solid tomato;
    border-width: ${(props) => props.borderWidth}px;
`
```

event の型定義はなにかとややこしい・・・
https://reffect.co.jp/react/react-typescript-event

```
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const width = parseInt(e.target.value)
setWidth(width);
}

<input type="range" name="" id="" onChange={handleChange} />
```

Material UI は emotion がデフォルト => サンプルもemotion で書かれている
Material UI uses Emotion as its default styling engine. If you want to use styled-components instead, run one of the following commands:

attr （属性）の指定
https://www.gaji.jp/blog/2021/08/23/7971/