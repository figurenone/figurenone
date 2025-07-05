module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // ✅ Add passthrough for fonts specifically (optional clarity)
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  // ✅ Add custom 'posts' collection that filters out future-dated posts
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .filter(post => post.date <= new Date()) // only past/present posts
      .sort((a, b) => b.date - a.date);        // newest first
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    markdownTemplateEngine: "liquid",  // ✅ for .md files
    htmlTemplateEngine: "njk",         // ✅ for .html/.njk
  };
};