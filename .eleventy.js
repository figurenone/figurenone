module.exports = function(eleventyConfig) {
  // ✅ Fix: Add the date filter manually
  eleventyConfig.addFilter("date", function(value) {
    return new Date(value).toDateString();
  });

  // Keep your passthrough setting too
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};