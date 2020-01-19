#!/usr/bin/env node
// Shebang (#!) above allows for invoking this file directly on Unix-like platforms.
// InvokeCLI
const projectConfig = require('../../configuration'),
  path = require('path'),
  filesystem = require('fs')

// • Run
if (filesystem.existsSync(projectConfig.directory.distribution)) {
  module.exports = require(projectConfig.directory.distribution)
} else {
  // • Transpilation (babelJSCompiler)
  const { Compiler } = require('@dependency/javascriptTranspilation')
  let compiler = new Compiler({ callerPath: __dirname })
  compiler.requireHook()
  // compiler.outputTranspilation()
  // process.on('exit', () => {
  //   console.log(compiler.loadedFiles.map(value => value.filename))
  // })
  module.exports = require(path.join(projectConfig.directory.source, projectConfig.entrypoint.cli))
}
