# Build Step

```shell
$ npm install

$ npm run serve

$ npm run build

$ kraken ./dist/js/app.js
```

# Notice

```shell
1. 如果需要使用元素的层叠结构, 可以使用z-index配合position实现元素层叠,  
   z-index 较大的元素会覆盖较小的元素在上层进行显示. 
   注意: 如果定义了定位元素的上外边距边界与其包含块上边界之间的偏移(如: top/right/bottom/left),
   必须设置position属性, 非定位元素设置此属性无效.
```
