angular.module('portApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .otherwise('/')

    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'views/landing.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'views/projects.html'
    })
    .state('contact',{
      url: '/contact',
      templateUrl: 'views/contact.html'
    })
})
