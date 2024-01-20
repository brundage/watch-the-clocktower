import React, { createContext, useContext, useReducer } from "react";

const EditingContext = createContext(false)
const EditingDispatchContext = createContext(null)

export function EditingContextProvider({children}) {
  const [ editing, dispatch ] = useReducer(editingReducer, false)

  return(<EditingContext.Provider value={editing}>
            <EditingDispatchContext.Provider value={dispatch}>
              {children}
            </EditingDispatchContext.Provider>
          </EditingContext.Provider>)
}


export function useEditing() {
  return useContext(EditingContext)
}


export function useEditingDispatch() {
  return useContext(EditingDispatchContext)
}



function editingReducer(editing, action) {
}