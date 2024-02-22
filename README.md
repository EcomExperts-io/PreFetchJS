# Prefetch.js

**Prefetch.js** is a JavaScript library designed for seamless resource prefetching in web applications. It efficiently triggers prefetching of static resources, such as JavaScript files, CSS stylesheets, fonts, and images, when a user hovers over a link. The library uses a web worker to extract relevant URLs from the HTML response and creates preload link tags with a low fetch priority, optimizing page load times with minimal impact on the main thread. Configuration is user-friendly, as it automatically adds prefetch behavior to links with the class `preload` or when their ancestor containers have the class `preload-children`. Additionally, users can disable prefetch for specific links by adding the `ignore-preload` class. Overall, Prefetch.js aims to improve web performance by reducing latency and optimizing page load times with a non-intrusive and user-friendly approach.

## Key Features

- **Non-Intrusive Prefetching:** Prefetch.js discreetly fetches resources when a user hovers over a link, ensuring a smooth user experience.

- **Optimized Performance:** Proactive prefetching reduces latency and improves overall page load times.

- **Effortless Integration:** No complex configurations -- just add the module for streamlined resource loading.

## Installation
Paste the following snippet and specify the location to **web-worker-prefetch.js** in the variable `prefetchWebWorkerURI` and the base url for the page in `baseURL`
```html
<script>
  // prefetchWebWorkerURI is required to be initialized before prefetch.js
  const prefetchWebWorkerURI = '<URL to the web-worker-prefetch.js file>';
  // base url is required for know if the link is cross origin or not
  const baseURL = "<base URL to your page>";
</script>
<script src="<URL to preload.js file>" defer></script>
```

## Usage
**Prefetch.js** is an install-and-use library. Therefore, it doesn't need much configuration except for the class `preload`/`preload-children`. It adds prefetch behavior to all anchor tags with either the class `preload` or a parent with the class `preload-children`. However, if you want to disable the prefetch behavior for certain anchor tags, you just need to add `ignore-preload` to the class attribute of the anchor tag you want to ignore. For example:
```html
<div class="preload-children">
  <a href="placeholder.com/link-1">link 1</a>
  <a href="placeholder.com/link-2" class="placeholder">link 2</a>
  <a href="placeholder.com/link-3" class="placeholder ignore-preload">link 3</a>
  <a href="placeholder.com/link-4" class="ignore-preload">link 4</a>
</div>
<a href="placeholder.com/link-5" class="placeholder preload">link 5</a>
<a href="placeholder.com/link-6" class="placeholder">link 6</a>
```
Out of all the above links, only link 1, link 2 and link 5 will have the preload-on-hover behavior.

We can enable the preload behavior on all the anchor tags on a page by just adding the `preload-children` class to the body tag.
