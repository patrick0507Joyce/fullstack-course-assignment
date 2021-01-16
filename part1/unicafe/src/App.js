import React, { useState } from 'react'
import Statistics from './components/Statistics'
import Buttons from './components/Buttons'

const App = () => {  
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const statistics = [
        {
            "name": "good",
            "setEvaluationCount": setGood,
            "weight": 1,
            "count": good
        },
        {
            "name": "neutral",
            "setEvaluationCount": setNeutral,
            "weight": 0,
            "count": neutral
        },
        {
            "name": "bad",
            "setEvaluationCount": setBad,
            "weight": -1,
            "count": bad
        },
    ]

    return (
      <div>
        <Buttons statistics={statistics}/>
        <Statistics statistics={statistics}/>
      </div>
    )
  }

export default App
