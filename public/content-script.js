chrome.runtime.onMessage.addListener((request) => {
  if (request.type == 'toggle') {
    toggle();
    console.log('toggle');
    // alert('Hello, world!');
  }
});

var iframe = document.createElement('iframe');
iframe.id = 'gExtension';
iframe.style.background = 'green';
iframe.style.height = '100%';
iframe.style.width = '0px';
iframe.style.position = 'fixed';
iframe.style.top = '0px';
iframe.style.right = '0px';
iframe.style.zIndex = '9000000000000000000';
// iframe.frameBorder = 'none';
iframe.src = chrome.runtime.getURL('index.html');

document.body.appendChild(iframe);

function toggle() {
  if (iframe.style.width == '0px') {
    iframe.style.width = '400px';
  } else {
    iframe.style.width = '0px';
  }
}
