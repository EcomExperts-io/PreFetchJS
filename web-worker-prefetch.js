const regex = new RegExp(/(src|href)=["'](.*?)["']/, 'gm');

function cleanUrl(URI) {
  return URI.replaceAll(/(src|href)=["']/g, '').replaceAll(/["']/g, '');
}

self.addEventListener('message', async (ev) => {
  const htmlResponse = ev.data;
  const preloads = {
    image: [],
    font: [],
    script: [],
    style: [],
  }
  const matches = htmlResponse.match(regex).map(cleanUrl);
  for(const match of matches) {
    if(match.includes('.css')) {
      preloads.style.push(match);
    } else if(match.includes('.js')) {
      preloads.script.push(match);
    } else if(/\.(png|jpg|jpeg|gif)/g.test(match)) {
      preloads.image.push(match);
    } else if(/\.woff2?/g.test(match)){
      preloads.font.push(match);
    }
  }
  self.postMessage(preloads);
});