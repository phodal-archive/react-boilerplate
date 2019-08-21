
## Steps

1. use Create React App create app

https://github.com/facebookincubator/create-react-app

```
npx create-react-app my-app --typescript

# or

yarn create react-app my-app --typescript
```


2. integration react-app-rewired

https://github.com/timarney/react-app-rewired

2.1 customize-cra

https://github.com/arackaf/customize-cra

## Document

 - [Official useContext](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)
 - [Replace Redux state with React Hooks and Context](https://itnext.io/replace-redux-state-with-react-hooks-and-context-7906e0fd5521)
 - [Multiple Context](https://stackoverflow.com/questions/54119268/how-to-use-react-hooks-context-with-multiple-values-for-providers), Code: https://codesandbox.io/s/zk58011yol
 - [Sebastian 关于 React Hooks 的解释](https://github.com/reactjs/rfcs/pull/68#issuecomment-439314884) : 中文版：[React 作者关于 Hooks 的深度 issue，值得你阅读](https://juejin.im/post/5c238c2ef265da611510d6ff)

Dan Abramov's Hook Articles

 - [Why Isn’t X a Hook?](https://overreacted.io/why-isnt-x-a-hook/)
 - [Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
 - [Why Do React Hooks Rely on Call Order?](https://overreacted.io/why-do-hooks-rely-on-call-order/)
 
Dan Abramov's Hook Articles (Chinese Version)

 - [为什么 'XX' 不是一个 Hooks API?](https://overreacted.io/zh-hans/why-isnt-x-a-hook/)
 - [使用 React Hooks 声明 setInterval](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)
 - [为什么顺序调用对 React Hooks 很重要？](https://overreacted.io/zh-hans/why-do-hooks-rely-on-call-order/)

Others

 - [React hooks：它不是一种魔法，只是一个数组——使用图表揭秘提案规则](https://juejin.im/post/5bfa929551882524cb6f413b)

### Test

#### Library

 - [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
 - [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/) or [jest-mock-axios](https://github.com/knee-cola/jest-mock-axios#readme)
 - [@testing-library/react-hooks](https://github.com/testing-library/react-hooks-testing-library#readme) Simple and complete React hooks testing utilities that encourage good testing practices. 

#### Hooks test

 - [如何测试 React Hooks ？](https://juejin.im/post/5c321bdd6fb9a049f3624142) 英文版：[React Hooks: What's going to happen to my tests?](https://kentcdodds.com/blog/react-hooks-whats-going-to-happen-to-my-tests)
 - [A quick guide to testing React Hooks](https://blog.logrocket.com/a-quick-guide-to-testing-react-hooks-fa584c415407/)  
 - [Testing custom react hooks that use fetch (or other async behaviour)](https://medium.com/@AndreCalvo/testing-custom-react-hooks-that-use-fetch-or-other-async-functions-5fb128d07f53)

### Form 

 - [Form Validation with React Hooks](https://itnext.io/form-validation-with-react-hooks-ab0dbba23b9f)
 - [React Reactive Forms](https://github.com/bietkul/react-reactive-form#readme): Angular like reactive forms in React. 

### 中文（Chinese)

 - [在小程序中使用 React with Hooks](https://github.com/remaxjs/remax/issues/1)，可以用于造轮子

### Boilerplate

 - [react-demo](https://github.com/yangmingshan/react-demo)

## Library

 - [Use Hooks: A collection of reusable React Hooks](https://github.com/use-hooks), examples: [react-hooks-axios](https://github.com/use-hooks/react-hooks-axios)
 - [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)
 - [Ignite (React Native)](https://github.com/infinitered/ignite)
 - [React Valida Hook](https://github.com/highercomve/react-valida-hook) 
 - [react-hook-form](https://github.com/react-hook-form/react-hook-form)
 
**normal**

 - SEO: [react-helmet](https://github.com/nfl/react-helmet) : A document head manager for React
 - Animate: [react-motion](https://github.com/chenglou/react-motion) : A spring that solves your animation problems.
 - CSS in JS: [styled-component](https://github.com/styled-components/styled-components)

### Code Generator

**Light Weight**

 - [generact](https://github.com/diegohaz/generact): Generate React components by replicating your own
 - [hygen](https://github.com/jondot/hygen) is the simple, fast, and scalable code generator that lives in your project.
 - [Plop](https://github.com/amwmedia/plop) Micro-generator framework that makes it easy for an entire team to create files with a level of uniformity. 

**Project Level**

 - [Yeoman Generator](https://yeoman.io) helps you to kickstart new projects, prescribing best practices and tools to help you stay productive.
 - [nwb](https://github.com/insin/nwb) A toolkit for React, Preact, Inferno & vanilla JS apps, React libraries and other npm modules for the web, with no configuration (until you need it)

#### Plop

 - [plopfile.js](https://gist.github.com/kitze/cb042d76b3195b78283c6250418ec338): A sample plopfile for generating React components and components with containers
 - [react-generator](https://github.com/bernabe9/react-generator)： Plop generator for React and Redux
 - [component.jsx.hbs](https://gist.github.com/idan/7a9448d8fee22189b808): with Custom Input
 - [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate/tree/master/internals/generators)'s Examples

#### nwb

```
nwb new preact-app my-app
```                                                                  

## Todo

 - Parcel.js
 - React Function-based Component
 - GraphQL Adapter 
 - Analytics with TypeScript: [https://github.com/nfl/react-metrics](https://github.com/nfl/react-metrics)
 - Fetch data & Loading: [https://www.robinwieruch.de/react-hooks-fetch-data/](https://www.robinwieruch.de/react-hooks-fetch-data/)
