import React, {useState} from "react"

export default function EditableField({ value,
                                        id,
                                        onSubmit,
                                        onKeyUp,
                                        onBlur,
                                        children
                                     }) {

  const [ editing, setEditing ] = useState(false)

  const cancelEdit = () => setEditing(false)

  const handlers = Object.assign({
    onBlur: (e) => cancelEdit(),

    onClick: (e) => setEditing(true),

    onKeyUp: (e) => {
      e.key === "Escape" && cancelEdit()
      e.key === "Enter" && cancelEdit()
    },

    onSubmit: (e) => {
      cancelEdit()
      onSubmit(e, id, e.target[0].value)
    }
  },{blur: onBlur, onKeyUp: onKeyUp})

  if( editing ) {
    return(
      <div className="editable">
        <form onSubmit={handlers.onSubmit}>
          <input defaultValue={value}
                 autoFocus={true}
                 onKeyUp={handlers.onKeyUp}
                 onBlur={handlers.onBlur}
          />
        </form>
      </div>
    )
  } else {
    return(
      <div className="editable" onClick={handlers.onClick}>
        {children}
      </div>
    )
  }
}