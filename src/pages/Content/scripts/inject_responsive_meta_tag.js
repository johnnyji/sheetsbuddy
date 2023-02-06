// Appends responsive meta tag to head for MUI
const tag = document.createElement('meta');
tag.setAttribute('name', 'viewport');
tag.setAttribute('content', 'initial-scale=1, width=device-width');

const head = document.querySelector('head');

if (head) head.appendChild(tag);
