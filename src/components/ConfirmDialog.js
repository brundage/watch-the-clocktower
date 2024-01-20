// https://akashhamirwasia.com/blog/building-expressive-confirm-dialog-api-in-react/
import React, { createContext, useCallback, useContext, useRef, useState } from 'react';

const ConfirmDialog = createContext();

function Alert({ onCancel, onConfirm, description = "", confirmLabel = "Yes", cancelLabel = "Cancel", title = "Are You Sure?" }) {
  return (
    <aside className='confirmation-dialog'>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onConfirm}>{confirmLabel}</button>
      <button onClick={onCancel}>{cancelLabel}</button>
    </aside>
  )
}


export function ConfirmDialogProvider({ children }) {
  const fn = useRef();
  const [ isOpen, setIsOpen ] = useState(false)

  const confirm = useCallback(
    (data) => {
      return new Promise((resolve) => {
        setIsOpen(true);
        fn.current = (choice) => {
          resolve(choice);
          setIsOpen(false);
        };
      });
    },
    []
  );

  return (
    <ConfirmDialog.Provider value={confirm}>
      {children}
      {isOpen && <Alert onCancel={() => {fn.current(false)}}
                        onConfirm={() => {fn.current(true)}}
                 /> }
    </ConfirmDialog.Provider>
  );
}


export default function useConfirmDialog() {
  return useContext(ConfirmDialog);
}