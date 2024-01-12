import React from "react"

const readJsonFile = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    fileReader.onload = event => {
      if (event.target) {
        resolve(JSON.parse(event.target.result))
      }
    }
    fileReader.onerror = error => reject(error)
    fileReader.readAsText(file)
  })

const JSONLoader = ({handleRead}) => {
  const onChange = async (event) => {
    if (event.target.files) {
      const parsedData = await readJsonFile(event.target.files[0])
      handleRead(parsedData)
    }
  }

  return (
    <input className="script-loader" type="file" accept=".json,application/json" onChange={onChange} />
  )
}

export default JSONLoader