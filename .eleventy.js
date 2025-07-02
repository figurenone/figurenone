module.exports = function(eleventyConfig) {
  // ✅ Passthrough copy the admin folder (for CMS)
  eleventyConfig.addPassthroughCopy("src/admin");

  // ✅ Passthrough copy the CMS config file
eleventyConfig.addPassthroughCopy({ "src/static/config.yml": "admin/config.yml" });
    "src/static/config.yml": "admin/config.yml": "src/static/_redirects": "_redirects"
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};