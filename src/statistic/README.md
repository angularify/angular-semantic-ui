angularify.semantic.statistic
===============================

`angularify.semantic.statistic` - Semantic Statistic directive using angular.js.

Usage
--------------------
**Statistic:**
```html
<statistic text="Twenty Four" title="My Score" big-text="true" color="purple" size="huge" title-icon="expand" ></statistic>
```
**A Group of statistics:**
````html
<statistics horizontal="true">
	<statistic text="Twenty Four" title="My Score" big-text="true" color="purple" size="huge" title-icon="expand" ></statistic>
	<statistic text="24" title="My Score" title-top="false" color="blue" text-icon="plane" ></statistic>
</statistics>
````

`Statistic` - can have following attributes:

* `title` - Label of the Statistic,
* `text` - Text of the Statistic,
* `titleTop` - Position of the title/label attribute,
* `bigText` - Makes the text bigger to fit the statistic container,
* `color` - Color of the Text value,
* `horizontal` - '*true*' will enable text anad label to be horizontal,
* `invert` - inverts the color of the statisctic,
* `float` - floating position of the statistic '*left*/*right*',
* `size` - size of the statistic itself '*mini*/*tiny*/*small*/*large*/*huge*',
* `titleIcon` - icons to display with title attribute. see above for reference,
* `titleImg` - displays an image with title (must be a url to image with format),
* `textIcon` - icons to display with text attribute. see above for reference,,
* `textImg` - displays an image with text (must be a url to image with format)

`Statistics` - can have following attributes:

* `horizontal` - '*true*/*false*' for grouping the statistics horizontally
