# OnsenUI Vue Side Splitter Example

Based off of the OnsenUI Vue `<v-ons-splitter-side>` tutorial: https://onsen.io/v2/api/vue/v-ons-splitter-side.html.

This example will move the page components into their own `.vue` files.

## Different Implementations

1. `using-function-property` branch [demonstrates](https://onsenui-vue-side-splitter.firebaseapp.com/) using a function property to navigate between pages.

2. `vue-router` branch [demonstrates](https://onsenui-vue.firebaseapp.com/) the OnsenUI wrapper for the Vue-router to navigate between pages.

3. `vuex` branch [demonstrates](https://onsenui-vue-vuex.firebaseapp.com/) using VueX to control app state & navigate between pages.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Deploy

If you've never deployed the app to Firebase perform Steps 1 & 2, if you've already deployed the app before go directly to Step 3.

1. link your local machine to Firebase
`npm run login`

2. initialize Firebase to host the app
`npm run init`

3. deploy the app to Firebase
`npm run deploy`

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
