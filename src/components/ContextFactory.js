import React, { createContext, useContext, useEffect, useReducer } from "react";

/*
  config = {
    dispatch: dispatchFn(),
    loadInitialValues: valueLoaderFn(),
    reducer: reducerFn(),
    storageKey: "key for local storage"
  }
*/
export const contexetFactory = (config={}) => {

  const { dispatch, loadInitialValues, reducer, localStorageKey } = config

  const _loadInitialValues = () => {
    if( localStorageKey === undefined ) { return undefined }

    const saved = localStorage.getItem(localStorageKey);
    const initial = saved !== null ? JSON.parse(saved) : initialPeriod;
    return initial
  }

  if( reducer !== undefined ) {
    const initialValue = loadInitialValues ? loadInitialValues() : _loadInitialValues()
    const [ data, dispatch ] = useReducer(reducer, initialValue)
  }

  const consumerContext = createContext()
  const providerContext = createContext()

  // TODO need to figure out data when reducer is provided
  const Provider = ({ children }) => {
    return(
      <providerContext.Provider value={data} >
        {children}
      </providerContext.Provider>
    )
  }

  const hook = () => useContext(providerContext)

  return {
    consumer: Consumer,
    hook: hook,
    provider: Provider,
  }
}

// const [CompaniesProvider, useCompanies] = contextFactory(storageKey: 'period')