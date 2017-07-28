'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        //This function uses Handlebars to compile the template use to hold the author and the number of words of all articles from that author. It then parses Articles for the name and number of words before adding and appending it to the template located in the UL with a class of author-stats. It also adds data from articles to the children of the section with the ID blog-stats. It uses the functions Article.numWordsByAuthor and Article.all.length, both live in the article.js file. 
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
