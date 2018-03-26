'use strict';

require('ts-node').register({
  typeCheck: true,
  compilerOptions: {
    target: 'es2017',
    module: 'commonjs',
    strict: true,
    moduleResolution: 'node',
    noImplicitAny: false,
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    charset: 'utf8',
    allowJs: false,
    pretty: true,
    noEmitOnError: false,
    noUnusedLocals: true,
    noUnusedParameters: true,
    allowUnreachableCode: false,
    allowUnusedLabels: false,
    strictPropertyInitialization: false,
    noFallthroughCasesInSwitch: true,
    skipLibCheck: true,
    skipDefaultLibCheck: true,
    inlineSourceMap: true,
    importHelpers: true,
  },
});