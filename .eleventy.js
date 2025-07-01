module.exports = function(eleventyConfig) {
  // Date filter (optional)
  eleventyConfig.addFilter("date", function(value) {
    return new Date(value).toDateString();
  });

  // ✅ Passthrough for entire admin folder
  eleventyConfig.addPassthroughCopy("src/admin");

  // ✅ Passthrough just config.yml to the correct place
  eleventyConfig.addPassthroughCopy({ "src/admin/config.yml": "config.yml" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};