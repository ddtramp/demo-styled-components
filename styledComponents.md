# style-components 使用基础

- styled-components
- Base code
- 组件继承
- 样式覆盖
- GlobalStyle
- theme 主题样式

## 1. styled-components 是什么?

回到2013年，React凭空出世。但是在那时，我们会想，oh shit! 我们好不容易分离了HTML/CSS/JS, 为什么出现了JSX，我们又需要把HTML和JS耦合在一起？React 创造了 HTML in JS. 在React中，我们知道，一切即组件。那既然HTML能在js里写，为什么我们不把CSS也一起写呢？

Styled-components 就是为React而生的，它是CSS in JS 的解决方案。以往我们想要做到css scope都需要在webpack中各种配置，或者使用js的解决方案。而 styled-components， 你只需要 import package 即可。

```javascript
import styled from 'styled-components'
import styled from 'styled-components/macros'
```

甚至React完美的结合，不仅是从TagName上，还有Props上。使我们的代码有更好的语义化，可维护性更强，效率更高。当然我们无需考虑它的学习成本，只要你用过CSS或者sass/less 都可以立刻上手，因为它本身就是一种超集的存在.

## 2. Base code

```javascript
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #abcdef;
  border-radius: 3px;
  border: none;
  color: white;
`;
console.log(Button); //styled component
console.log(new Button()); // react component

export default CustomButton extends React.component {
    render() {
        return <Button {...props} />
    }
}
```

## 3. 组件继承

styled-components 继承样式有两种写法如下

```javascript
const Button = styled.button`
  background: #abcdef;
  border-radius: 3px;
  border: none;
  color: white;
`;

const OtherButton1 = styled(button)`
    color: red;
`;
```

当然，还有一种有趣的“继承” withComponent，我们可以利用withComponent 改变渲染的 tag

```javascript
const Li = styled.li`
    color:#abcdef;
`;
const A = Li.withComponent('a'); // 将会渲染a标签
```

## 4. 样式覆盖

以往我们的覆盖写法如下:

```javascript
const ListItem = styled.li`
  padding: 0;
  height: 48px;
  
  &.left-item-focus {
    .left-link {
       background: ${props => props.color};
    }
  }
  &:hover {
     .left-icon {
        color: #9e9e9e; // 500
     }
  }
`
```

而在styled中，我们可以使用styled-components 组件方式对我们的DOM进行引用，从而覆盖样式，如下

```javascript
const Icon = styled.span`
    color: red;
`;

const ListItem = styled.li`

    &:hover ${Icon} {
        color: green;
    }
`;
```

这依旧是我们过去的思路来覆盖样式，只是我们把选择器直接使用styled组件引用罢了。拥有这样的接口，就更加让我们无需去思考需要给组件取什么className或者id，从而达到覆盖样式的做法。

```javascript
const ListItem = styled.li``;

const Icon = styled.span`
    color: red;
    ${ListItem}:hover & { // & 代表icon组件
        color: green;
    }
`;
```

这段代码实现的是一样的功能，只是我们思路转换了一下。可以发现这样的代码更加没有侵入性。更加符合开放封闭原则，当我们不需要这个Icon组件时，直接把这个Icon删除即可，我们不用去父组件里寻找与该组件有关的样式，不容易造成样式污染。突然觉得眼前一亮，有木有！

当然这种“子组件引用父级”的功能，还有更加广泛的引用。你可以选择该DOM任何parent，再对自己进行样式的覆盖。如下：
当任何父级带有class都会覆盖Icon的样式

```javascript
const Icon = styled.span`
    color: red;
    html.ie-8 & {
        // fuck ie8
        color: blue;
    }
    body.xxx & {
        color: green;
    }
`;
```

在上面可以看见我们大量使用了&作为选择器，而&还有另外的技巧

```javascript
const Example = styled.li`
    color: red;
    & {
        color:blue;
    }
    && {
        color: green;
    }
`;
```

会被渲染成

```html
<li class='sc-gzVnrw fmpfVE'></li>
```

最终会编译成如下 class，但是我们的一个 `&` 就代表一个 class 权重也就是说我们最后会渲染原谅色，原因是 `li` 被作用于了 `.fmpfVE.fmpfVE` 样式表。这个功能非常有用，比如在你使用第三方组件想要覆盖它的样式的时候，我们就可以加多个 `&` 来提高样式权重，从而覆盖第三方组件的样式.

## GlobalStyle

```javascript
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`

// later in your app

<React.Fragment>
  <GlobalStyle whiteColor />
  <Navigation /> {/* example of other top-level stuff */}
</React.Fragment>
```

## 5. Theme

```javascript
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;
// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}
// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};
render(
  <div>
    <Button>Normal</Button>
    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>
);
```
## 可以解决的问题

微服务架构不同应用之间的 css  隔离

## DOC

[styled-components](https://www.styled-components.com)

[一个关于 Styled Components 的五分钟介绍](https://github.com/sqrthree/sqrthree.github.io/issues/11)

[CSS Modules vs Styled Components](https://hashnode.com/post/css-modules-vs-styled-components-ciz2g9dt7000h7c535j35rbfu)

[五分钟 Styled-components 高级实用技巧](https://segmentfault.com/a/1190000016246882)

[demo 地址]()