##Description##

###VSiteParser is a Chines native video website URL parser.###

With it,you can parse a video URL of some Chines native video website such as Youku,Tudou,56,etc.

##Now, code describes everything##

**You just need to do a few as follow:**

` var url = VSiteParser("youku","http://v.youku.com/v_show/id_XMjc3ODU4OTMy.html"); `

**And now you can try to output the varible "url"** ( to use ` document.write(url) `)**. All you will see is:**

` http://player.youku.com/player.php/sid/XMjc3ODU4OTMy/v.swf `

##Direction##

After the description above,you may already know,there is a function named "VSiteParser" that return the flash URL of the video URL you given as an argument.

Depending on your own ideas,you can make many awesome stuff with it.

For example,there is an element `<embed>` in HTML5. It is always used to embed multi-media such as flash and mp3 in webpage.