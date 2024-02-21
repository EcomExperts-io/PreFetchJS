/**
 * @param {HTMLAnchorElement} link - the anchor tag which needs the preload behavior
 * @description adds the preload hover handler to the anchor tag
 */
function addPrefetchHandler(link) {
  function handler(ev) {
    link.removeEventListener('mouseover', handler);
    requestIdleCallback(() => createPreloads(link.href));
  }
  link.classList.add('ignore-preload');
  link.addEventListener('mouseover', handler);
}

/**
 * @param {string} url - The URL to be preloaded
 * @param {string} type - respresents the as attribute in a HTML link tag
 * @param {string} [rel] - respresents the rel attribute in a HTML link tag
 * 
 * @description adds a preload link tag with fetch priority low 
 */
function createPrefetch(url, type, rel = 'preload') {
  const link = document.createElement('link');
  link.rel = rel;
  link.as = type??'';
  link.href = url;
  link.crossOrigin = !url.includes(baseUrl);
  link.setAttribute('fetchPriority', 'low');

  document.body.append(link);
}

// initializes the web worker using the prefetchWebWorkerURI variable
const worker = new Worker(prefetchWebWorkerURI);

// Waits for the web worker's message which then provides the items to preload
worker.addEventListener('message', (ev) => {
  const preloads = ev.data;
  for (const key in preloads) {
    const preloadList = preloads[key];
    preloadList.forEach(url => requestIdleCallback(() => createPrefetch(url, key)));
  }
});

/**
 * 
 * @param {string} url - Page URL to preload
 * 
 * @description It fetches the page using the URL and then the web worker extracts the JS, CSS, image and font URLs and returns it as a message
 */
function createPreloads(url) {
  fetch(url).then(res => res.text()).then(res => {
    worker.postMessage(res);
  });
}

/**
 * @description it adds the preload handler to all the anchor tags if the anchor tag match either of the two conditions:
 *  - if the anchor tag has `preload` class but no `ignore-preload` class
 *  - if the anchor tag has no `ignore-preload` class and an ancestor of the anchor tag has the `preload-children` class
 */
function handleAllPreloads() {
  document.querySelectorAll('a.preload:not(.ignore-preload)').forEach(addPrefetchHandler);
  document.querySelectorAll('.preload-children a[href]:not(.ignore-preload)').forEach(addPrefetchHandler);
}

document.addEventListener('DOMContentLoaded', () => {
  requestIdleCallback(handleAllPreloads);
})

window.addEventListener('wnw_load', () => {
  requestIdleCallback(handleAllPreloads);
});