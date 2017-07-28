'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function tweeks the display functionality of the index.html About section. Its also loads the data from the repos for the new view of it.  This function uses the repoView.index function located in the repoView.js. Its also uses the repos.requestRepos function located in the repo.js file. 
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
