import React, { useState } from 'react'

const Question = ({question, answer}) => {
    const [open, setOpen] = useState(false)
  return (
    <div className="question_answer_container" onClick={() => setOpen(!open)}>
        <div className="question">
            <span className='question_title'>{question}</span>
            <div className={`arrow ${(open === true) ? "arrow_in_open" : ""}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path className={`${(open === true) ? "arrow_color_in_open" : ""}`} fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg></div>
        </div>
        <div className={`answer ${(open === true) ? "open" : "close" }`}>
            <p className='answer_title'>{answer}</p>
        </div>
    </div>
  )
}

export default Question
