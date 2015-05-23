<!DOCTYPE html>
<html lang="en">
{{ partial('partial/head') }}
<body>

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
  	<div id="mobile-nav-dimmer"></div>
  	{{ partial('partial/mobile_nav') }}
{% endif %}
 
{{ partial('partial/after_footer') }}
</body>
</html>