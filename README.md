# novi-plugin-material-parallax
Novi Builder Plugin for visual [Materialize Parallax](http://materializecss.com/parallax-demo.html) customization

## How to Install
You should follow several simple steps to intall this plugin:
* Copy the novi-plugin-material-parallax.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder

## What you are able to do
* Change parallax background image

## Developer Settings
* querySelector — containes a css selector which defines the Plugin container.

## How to add Materialize Parallax on your page
If your website doesn't contain Materialize Parallax follow the instructions below to install it.

### Include Materialize Parallax files to Website
Copy the "assets/materialize-parallax.js" and "assets/materialize-parallax.css" to website's JS and CSS folders respectively and include this files to your website.

### Add Materialize Parallax HTML Layout
Add basic Materialize Parallax HTML Layout:

```html
<section class="section parallax-container" data-parallax-img="images/blank.png">
  <div class="parallax-content">
    ...
  </div>
</section>
```

Markup in given block may be any, including elements of the grid, etc. It is only necessary presence element with class "parallax-container" and attribute data-parallax-img.
You can find more detailed information about parallax html markup in the [official documentation](http://materializecss.com/parallax-demo.html)

Example of Materialize Parallax markup using [Bootstrap](http://getbootstrap.com/) and [Font Awesome](http://fontawesome.io/):

```html
<section class="section parallax-container" data-parallax-img="images/bg-01.jpg">
  <div class="parallax-content well-lg">
      <div class="container">
        <h2>What Clients Say</h2>
        <div class="row">
          <div class="col-sm-6">
            <blockquote>
              <cite>July Mao</cite>
              <q>Thank you very much for your rapid response. It's no doubt that your company is worth admiring! I have experienced the fastest support ever.</q>
            </blockquote>
          </div>
          <div class="col-sm-6">
            <blockquote>
              <cite>July Mao</cite>
              <q>Thank you very much for your rapid response. It's no doubt that your company is worth admiring! I have experienced the fastest support ever.</q>
            </blockquote>
          </div>
        </div>
      </div>
  </div>
</section>
```

### Initialize RD Twitterfeed
```js
/**
 * Global variables
 */
"use strict";

  var materialParallax = $(".parallax-container"),
      userAgent = navigator.userAgent.toLowerCase(),
      isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
      isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/**
 * Initialize All Scripts
 */
$document.ready(function () {
    var isNoviBuilder = window.xMode;
  /**
       * Material Parallax
       * @description Enables Material Parallax plugin
       */
      if (materialParallax.length) {
        var i;
  
        if (!isNoviBuilder && !isIE && !isMobile) {
          materialParallax.parallax();
        } else {
          for (i = 0; i < materialParallax.length; i++) {
            var parallax = $(materialParallax[i]),
              imgPath = parallax.data("parallax-img");
  
            parallax.css({
              "background-image": 'url(' + imgPath + ')',
              "background-attachment": "fixed",
              "background-size": "cover"
            });
          }
        }
      }
});
```