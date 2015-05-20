'use strict';

var pathFn = require('path');
var _ = require('lodash');
var url = require('url');
var cheerio = require('cheerio');
var lunr = require('lunr');

var localizedPath = ['docs', 'api'];

function startsWith(str, start){
  return str.substring(0, start.length) === start;
}

hexo.extend.helper.register('page_nav', function(){
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var list = {};
  for (var i in sidebar){
    for (var j in sidebar[i]){
      list[sidebar[i][j]] = j;
    }
  }
  var keys = Object.keys(list);
  var index = keys.indexOf(path);
  var result = '';
  if (index > 0){
    result += '<a href="' + keys[index - 1] + '" class="article-footer-prev" title="' + list[keys[index - 1]] + '">' +
      '<i class="fa fa-chevron-left"></i><span>prev</span></a>';
  }
  if (index < keys.length - 1){
    result += '<a href="' + keys[index + 1] + '" class="article-footer-next" title="' + list[keys[index + 1]] + '">' +
      '<span>next</span><i class="fa fa-chevron-right"></i></a>';
  }
  return result;
});

hexo.extend.helper.register('doc_sidebar', function(className){
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var result = '';
  var self = this;

  result += '<strong class="' + className + '-title">' + type + '</strong>';

  _.each(sidebar, function(link, text){
    var itemClass = className + '-link';
    if (link === path) itemClass += ' current';

    result += '<a href="' + link + '" class="' + itemClass + '">' + text + '</a>';
  })

  return result;
});

hexo.extend.helper.register('header_menu', function(className){
  var menu = this.site.data.menu;
  var result = '';
  var self = this;

  _.each(menu, function (path, title){
    result += '<li class="' + className + '-item">';
    result += '<a href="' + self.url_for(path) + '" class="' + className + '-link">' + title + '</a>';
    result += '</li>';
  });

  return result;
});

hexo.extend.helper.register('raw_link', function(path){
  return 'https://github.com/hexojs/site/edit/master/source/' + path;
});

hexo.extend.helper.register('page_anchor', function(str){
  var $ = cheerio.load(str, {decodeEntities: false});
  var headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return str;

  headings.each(function(){
    var id = $(this).attr('id');

    $(this)
      .addClass('article-heading')
      .append('<a class="article-anchor" href="#' + id + '" aria-hidden="true"></a>');
  });

  return $.html();
});

hexo.extend.helper.register('lunr_index', function(data){
  var index = lunr(function(){
    this.field('name', {boost: 10});
    this.field('tags', {boost: 50});
    this.field('description');
    this.ref('id');
  });

  _.sortBy(data, 'name').forEach(function(item, i){
    index.add(_.assign({id: i}, item));
  });

  return JSON.stringify(index.toJSON());
});