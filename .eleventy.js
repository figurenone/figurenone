module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", function(value) {
    return new Date(value).toDateString();
  });

  // ✅ Redirects passthrough
  eleventyConfig.addPassthroughCopy({
    "src/static/_redirects": "_redirects"
  });

  // ❌ REMOVE THIS — it causes errors
  // eleventyConfig.addPassthroughCopy("src/admin");

  // ✅ Correct admin passthrough for Netlify CMS
  eleventyConfig.addPassthroughCopy({
    "src/static/admin": "admin"
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};