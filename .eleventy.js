module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", function(value) {
    return new Date(value).toDateString();
  });

  // ✅ Eleventy v2+ ignore pattern
  eleventyConfig.ignores.add("_site/**");

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