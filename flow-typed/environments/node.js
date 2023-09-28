// flow-typed signature: 759ad3a3c5ddfe86ae4d2595478d162d
// flow-typed version: 10ad36772a/node/flow_>=v0.155.x

// https://nodejs.org/api/fs.html#promises-api

declare module 'fs/promises' {
  declare module.exports: $Exports<'fs'>['promises'];
}

declare module 'process' {
  declare module.exports: Process;
}

declare module 'node:process' {
  declare module.exports: $Exports<'process'>;
}

// https://nodejs.org/api/esm.html#node-imports

declare module 'node:events' {
  declare module.exports: $Exports<'events'>;
}

declare module 'node:fs' {
  declare module.exports: $Exports<'fs'>;
}

declare module 'node:fs/promises' {
  declare module.exports: $Exports<'fs'>['promises'];
}

declare module 'node:os' {
  declare module.exports: $Exports<'os'>;
}

declare module 'node:path' {
  declare module.exports: $Exports<'path'>;
}

declare module 'node:util' {
  declare module.exports: $Exports<'util'>;
}

declare module 'node:url' {
  declare module.exports: $Exports<'url'>;
}