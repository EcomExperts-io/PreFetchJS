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

## Usage
**Prefetch.js** is an install-and-use library. Therefore, it doesn't need any configuration. By default, it adds prefetch behavior to all anchor tags with an href. However, if you want to disable the prefetch behavior for certain anchor tags, you just need to add `ignore-preload` to the class attribute of the anchor tag you want to ignore. For example:
```html
<a href="placeholder.com/link-1">link 1</a>
<a href="placeholder.com/link-2" class="placeholder">link 2</a>
<a href="placeholder.com/link-3" class="placeholder ignore-preload">link 3</a>
<a href="placeholder.com/link-4" class="ignore-preload">link 4</a>
```
Out of all the above links, only link 1 and link 2 will have the preload-on-hover behavior.
