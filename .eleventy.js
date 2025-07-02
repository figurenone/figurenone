module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", function(value) {
    return new Date(value).toDateString();
  });

  eleventyConfig.addPassthroughCopy({
    "src/admin/config.yml": "admin/config.yml",
    "src/static/_redirects": "_redirects"
  });

  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};