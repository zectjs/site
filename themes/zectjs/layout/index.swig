<header id="banner" class="wrapper">
  <div class="inner">
    <h2 id="banner-title">{{ page.subtitle }}</h2>

    <div id="banner-start">
      <span id="banner-start-command">npm install hexo-cli -g</span>
      <a id="banner-start-link" href="docs/">
        <i class="fa fa-arrow-right"></i>
      </a>
    </div>

    <div id="banner-share">{{ partial('partial/share') }}</div>
  </div>
</header>

<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      {{ page.content }}

      <div id="intro-cmd-wrap">
        <h4>You should try it out if you like:</h4>
        <ul>
          <li class="intro-cmd-item">Extendable Data bindings</li>
          <li class="intro-cmd-item">Plain JS object models</li>
          <li class="intro-cmd-item">API that simply makes sense</li>
          <li class="intro-cmd-item">Build UI by composing components</li>
          <li class="intro-cmd-item">Mix & matching small libraries</li>
        </ul>  
      </div>
      <div id="intro-get-started-wrap">
        <a href="guile/" id="intro-get-started-link">GET STARTED</a>
      </div>
    </div>
  </div>
</div>