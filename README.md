# Online Store Webapp written on vue.js




# Vue.js key concepts

## Essentials

* Directives 
  * Prefixed with `v-`
  * Apply reactive behavior to the rendered DOM
  * `v-once` - one-time interpolation
  * `v-html` - outputs real HTML
  * `v-bind:` or `:`
  * `v-on:` or `@:` -  listens DOM events 

* Computed props
  * used for complex logic
  * cached
  * support setters
  ```js
    computed: {
      fullName: {
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }
  ```

* Watchers
  * used to perform asyn or expensive operation in response to changing data
  ```js
  watch: {
    firstName: function(newVal, oldVal) {
      this.fullName = newVal + ' ' + this.lastName
    }
  }
  ```

* Class bindings
  * `v-bind:class="{ active: isActive }"`
  * 
  ```js
  v-bind:class="[activeClass, errorClass]"
  
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
  ```
  * classes added to component will be added to it's root element
  * Vue automatically ads vendor prefixes in `v-bind:style`

* Conditional Rendering

  * `v-if=""`
  * `v-else-if`
  * `v-else`
  * `v-show` toggles 'display' CSS prop

* Loops

  * `v-for="(item, ind) in items"` - in|of
  * `v-for="(value, key, ind) in object"` - in|of
  * `<div v-for="item in items" :key="item.id"></div>`
  * with range `v-for='n in 10'`
  * `v-for` > `v-if`: `<div v-for="todo in todos" v-if="!todo.isComplete"></div>`
  * ul li: `<ul><li is="todo-item"></li></ul>` because only `li` el is valid inside `ul`

* Array change detection
  * Vue wraps an observed array's mutation methods so they will also trigger view updates:
    * push()
    * pop()
    * shift()
    * unshift()
    * splice()
    * sort()
    * reverse()
  * NOT reactive:
    * directly set an item with index `vm,items[index] = newValue`
    * use `Vue.set(vm.items, index, newValue)`
  * NOT reactive:
    * modify the length of the array: `vm.items.length = newLength`
    * use `vm.items.splice(newLength)`

* Object change detection
  * NOT reactive:
    * prop addition or deletion
  * adding new nested props is reactive: `Vue.set(obj, key, value)` or `vm.$set(object, key, value)`

* Reusable elements with `key`
  * Vue tries to rerender elements as efficiently as possible, often reusing them instead of rendering from scratch
  * add `key="some-key"` to say 'don't re-use them'

* Event handling
  * `v-on:click=""` or `@click=""`
  * `@click="say"`; `say: function($event) {}`
  * `@click="say('hi')"`; `say: function(message) {}` 
  * `@click="say('hi', $event)"`; `say: function(message, event) {}`

* Event modifiers
  * postfixes indicate that a directive should be bound in special way
  
  * `.prevent` - `v-on.prevent=""` calls `preventDefault()`
  *  `.stop`
  *  `.capture`
  *  `.self`
  *  `.once`
  *  `.passive`
  
* Two-way data binding
  * `v-model="model"`

* Vue instance
  * data properties
  * instance properties (`$`)

* Lifecycle hooks
  * `beforeCreate` - init'ed events & Lifecycle
  * `created` - init'ed injections & reactivity
  * `beforeMount` - compile template into render func
  * `mounted` - created `vm.$el` and replace el with it
  * `beforeUpdate`
  * `updated` - virtual DOM re-rendered and patched
  * `beforeDestroy`
  * `destroyed` - teardowned watchers, child components, and event listeners

* Key modifiers
  * `.enter`
  * `.tab`
  * `.delete` - captures both `Delete` and `Backspace`
  * `.esc`
  * `.space`
  * `.up`
  * `.down`
  * `.left`
  * `.right`
  * custom via config.keyCodes `Vue.config.keyCodes.f1 = 112`

* System modifier keys
  * `.ctrl`
  * `.alt`
  * `.shift`
  * `.meta`
  * `<input @keyup.alt.67="clear">` Alt+C
  * `.exact` - `<button @click.ctrl.exact="onCtrlClick">A</button>`  this will only fire when Ctrl and no other keys are pressed

* Mouse button modifiers
  * `.left`
  * `.right`
  * `.middle`

## Form Input Bindings
  * Text
    * `<input v-model="message">`
  * Textarea
    * `<textarea v-model="message"></textarea>`; `<textarea>{{text}}</textarea>` - won't work
  * Checkbox, can be bound to array 
    * `<input type="checkbox" id="checkbox" v-model="checked">`
  * Radio
 
    * 
```html
<input type="radio" id="one" value="One" v-model="picked">
<input type="radio" id="two" value="Two" v-model="picked">
```
  * Select
    
    * 
```html
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

  * Modifiers
    * `.lazy` - sync after `change` instead of `input`
    * `.number` - typecast to number
    * `.trim` - trimms automatically


## Components
  * local and global
  



References:

* Vue.js
* Vuetiful
* Vue Router
* Vee validate
* Vuex





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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```