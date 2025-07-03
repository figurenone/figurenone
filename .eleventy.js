// .eleventy.js
const dateFilter = require("nunjucks-date-filter");

module.exports = function(eleventyConfig) {
  // register your date filter…
  eleventyConfig.addFilter("date", dateFilter);
  eleventyConfig.addNunjucksFilter("date", dateFilter);

  // copy your assets if you have them
  eleventyConfig.addPassthroughCopy("src/assets");

  // *** ADD THIS LINE TO COPY ADMIN FILES ***
  eleventyConfig.addPassthroughCopy("src/admin");

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
    templateFormats:        ["njk","md","html"]
  };
};