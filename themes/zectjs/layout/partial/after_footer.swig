<!-- Scripts -->
<!-- build:js build/js/main.js -->

{% if is_home() %}

{% else %}
	{{ js('js/toc') }}
	{{ js('js/mobile_nav') }}
{% endif %}
<!-- endbuild -->
<script src="//cdn.jsdelivr.net/retinajs/1.1.0/retina.min.js" async></script>

{% if page.layout === 'plugins' %}
<!-- Plugin search -->
<script src="//cdn.jsdelivr.net/lunr/0.5.7/lunr.min.js"></script>
<!-- build:js build/js/plugins.js -->
{{ js('js/plugins') }}
<!-- endbuild -->
{% endif %}