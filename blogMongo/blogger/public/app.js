var app = angular.module('heros',['ngRoute']);

//creating the router. 
//add heroes:
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/jobs',{
			templateUrl: 'views/jobs.view.html',
			controller: 'JobCtrl'
		}).
		when('/heros',{
			templateUrl: 'views/heros.view.html',
			controller: 'HerosCtrl'
		}).
		// when('/articles/details/:id',{
		// 	templateUrl: 'views/article_details.view.html',
		// 	controller: 'ArticleDetailsCtrl'
		// }).
		// when('/articles/category/:category',{
		// 	templateUrl: 'views/cat_articles.view.html',
		// 	controller: 'ArticlesCategoryCtrl'
		// }).
		// when('/categories',{
		// 	templateUrl: 'views/categories.view.html',
		// 	controller: 'CategoriesCtrl'
		// }).
		when('/heros/add',{
		 	templateUrl: 'views/add_hero.view.html',
		 	controller: 'ArticleCreateCtrl'
		 }).
		// when('/articles/edit/:id',{
		// 	templateUrl: 'views/edit_article.view.html',
		// 	controller: 'ArticleEditCtrl'
		// }).
		otherwise({redirectTo: '/'});
}]);