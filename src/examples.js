const sample = `
<!DOCTYPE html>
<html class=no-js lang=en>

<head>
  <meta charset=utf-8>
  <meta content='IE=edge' http-equiv=X-UA-Compatible>
  <title>Sass: Sass Basics</title>
  <meta content='Syntatically Awesome Style Sheets' name=description>
  <meta content='width=device-width, initial-scale=1' name=viewport>
  <link href="style.css" rel="stylesheet">
</head>

<body class='guide guide_index'>
  <div class=page>
    <!--[if lt IE 8]><div class=alert role=alert> <div class=container> <p class=browsehappy> You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience. </p> </div> </div><![endif]-->
    <div class='alert stickers'>
      <div class=container>
        <p> <strong>Your laptop needs more Sass.</strong> <a href="http://devswag.com/products/sass-stickers-4">Grab a
            set of Sass stickers now</a>. </p>
      </div>
    </div>
    <div class=pop-stripe></div>
    <header class=banner role=banner>
      <div class=container>
        <h1 class=site-brand><a href="/"><img height=48 alt=Sass src="a.svg" /></a></h1>
        <nav class='navigation collapse' role=navigation>
          <ul>
            <li><a href="/install">Install</a></li>
            <li><a href="/guide">Learn Sass</a></li>
            <li><a href="http://blog.sass-lang.com/">Blog</a></li>
            <li><a href="../documentation/file.SASS_REFERENCE.html">Documentation</a></li>
            <li><a href="/community">Get Involved</a></li>
          </ul>
        </nav>
        <div class=banner-toggle> <button data-target='.navigation' data-toggle=collapse type=button> <span
              class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> </div>
      </div>
    </header>
    <div class=page-header>
      <div class=container>
        <h1> Favorite Dinosaurs </h1>
      </div>
    </div>
    <div class=body>
      <div class=container>
        <div class=content>
          <main class='main content-primary' role=main>
            <p class=introduction> Before you can use Sass, you need to set it up on your project. If you want to just
              browse here, go ahead, but we recommend you go install Sass first. <a href="/install">Go here</a> if you
              want to learn how to get everything setup. </p>
            <ul class=slides>
              <li id=topic-1>
                <h2>Preprocessing</h2>
                <p>CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain.
                  This is where a preprocessor can help. Sass lets you use features that don&#39;t exist in CSS yet like
                  variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.</p>
                <p>Once you start tinkering with Sass, it will take your preprocessed Sass file and save it as a normal
                  CSS file that you can use in your website.</p>
                <p>The most direct way to make this happen is in your terminal. Once Sass is installed, you can compile
                  your Sass to CSS using the <code>sass</code> command. You&#39;ll need to tell Sass which file to build
                  from, and where to output CSS to. For example, running <code>sass input.scss output.css</code> from
                  your terminal would take a single Sass file, <code>input.scss</code>, and compile that file to
                  <code>output.css</code>.</p>
                <p>You can also watch individual files or directories with the <code>--watch</code> flag. The watch flag
                  tells Sass to watch your source files for changes, and re-compile CSS each time you save your Sass. If
                  you wanted to watch (instead of manually build) your <code>input.scss</code> file, you&#39;d just add
                  the watch flag to your command, like so:</p>
                <p><code>sass --watch input.scss output.css</code></p>
                <p>You can watch and output to directories by using folder paths as your input and output, and
                  separating them with a colon. In this example:</p>
                <pre class="highlight plaintext"><code>sass --watch app/sass:public/stylesheets&#x000A;</code></pre>
                <p>Sass would watch all files in the <code>app/sass</code> folder for changes, and compile CSS to the
                  <code>public/stylesheets</code> folder.</p>
                <hr>
              </li>
              <li id=topic-2>
                <h2>Variables</h2>
                <p>Think of variables as a way to store information that you want to reuse throughout your stylesheet.
                  You can store things like colors, font stacks, or any CSS value you think you&#39;ll want to reuse.
                  Sass uses the <code>$</code> symbol to make something a variable. Here&#39;s an example:</p>
                <div class=code-example data-unique-id=1>
                  <div id=example-1-scss class=scss>
                    <h3>SCSS Syntax</h3>
                    <pre style='padding-bottom: -1em'
                      class="highlight scss"><code><span class="nv">$font-stack</span><span class="p">:</span>    <span class="n">Helvetica</span><span class="o">,</span> <span class="nb">sans-serif</span><span class="p">;</span>&#x000A;<span class="nv">$primary-color</span><span class="p">:</span> <span class="mh">#333</span><span class="p">;</span>&#x000A;&#x000A;<span class="nt">body</span> <span class="p">{</span>&#x000A;  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="nv">$font-stack</span><span class="p">;</span>&#x000A;  <span class="nl">color</span><span class="p">:</span> <span class="nv">$primary-color</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-1-sass class=sass>
                    <h3>Sass Syntax</h3>
                    <pre style='padding-bottom: 3em'
                      class="highlight sass"><code><span class="nv">$font-stack</span><span class="p">:</span>    <span class="n">Helvetica</span><span class="o">,</span> <span class="nb">sans-serif</span>&#x000A;<span class="nv">$primary-color</span><span class="p">:</span> <span class="mh">#333</span>&#x000A;&#x000A;<span class="nt">body</span>&#x000A;  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="nv">$font-stack</span>&#x000A;  <span class="nl">color</span><span class="p">:</span> <span class="nv">$primary-color</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-1-css class=css>
                    <h3>CSS Output</h3>
                    <pre style='padding-bottom: 7em'
                      class="highlight css"><code><span class="nt">body</span> <span class="p">{</span>&#x000A;  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="n">Helvetica</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>&#x000A;  <span class="nl">color</span><span class="p">:</span> <span class="m">#333</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                </div>
                <p>When the Sass is processed, it takes the variables we define for the <code>$font-stack</code> and
                  <code>$primary-color</code> and outputs normal CSS with our variable values placed in the CSS. This
                  can be extremely powerful when working with brand colors and keeping them consistent throughout
                  the&nbsp;site.</p>
                <hr>
              </li>
              <li id=topic-3>
                <h2>Nesting</h2>
                <p>When writing HTML you&#39;ve probably noticed that it has a clear nested and visual hierarchy. CSS,
                  on the other hand, doesn&#39;t.</p>
                <p>Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your
                  HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to
                  maintain and is generally considered bad practice.</p>
                <p>With that in mind, here&#39;s an example of some typical styles for a site&#39;s&nbsp;navigation:</p>
                <div class=code-example data-unique-id=2>
                  <div id=example-2-scss class=scss>
                    <h3>SCSS Syntax</h3>
                    <pre style='padding-bottom: -3em'
                      class="highlight scss"><code><span class="nt">nav</span> <span class="p">{</span>&#x000A;  <span class="nt">ul</span> <span class="p">{</span>&#x000A;    <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>&#x000A;    <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>&#x000A;    <span class="nl">list-style</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>&#x000A;  <span class="p">}</span>&#x000A;&#x000A;  <span class="nt">li</span> <span class="p">{</span> <span class="nl">display</span><span class="p">:</span> <span class="n">inline-block</span><span class="p">;</span> <span class="p">}</span>&#x000A;&#x000A;  <span class="nt">a</span> <span class="p">{</span>&#x000A;    <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>&#x000A;    <span class="nl">padding</span><span class="p">:</span> <span class="m">6px</span> <span class="m">12px</span><span class="p">;</span>&#x000A;    <span class="nl">text-decoration</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>&#x000A;  <span class="p">}</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-2-sass class=sass>
                    <h3>Sass Syntax</h3>
                    <pre style='padding-bottom: 5em'
                      class="highlight sass"><code><span class="nt">nav</span>&#x000A;  <span class="nt">ul</span>&#x000A;    <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span>&#x000A;    <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span>&#x000A;    <span class="nl">list-style</span><span class="p">:</span> <span class="nb">none</span>&#x000A;&#x000A;  <span class="nt">li</span>&#x000A;    <span class="nl">display</span><span class="p">:</span> <span class="n">inline-block</span>&#x000A;&#x000A;  <span class="nt">a</span>&#x000A;    <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span>&#x000A;    <span class="nl">padding</span><span class="p">:</span> <span class="m">6px</span> <span class="m">12px</span>&#x000A;    <span class="nl">text-decoration</span><span class="p">:</span> <span class="nb">none</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-2-css class=css>
                    <h3>CSS Output</h3>
                    <pre style='padding-bottom: 5em'
                      class="highlight css"><code><span class="nt">nav</span> <span class="nt">ul</span> <span class="p">{</span>&#x000A;  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>&#x000A;  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>&#x000A;  <span class="nl">list-style</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;<span class="nt">nav</span> <span class="nt">li</span> <span class="p">{</span>&#x000A;  <span class="nl">display</span><span class="p">:</span> <span class="n">inline-block</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;<span class="nt">nav</span> <span class="nt">a</span> <span class="p">{</span>&#x000A;  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>&#x000A;  <span class="nl">padding</span><span class="p">:</span> <span class="m">6px</span> <span class="m">12px</span><span class="p">;</span>&#x000A;  <span class="nl">text-decoration</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                </div>
                <p>You&#39;ll notice that the <code>ul</code>, <code>li</code>, and <code>a</code> selectors are nested
                  inside the <code>nav</code> selector. This is a great way to organize your CSS and make it more
                  readable.</p>
                <hr>
              </li>
              <li id=topic-4>
                <h2>Partials</h2>
                <p>You can create partial Sass files that contain little snippets of CSS that you can include in other
                  Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A
                  partial is simply a Sass file named with a leading underscore. You might name it something like
                  <code>_partial.scss</code>. The underscore lets Sass know that the file is only a partial file and
                  that it should not be generated into a CSS file. Sass partials are used with the <code>@import</code>
                  directive.</p>
                <hr>
              </li>
              <li id=topic-5>
                <h2>Import</h2>
                <p>CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The
                  only drawback is that each time you use <code>@import</code> in CSS it creates another HTTP request.
                  Sass builds on top of the current CSS <code>@import</code> but instead of requiring an HTTP request,
                  Sass will take the file that you want to import and combine it with the file you&#39;re importing into
                  so you can serve a single CSS file to the web browser.</p>
                <p>Let&#39;s say you have a couple of Sass files, <code>_reset.scss</code> and <code>base.scss</code>.
                  We want to import <code>_reset.scss</code> into <code>base.scss</code>.</p>
                <div class=code-example data-unique-id=3>
                  <div id=example-3-scss class=scss>
                    <h3>SCSS Syntax</h3>
                    <pre
                      class="highlight scss"><code><span class="c1">// _reset.scss&#x000A;</span>&#x000A;<span class="nt">html</span><span class="o">,</span>&#x000A;<span class="nt">body</span><span class="o">,</span>&#x000A;<span class="nt">ul</span><span class="o">,</span>&#x000A;<span class="nt">ol</span> <span class="p">{</span>&#x000A;  <span class="nl">margin</span><span class="p">:</span>  <span class="m">0</span><span class="p">;</span>&#x000A;  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                    <pre style='padding-bottom: -1em'
                      class="highlight scss"><code><span class="c1">// base.scss&#x000A;</span>&#x000A;<span class="k">@import</span> <span class="s1">'reset'</span><span class="p">;</span>&#x000A;&#x000A;<span class="nt">body</span> <span class="p">{</span>&#x000A;  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="n">Helvetica</span><span class="o">,</span> <span class="nb">sans-serif</span><span class="p">;</span>&#x000A;  <span class="nl">background-color</span><span class="p">:</span> <span class="mh">#efefef</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-3-sass class=sass>
                    <h3>Sass Syntax</h3>
                    <pre style='padding-bottom: 3em'
                      class="highlight sass"><code><span class="c1">// _reset.sass&#x000A;</span>&#x000A;<span class="nt">html</span><span class="o">,</span>&#x000A;<span class="nt">body</span><span class="o">,</span>&#x000A;<span class="nt">ul</span><span class="o">,</span>&#x000A;<span class="nt">ol</span>&#x000A;  <span class="nl">margin</span><span class="p">:</span>  <span class="m">0</span>&#x000A;  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span>&#x000A;</code></pre>
                    <pre style='padding-bottom: 3em'
                      class="highlight sass"><code><span class="c1">// base.sass&#x000A;</span>&#x000A;<span class="k">@import</span> <span class="s">reset</span>&#x000A;&#x000A;<span class="nt">body</span>&#x000A;  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="n">Helvetica</span><span class="o">,</span> <span class="nb">sans-serif</span>&#x000A;  <span class="nl">background-color</span><span class="p">:</span> <span class="mh">#efefef</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-3-css class=css>
                    <h3>CSS Output</h3>
                    <pre style='padding-bottom: 15em'
                      class="highlight css"><code><span class="nt">html</span><span class="o">,</span>&#x000A;<span class="nt">body</span><span class="o">,</span>&#x000A;<span class="nt">ul</span><span class="o">,</span>&#x000A;<span class="nt">ol</span> <span class="p">{</span>&#x000A;  <span class="nl">margin</span><span class="p">:</span>  <span class="m">0</span><span class="p">;</span>&#x000A;  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nt">body</span> <span class="p">{</span>&#x000A;  <span class="nl">font</span><span class="p">:</span> <span class="m">100%</span> <span class="n">Helvetica</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>&#x000A;  <span class="nl">background-color</span><span class="p">:</span> <span class="m">#efefef</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                </div>
                <p>Notice we&#39;re using <code>@import &#39;reset&#39;;</code> in the <code>base.scss</code> file. When
                  you import a file you don&#39;t need to include the file extension <code>.scss</code>. Sass is smart
                  and will figure it out for you.</p>
                <hr>
              </li>
              <li id=topic-6>
                <h2>Mixins</h2>
                <p>Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that
                  exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.
                  You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor
                  prefixes. Here&#39;s an example for <code>transform</code>.</p>
                <div class=code-example data-unique-id=4>
                  <div id=example-4-scss class=scss>
                    <h3>SCSS Syntax</h3>
                    <pre style='padding-bottom: 1em'
                      class="highlight scss"><code><span class="k">@mixin</span> <span class="nf">transform</span><span class="p">(</span><span class="nv">$property</span><span class="p">)</span> <span class="p">{</span>&#x000A;  <span class="na">-webkit-transform</span><span class="p">:</span> <span class="nv">$property</span><span class="p">;</span>&#x000A;  <span class="na">-ms-transform</span><span class="p">:</span> <span class="nv">$property</span><span class="p">;</span>&#x000A;  <span class="nl">transform</span><span class="p">:</span> <span class="nv">$property</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nc">.box</span> <span class="p">{</span> <span class="k">@include</span> <span class="nd">transform</span><span class="p">(</span><span class="nf">rotate</span><span class="p">(</span><span class="m">30deg</span><span class="p">));</span> <span class="p">}</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-4-sass class=sass>
                    <h3>Sass Syntax</h3>
                    <pre style='padding-bottom: 1em'
                      class="highlight sass"><code><span class="nf">=transform</span><span class="p">(</span><span class="nv">$property</span><span class="p">)</span>&#x000A;  <span class="na">-webkit-transform</span><span class="p">:</span> <span class="nv">$property</span>&#x000A;  <span class="na">-ms-transform</span><span class="p">:</span> <span class="nv">$property</span>&#x000A;  <span class="nl">transform</span><span class="p">:</span> <span class="nv">$property</span>&#x000A;&#x000A;<span class="nc">.box</span>&#x000A;  <span class="nd">+transform</span><span class="p">(</span><span class="nf">rotate</span><span class="p">(</span><span class="m">30deg</span><span class="p">))</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-4-css class=css>
                    <h3>CSS Output</h3>
                    <pre style='padding-bottom: 5em'
                      class="highlight css"><code><span class="nc">.box</span> <span class="p">{</span>&#x000A;  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="n">rotate</span><span class="p">(</span><span class="m">30deg</span><span class="p">);</span>&#x000A;  <span class="nl">-ms-transform</span><span class="p">:</span> <span class="n">rotate</span><span class="p">(</span><span class="m">30deg</span><span class="p">);</span>&#x000A;  <span class="nl">transform</span><span class="p">:</span> <span class="n">rotate</span><span class="p">(</span><span class="m">30deg</span><span class="p">);</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                </div>
                <p>To create a mixin you use the <code>@mixin</code> directive and give it a name. We&#39;ve named our
                  mixin <code>transform</code>. We&#39;re also using the variable <code>$property</code> inside the
                  parentheses so we can pass in a transform of whatever we want. After you create your mixin, you can
                  then use it as a CSS declaration starting with <code>@include</code> followed by the name of the
                  mixin.</p>
                <hr>
              </li>
              <li id=topic-7>
                <h2>Extend/Inheritance</h2>
                <p>This is one of the most useful features of Sass. Using <code>@extend</code> lets you share a set of
                  CSS properties from one selector to another. It helps keep your Sass very DRY. In our example
                  we&#39;re going to create a simple series of messaging for errors, warnings and successes using
                  another feature which goes hand in hand with extend, placeholder classes. A placeholder class is a
                  special type of class that only prints when it is extended, and can help keep your compiled CSS neat
                  and clean.</p>
                <div class=code-example data-unique-id=5>
                  <div id=example-5-scss class=scss>
                    <h3>SCSS Syntax</h3>
                    <pre style='padding-bottom: -1em'
                      class="highlight scss"><code><span class="cm">/* This CSS will print because %message-shared is extended. */</span>&#x000A;<span class="nv">%message-shared</span> <span class="p">{</span>&#x000A;  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="mh">#ccc</span><span class="p">;</span>&#x000A;  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>&#x000A;  <span class="nl">color</span><span class="p">:</span> <span class="mh">#333</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="c1">// This CSS won't print because %equal-heights is never extended.&#x000A;</span><span class="nv">%equal-heights</span> <span class="p">{</span>&#x000A;  <span class="nl">display</span><span class="p">:</span> <span class="n">flex</span><span class="p">;</span>&#x000A;  <span class="nl">flex-wrap</span><span class="p">:</span> <span class="n">wrap</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nc">.message</span> <span class="p">{</span>&#x000A;  <span class="k">@extend</span> <span class="nv">%message-shared</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nc">.success</span> <span class="p">{</span>&#x000A;  <span class="k">@extend</span> <span class="nv">%message-shared</span><span class="p">;</span>&#x000A;  <span class="nl">border-color</span><span class="p">:</span> <span class="no">green</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nc">.error</span> <span class="p">{</span>&#x000A;  <span class="k">@extend</span> <span class="nv">%message-shared</span><span class="p">;</span>&#x000A;  <span class="nl">border-color</span><span class="p">:</span> <span class="no">red</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nc">.warning</span> <span class="p">{</span>&#x000A;  <span class="k">@extend</span> <span class="nv">%message-shared</span><span class="p">;</span>&#x000A;  <span class="nl">border-color</span><span class="p">:</span> <span class="no">yellow</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-5-sass class=sass>
                    <h3>Sass Syntax</h3>
                    <pre style='padding-bottom: 3em'
                      class="highlight sass"><code><span class="cm">/* This CSS will print because %message-shared is extended. */&#x000A;</span><span class="nv">%message-shared</span>&#x000A;  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="mh">#ccc</span>&#x000A;  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span>&#x000A;  <span class="nl">color</span><span class="p">:</span> <span class="mh">#333</span>&#x000A;&#x000A;&#x000A;<span class="c1">// This CSS won't print because %equal-heights is never extended.&#x000A;</span><span class="nv">%equal-heights</span>&#x000A;  <span class="nl">display</span><span class="p">:</span> <span class="n">flex</span>&#x000A;  <span class="nl">flex-wrap</span><span class="p">:</span> <span class="n">wrap</span>&#x000A;&#x000A;&#x000A;<span class="nc">.message</span>&#x000A;  <span class="k">@extend</span> <span class="nv">%message-shared</span>&#x000A;&#x000A;&#x000A;<span class="nc">.success</span>&#x000A;  <span class="k">@extend</span> <span class="nv">%message-shared</span>&#x000A;  <span class="nl">border-color</span><span class="p">:</span> <span class="no">green</span>&#x000A;&#x000A;&#x000A;<span class="nc">.error</span>&#x000A;  <span class="k">@extend</span> <span class="nv">%message-shared</span>&#x000A;  <span class="nl">border-color</span><span class="p">:</span> <span class="no">red</span>&#x000A;&#x000A;&#x000A;<span class="nc">.warning</span>&#x000A;  <span class="k">@extend</span> <span class="nv">%message-shared</span>&#x000A;  <span class="nl">border-color</span><span class="p">:</span> <span class="no">yellow</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-5-css class=css>
                    <h3>CSS Output</h3>
                    <pre style='padding-bottom: 27em'
                      class="highlight css"><code><span class="c">/* This CSS will print because %message-shared is extended. */</span>&#x000A;<span class="nc">.message</span><span class="o">,</span> <span class="nc">.success</span><span class="o">,</span> <span class="nc">.error</span><span class="o">,</span> <span class="nc">.warning</span> <span class="p">{</span>&#x000A;  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="m">#ccc</span><span class="p">;</span>&#x000A;  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>&#x000A;  <span class="nl">color</span><span class="p">:</span> <span class="m">#333</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nc">.success</span> <span class="p">{</span>&#x000A;  <span class="nl">border-color</span><span class="p">:</span> <span class="no">green</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nc">.error</span> <span class="p">{</span>&#x000A;  <span class="nl">border-color</span><span class="p">:</span> <span class="no">red</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nc">.warning</span> <span class="p">{</span>&#x000A;  <span class="nl">border-color</span><span class="p">:</span> <span class="no">yellow</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                </div>
                <p>What the above code does is tells <code>.message</code>, <code>.success</code>, <code>.error</code>,
                  &amp; <code>.warning</code> to behave just like <code>%message-shared</code>. That means anywhere that
                  <code>%message-shared</code> shows up, <code>.message</code>, <code>.success</code>,
                  <code>.error</code>, &amp; <code>.warning</code> will too. The magic happens in the generated CSS,
                  where each of these classes will get the same CSS properties as <code>%message-shared</code>. This
                  helps you avoid having to write multiple class names on HTML elements.</p>
                <p>You can extend most simple CSS selectors in addition to placeholder classes in Sass, but using
                  placeholders is the easiest way to make sure you aren&#39;t extending a class that&#39;s nested
                  elsewhere in your styles, which can result in unintended selectors in your CSS.</p>
                <p>Note that the CSS in <code>%equal-heights</code> isn&#39;t generated, because
                  <code>%equal-heights</code> is never extended.</p>
                <hr>
              </li>
              <li id=topic-8>
                <h2>Operators</h2>
                <p>Doing math in your CSS is very helpful. Sass has a handful of standard math operators like
                  <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, and <code>%</code>. In our example
                  we&#39;re going to do some simple math to calculate widths for an <code>aside</code> &amp;
                  <code>article</code>.</p>
                <div class=code-example data-unique-id=6>
                  <div id=example-6-scss class=scss>
                    <h3>SCSS Syntax</h3>
                    <pre style='padding-bottom: 1em'
                      class="highlight scss"><code><span class="nc">.container</span> <span class="p">{</span>&#x000A;  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nt">article</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="s2">"main"</span><span class="o">]</span> <span class="p">{</span>&#x000A;  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>&#x000A;  <span class="nl">width</span><span class="p">:</span> <span class="m">600px</span> <span class="o">/</span> <span class="m">960px</span> <span class="o">*</span> <span class="m">100%</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nt">aside</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="s2">"complementary"</span><span class="o">]</span> <span class="p">{</span>&#x000A;  <span class="nl">float</span><span class="p">:</span> <span class="nb">right</span><span class="p">;</span>&#x000A;  <span class="nl">width</span><span class="p">:</span> <span class="m">300px</span> <span class="o">/</span> <span class="m">960px</span> <span class="o">*</span> <span class="m">100%</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-6-sass class=sass>
                    <h3>Sass Syntax</h3>
                    <pre style='padding-bottom: 3em'
                      class="highlight sass"><code><span class="nc">.container</span>&#x000A;  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span>&#x000A;&#x000A;&#x000A;<span class="nt">article</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="s2">"main"</span><span class="o">]</span>&#x000A;  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span>&#x000A;  <span class="nl">width</span><span class="p">:</span> <span class="m">600px</span> <span class="o">/</span> <span class="m">960px</span> <span class="o">*</span> <span class="m">100%</span>&#x000A;&#x000A;&#x000A;<span class="nt">aside</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="s2">"complementary"</span><span class="o">]</span>&#x000A;  <span class="nl">float</span><span class="p">:</span> <span class="nb">right</span>&#x000A;  <span class="nl">width</span><span class="p">:</span> <span class="m">300px</span> <span class="o">/</span> <span class="m">960px</span> <span class="o">*</span> <span class="m">100%</span>&#x000A;</code></pre>
                  </div>
                  <div id=example-6-css class=css>
                    <h3>CSS Output</h3>
                    <pre style='padding-bottom: 1em'
                      class="highlight css"><code><span class="nc">.container</span> <span class="p">{</span>&#x000A;  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nt">article</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="s1">"main"</span><span class="o">]</span> <span class="p">{</span>&#x000A;  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>&#x000A;  <span class="nl">width</span><span class="p">:</span> <span class="m">62.5%</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;&#x000A;<span class="nt">aside</span><span class="o">[</span><span class="nt">role</span><span class="o">=</span><span class="s1">"complementary"</span><span class="o">]</span> <span class="p">{</span>&#x000A;  <span class="nl">float</span><span class="p">:</span> <span class="nb">right</span><span class="p">;</span>&#x000A;  <span class="nl">width</span><span class="p">:</span> <span class="m">31.25%</span><span class="p">;</span>&#x000A;<span class="p">}</span>&#x000A;</code></pre>
                  </div>
                </div>
                <p>We&#39;ve created a very simple fluid grid, based on 960px. Operations in Sass let us do something
                  like take pixel values and convert them to percentages without much hassle.</p>
              </li>
            </ul>
          </main>
          <div class='complementary content-secondary' role=complementary>
            <h3>Topics</h3>
            <ul class=anchors>
              <li><a href="#topic-1">Preprocessing</a></li>
              <li><a href="#topic-2">Variables</a></li>
              <li><a href="#topic-3">Nesting</a></li>
              <li><a href="#topic-4">Partials</a></li>
              <li><a href="#topic-5">Import</a></li>
              <li><a href="#topic-6">Mixins</a></li>
              <li><a href="#topic-7">Inheritance</a></li>
              <li><a href="#topic-8">Operators</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class='alert release'>
      <div class=container>
        <ul>
          <li>Current Releases:</li>
          <li> <span class=release-name><a href="/dart-sass">Dart Sass</a>&#32;<a
                href="https://github.com/sass/dart-sass/releases/tag/1.19.0">1.19.0</a></span> </li>
          <li> <span class=release-name><a href="/libsass">LibSass</a>&#32;<a
                href="https://github.com/sass/libsass/releases/tag/3.5.5">3.5.5</a></span> </li>
          <li> <span class=release-name><a href="/ruby-sass">Ruby Sass</a>&#32; ⚰</span> </li>
          <li><a href="/implementation">Implementation Guide</a></li>
        </ul>
      </div>
    </div>
  </div>
  <footer class=contentinfo role=contentinfo>
    <nav class=container>
      <ul>
        <li class=contentinfo-legal>
          <p>Sass &copy; 2006&ndash;2019 <a href="http://www.hamptoncatlin.com/">Hampton Catlin</a>, <a
              href="https://twitter.com/nex3">Natalie Weizenbaum</a>, <a
              href="http://chriseppstein.github.io/">Chris&nbsp;Eppstein</a>, and&nbsp;numerous&nbsp;contributors.</p>
          <p>It is available for use and modification under the <a
              href="https://github.com/sass/dart-sass/blob/master/LICENSE">MIT&nbsp;License</a>.</p>
        </li>
        <li class=contentinfo-tools>
          <ul>
            <li><a href="https://github.com/sass">Sass on GitHub</a></li>
            <li><a href="https://github.com/sass/sass-site">Website Repo</a></li>
            <li><a href="/styleguide">Style Guide</a></li>
            <li><a href="/community-guidelines">Community Guidelines</a></li>
          </ul>
        </li>
        <li class=contentinfo-social> <a class=twitter-follow-button data-show-count=false data-size=large
            href='https://twitter.com/SassCSS'>Follow @SassCSS</a>
          <script>
            !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');
          </script>
        </li>
      </ul>
    </nav>
  </footer>
  <script src="../assets/js/sass-86e6702e.js"></script>
</body>

</html>
`;

export default sample;