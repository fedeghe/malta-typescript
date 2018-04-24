---
[![npm version](https://badge.fury.io/js/malta-typescript.svg)](http://badge.fury.io/js/malta-typescript)
[![Dependencies](https://david-dm.org/fedeghe/malta-typescript.svg)](https://david-dm.org/fedeghe/malta-typescript)
[![npm downloads](https://img.shields.io/npm/dt/malta-typescript.svg)](https://npmjs.org/package/malta-typescript)
[![npm downloads](https://img.shields.io/npm/dm/malta-typescript.svg)](https://npmjs.org/package/malta-typescript)  
---  

This plugin can be used on: **.ts** files

Options : no options  

Sample usage:  
```
malta app/source/home.ts public/js -plugins=malta-typescript
```
or in the .json file :
```
"app/source/home.ts" : "public/js -plugins=malta-typescript"
```
or in a script : 
``` js
var Malta = require('malta');
Malta.get().check([
    'app/source/home.ts',
    'public/js',
    '-plugins=malta-typescript',
    '-options=showPath:false,watchInterval:500,verbose:0'
    ]).start(function (o) {
        var s = this;
        console.log('name : ' + o.name)
        console.log("content : \n" + o.content);
        'plugin' in o && console.log("plugin : " + o.plugin);
        console.log('=========');
    });
```