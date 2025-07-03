module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", function(value) {
    return new Date(value).toDateString();
  });

  eleventyConfig.addPassthroughCopy({
    "src/static/_redirects": "_redirects"
  });

eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};