const LEVELS = [ "debug", "info", "warning", "error" ]
const [ DEBUG, INFO, WARN, ERROR ] = [ 0, 1, 2, 3 ]
const DEFAULT_LEVEL = INFO
const LOGLEVEL = DEBUG

const logWith = (config) => {
  const log   = config.log   === undefined ? true : config.log
  const level = config.level === undefined ? DEFAULT_LEVEL : config.level
  return (...messages) => {
    log && level >= LOGLEVEL && console.log("{" + LEVELS[level] + "} ["+config.identifier+"]", ...messages )
  }
}

const logDebug = (config) => {
  return logWith({...config, level: DEBUG})
}

const logInfo = (config) => {
  return logWith({...config, level: INFO})
}

const logWarn = (config) => {
  return logWith({...config, level: WARN})
}

const logError = (config) => {
  return logWith({...config, level: ERROR})
}

export { logDebug, logInfo, logWarn, logError }