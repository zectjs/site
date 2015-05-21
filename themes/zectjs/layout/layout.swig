<!DOCTYPE html>
<html lang="{{ page.lang }}">
{{ partial('partial/head') }}
<body class="">
	{% if is_home() %}
		<div id="container">
		{{body}}		
		</div>
	{% else %}
		<div id="container">
	    	{{ partial('partial/header') }}
	    	{{ body }}
	    	{{ partial('partial/footer') }}
	  	</div>
	{% endif %}
  
  	<div id="mobile-nav-dimmer"></div>
  	{{ partial('partial/mobile_nav') }}
  	{{ partial('partial/after_footer') }}
</body>
</html>