# ふわふわプラグイン

## 使い方

指定した要素にfuwafuwaを記述して、ふわふわさせる

ふわっと表示させるメソッド  
`$(".hoge").fuwafuwa();`  
ふわっと非表示にさせるメソッド  
`$(".hoge").fuwafuwaout();`  

### アニメーションの時間と開始時間と終了時間を調整する

```
$(".hoge").fuwafuwa({
    animation:1000, // アニメーションのフェードの時間
    settime:2000 //表示が始まる時間
 })
```
```
$(".hoge").fuwafuwa({
    animation:1000, // アニメーションのフェードの時間
    settimeout:1000 //表示が終わる時間
 })
```

### 繋げても大丈夫

以下のように繋げても起動できる
```
$(".hoge").fuwafuwa().fuwafuwaout();
```
こんな感じでも大丈夫
```
$(".hoge").fuwafuwa({
    animation:1000, // アニメーションのフェードの時間
    settime:2000 //表示が始まる時間
 })
 .fuwafuwaout({
    animation:1000,
    settimeout:2000 //表示が終わる時間
 });
});
```
