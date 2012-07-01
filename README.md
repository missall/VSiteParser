#Description(English Version)#

###VSiteParser is a Chinese native video website URL parser.###

With it,you can parse a video URL of some Chinese native video website such as Youku,Tudou,56,etc.

**Just like this:**

![](http://djyde.github.com/img/vsp.png)

##Support##

The web that VSiteParser has supported:

* [Youku](http://www.youku.com)

* [Tudou](http://www.tudou.com)

* [56](http://www.56.com)

* [ku6](http://www.ku6.com)

* [ifeng](http://www.ifeng.com)

* [bilibili](http://www.bilibili.tv)

##Make it work##

in **HTML**:

```
<script src="../vsparser.js"></script>
```

in **Node.js**:

```
$ npm install vsiteparser
```

```
var vsp = require("vsiteparser"); 
```

##Now, code describes everything##

**You just need to do a few as follow:**

**in HTML**

```
var swf = vsparser("http://v.youku.com/v_show/id_XMjc3ODU4OTMy.html");
```

**in Node.js**

```
var swf = vsp.vsparser("http://v.youku.com/v_show/id_XMjc3ODU4OTMy.html");
```

**And now you can try to output the varible "swf"** ( to use ` document.write(swf) `)**. All you will see is:**

` http://player.youku.com/player.php/sid/XMjc3ODU4OTMy/v.swf `

##Direction##

After the description above,you may already know,there is a function named "vsparser" that return the flash URL of the video URL you given as an argument.**This is the core of VSiteParser** because depending on your own ideas,you can make many awesome stuff with this SWF site,such as embed the video on the webpage.I have already made it in the [examples file](https://github.com/djyde/VSiteParser/tree/master/examples).


#概述(中文版)#

###VSiteParser是一个中国本土化视频地址解析模块.###

你可以利用它解析如优酷,土豆,56等在线视频地址.

**就像这样:**

![](http://djyde.github.com/img/vsp.png)

##支持##

VSiteParser已经支持的有:

* [优酷](http://www.youku.com)

* [土豆](http://www.tudou.com)

* [56](http://www.56.com)

* [酷6](http://www.ku6.com)

* [凤凰网](http://www.ifeng.com)

* [bilibili](http://www.bilibili.tv)

##使用##

**HTML中**:

```
<script src="../vsparser.js"></script>
```

**Node.js**中:

```
$ npm install vsiteparser
```

```
var vsp = require("vsiteparser");
```

##现在,让代码来诠释一切##

**你需要做的只是像下面一样:**

**HTML中**

```
var swf = vsparser("http://v.youku.com/v_show/id_XMjc3ODU4OTMy.html");
```

**Node.js中**

```
var swf = vsp.vsparser("http://v.youku.com/v_show/id_XMjc3ODU4OTMy.html");
```

**现在你可以尝试输出"swf"这个变量** ( 用 ` document.write(swf) `)**. 你会看到的是:**

` http://player.youku.com/player.php/sid/XMjc3ODU4OTMy/v.swf `


##有何用处?##

通过以上的概述，你也许已经知道，VSiteParser通过一个名叫vsparser的函数，利用你所给的URL参数返回一个flash URL。**这就是VSiteParser的核心部分**，因为只要你能想到，你就能利用这个swf地址做一些非常有趣的事情，比如把在线视频嵌入到你的页面之中。我已经做好了一个例子在 [examples file](https://github.com/djyde/VSiteParser/tree/master/examples) 里提供大家参考。