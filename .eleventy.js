module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    markdownTemplateEngine: "liquid",  // ✅ Liquid for .md files
    htmlTemplateEngine: "njk",         // ✅ Nunjucks for .html/.njk if needed
  };
};