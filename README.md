# Prefetch.js

**Prefetch.js** is a JavaScript module designed for efficient prefetching of static resources in web applications. This lightweight solution operates seamlessly without disrupting the main thread, prefetching assets like JavaScript files, CSS stylesheets, fonts, and images upon a user's link hover.

## Key Features

- **Non-Intrusive Prefetching:** Prefetch.js discreetly fetches resources when a user hovers over a link, ensuring a smooth user experience.

- **Optimized Performance:** Proactive prefetching reduces latency and improves overall page load times.

- **Effortless Integration:** No complex configurations -- just add the module for streamlined resource loading.

## Installation
Paste the following snippet and specify the location to **web-worker-prefetch.js** in the variable `prefetchWebWorkerURI` and the base url for the page in `prefetchWebWorkerURI`
```html
<script>
  // prefetchWebWorkerURI is required to be initialized before prefetch.js
  const prefetchWebWorkerURI = '<URL to the web-worker-prefetch.js file>';
  // base url is required for know if the link is cross origin or not
  const baseURL = "<base URL to your page>";
</script>
<script src="{{ 'prefetch.js' | asset_url }}" defer></script>
```
