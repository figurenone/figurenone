// .eleventy.js
const dateFilter = require("nunjucks-date-filter");

module.exports = function(eleventyConfig) {
  // make the date filter available in ALL template engines
  eleventyConfig.addFilter("date", dateFilter);
  // also make it explicitly available to Nunjucks
  eleventyConfig.addNunjucksFilter("date", dateFilter);

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input:      "src",
      includes:   "_includes",
      data:       "_data",
      output:     "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine:     "njk",
    dataTemplateEngine:     "njk",
    templateFormats:        ["njk", "md", "html"]
  };
};