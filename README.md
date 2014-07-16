stripTags
=========

Strip tags module


Install
--------

```
bower install striptags
```


Require
---------

```
stripTags = require('stripTags');
```


Usage
---------


Strip all tags
```
htmlString = "...some...html...string...";

stripTags(htmlString);
```


More examples
---------


Strip all tags, besides 'b', 'i', and 'br'
```
stripTags.stripAllTags(htmlString, 'b,i,br');
```


Strip all tags, besides 'b', 'i', and 'br' (the same)

```
stripTags(htmlString, false, 'b,i,br');
```


Strip 'b', 'i', and 'br'  tags, besides 'br'

```
stripTags(htmlString, 'b,i,br', 'br');
```



