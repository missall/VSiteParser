##Description##

###VSiteParser is a Chines native video website URL parser.###

With it,you can parse a video URL of some Chines native video website such as Youku,Tudou,56,etc.

##Support##

The web that VSiteParser has supported:

* [Youku](http://www.youku.com)

* [Tudou](http://www.tudou.com)

* [56](http://www.56.com)

* [ku6](http://www.ku6.com)

* [ifeng](http://www.ifeng.com)

##Make it work##

` <script src="../vsparser.js"></script> `

##Now, code describes everything##

**You just need to do a few as follow:**

```
var url = vsparser("http://v.youku.com/v_show/id_XMjc3ODU4OTMy.html");
```

**And now you can try to output the varible "url"** ( to use ` document.write(url) `)**. All you will see is:**

` http://player.youku.com/player.php/sid/XMjc3ODU4OTMy/v.swf `

##Direction##

After the description above,you may already know,there is a function named "VSParser" that return the flash URL of the video URL you given as an argument.**This is the core of VSiteParser** because depending on your own ideas,you can make many awesome stuff with this SWF site,such as embed the video on the webpage.I have already made it in the "examples" file.