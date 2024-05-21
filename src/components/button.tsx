import React from "react"



type ButtonProps = {
   style: React.CSSProperties
   setCount: React.Dispatch<React.SetStateAction<number>>
   count: number
   setText: React.Dispatch<React.SetStateAction<boolean>>
   text: boolean
}

export default function Button({style, setCount, count, setText, text}: ButtonProps){
 
  return (
    <div>
    <button style={style} onClick={() => {
      setCount(count + 1)
    }}>
      Click Me {count}
    </button>
    <button style={style} onClick={() => {
      setText(!text)
    }}>{text ? 'True' : 'False'}</button>
    </div>
    
  )
}