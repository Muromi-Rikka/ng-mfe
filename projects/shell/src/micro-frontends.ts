import { MicroFrontend } from 'ng-module-federation';

export const microFrontends: MicroFrontend[] = [
  {
    remoteEntry: 'http://localhost:4210/remoteEntry.js',
    remoteName: 'menu',
    routePath: 'menu',
  },
  {
    remoteEntry: 'http://localhost:4220/remoteEntry.js',
    remoteName: 'order',
    routePath: 'order',
  },
  {
    remoteEntry: 'http://localhost:4230/remoteEntry.js',
    remoteName: 'locations',
    routePath: 'locations',
  },
];
