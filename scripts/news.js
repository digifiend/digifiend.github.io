/*
 * news Page
 */ 

fetch(API.getNewsEngadget).then(function(response){
	return response.json();
})
.then(function(json){
	displayData(json,0,'.headline-news');
	displayData(json,0,'#recent-news-news2');
	displayData(json,1,'#recent-news-news4');
	displayData(json,2,'#recent-news-news6');
	displayData(json,3,'#recent-news-news8');
	displayData(json,4,'#recent-news-news10');
	
	fetch(API.getNewsTechcrunch).then(function(response){
		return response.json();
	})
	.then(function(json){
		displayData(json,0,'#recent-news-news1');
		displayData(json,1,'#recent-news-news3');
		displayData(json,2,'#recent-news-news5');
		displayData(json,3,'#recent-news-news7');
		displayData(json,4,'#recent-news-news9');
	});
	
});

var btn = document.querySelector('#load-news');

// define lexical var for callback param (using closure)
var parent = '#news-section';
var category = 'news';
btn.addEventListener('click',addArticles(parent,category));

