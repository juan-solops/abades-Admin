// Vercel Speed Insights initialization
// This file loads and initializes the Speed Insights tracking script

(function() {
  'use strict';
  
  // Initialize the Speed Insights queue
  window.si = window.si || function() {
    (window.siq = window.siq || []).push(arguments);
  };
  
  // Create and inject the Speed Insights script
  var script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  script.setAttribute('data-sdkn', '@vercel/speed-insights');
  script.setAttribute('data-sdkv', '1.3.1');
  
  script.onerror = function() {
    console.log('[Vercel Speed Insights] Failed to load script. Please check if the project is deployed on Vercel and Speed Insights is enabled in the dashboard.');
  };
  
  document.head.appendChild(script);
})();
