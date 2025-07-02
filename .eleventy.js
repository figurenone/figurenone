module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/static/_redirects": "_redirects" });
  // Add other passthroughs as needed

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};