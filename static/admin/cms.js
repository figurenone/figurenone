// src/admin/cms.js

if (window.CMS) {
  console.log("✅ CMS loaded, initializing...");
  window.CMS.init();
} else {
  console.error("❌ CMS not found on window. Make sure netlify-cms.js is loaded first.");
}