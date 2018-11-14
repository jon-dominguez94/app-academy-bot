

document.addEventListener('DOMContentLoaded', function () {

	// options = document.getElementById('options');
  //
	// options.onclick = function() {
	// 	chrome.tabs.create({ url: chrome.extension.getURL("options.html") });
	// };

  curriculum = document.getElementById('curriculum');
  progress = document.getElementById('progress');
  github = document.getElementById('github');
  slack = document.getElementById('slack');
  server = document.getElementById('server');
  timer = document.getElementById('timer');

	curriculum.onclick = function() {
		window.open("https://github.com/appacademy/curriculum");
	};

	progress.onclick = function() {
		window.open("https://progress.appacademy.io/me");
	};

	github.onclick = function() {
		window.open("https://github.com");
	};

	slack.onclick = function() {
		window.open("https://app-academy.slack.com/messages");
	};

	server.onclick = function() {
		window.open("http://localhost:3000/");
	};

	timer.onclick = function() {
		window.open("http://www.timer-tab.com/");
	};

});
