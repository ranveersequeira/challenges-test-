import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import UiComponent from './components/UiComponent'
import comments from './comments.json'

function App() {
  const [textValues, setTextValues] = useState([])
  console.log("🚀 ~ file: App.tsx ~ line 10 ~ App ~ textValues", textValues)
  const [text, setText] = useState("")
  const submitHandler = (e: any) => {
    e.preventDefault()
    if (!text) {
      return;
    }
    updateArray('data', text);
    setTextValues(JSON.parse(localStorage.getItem('data')!))
    setText("")
  }

  function updateArray(key: string, value: string) {
    var array = JSON.parse(localStorage.getItem(key)!);
    array.data.push(value);
    localStorage.setItem(key, JSON.stringify(array));
  }

  const onChangeHandler = (evt: any) => {
    console.log(evt.target.value)
    setText(evt.target.value)
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(comments))
    setTextValues(JSON.parse(localStorage.getItem('data')!))
  }, [])


  return (
    <div className="App">
      {textValues.length !== 0 ? textValues.data.map((text: string, idx: number) => {
        return <UiComponent textValue={text} index={idx} key={idx} />
      }) : null}
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Enter Your Text"
          onChange={onChangeHandler}
        />
        <button type="submit" >Save</button>
      </form>
    </div>
  )
}

export default App
