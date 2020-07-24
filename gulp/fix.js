const originalEmitWarning = process.emitWarning
process.emitWarning = function (warning, type, code, ctor) {
  if (code === 'DEP0097') {
    // Undertaker uses a deprecated approach that causes NodeJS 10 to print
    // this warning to stderr:
    // "Using a domain property in MakeCallback is deprecated. Use the  async_context
    // variant of MakeCallback or the AsyncResource class instead."
    // Suppress the warning:
    return
  }

  originalEmitWarning(warning, type, code, ctor)
}
