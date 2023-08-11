import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('widget'));
root.render(
    <App />
);

// var observer;

// const checkAndLoadRoot = () => {
//   const interval = setInterval(() => {
//     rootElement = document.getElementById('widget');
//     if (rootElement) {
//       try {
//         observer?.disconnect();
//       } catch (e) {
//         console.error('error disconnecting observer');
//       }

//       loadRoot();
//       clearInterval(interval);
//     }
//   }, 1000);
// };

// var rootElement = document.getElementById('widget');
// if (!rootElement) {
//   checkAndLoadRoot();
// }

// const mutateObserveElement = () => {
//   var target = document.getElementById('widget');

//   observer = new MutationObserver(function (mutations) {
//     // check for removed target
//     mutations.forEach(function (mutation) {
//       var nodes = Array.from(mutation.removedNodes);
//       var directMatch = nodes.indexOf(target) > -1;
//       var parentMatch = nodes.some((parent) => parent.contains(target));
//       if (directMatch) {
//         checkAndLoadRoot();
//         // console.log('node', target, 'was directly removed!');
//       } else if (parentMatch) {
//         checkAndLoadRoot();
//         // console.log('node', target, 'was removed through a removed parent!');
//       }
//     });
//   });

//   var config = {
//     subtree: true,
//     childList: true,
//   };
//   observer.observe(document.body, config);
// };

// const loadRoot = () => {
//   if (rootElement?.hasChildNodes()) {
//     ReactDOM.render(<App />, rootElement);
//   } 
//   // else {
//   //   // shadowDom();
//   //   ReactDOM.render(<App />, rootElement);
//   // }
//   mutateObserveElement();
// };

// loadRoot();

// if ('serviceWorker' in navigator) {
//   // navigator.serviceWorker.register('/firebase-messaging-sw.js');
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
