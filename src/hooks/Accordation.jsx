import React, { useEffect, useState } from 'react'

const Accordation = () => {
    const [select,setSelected]=useState({})
    const quests = [
        {question:"What is the capital of India?",ans:"Delhi"},
        {question:"What is the largest country in the world?",ans:"Russia"},
        {question:"What is the smallest continent in the world?",ans:"Australia"},
        {question:"What is the largest planet in the solar system?",ans:"Jupiter"},
    ]

    const initial = ()=>{
        setSelected(quests[0])
    }

    useEffect(()=>{
        initial();
    },[])
    
  return (
    <div>
      <h1>Accordation</h1>
      <div className='flex items-center flex-col gap-5 mt-10 p-5'>
            {
                quests?.map((q,i)=>(
                    <div key={i} className='w-full border border-black p-2'>   
                        <div className='flex items-center justify-between'>
                        <h2>{q.question}</h2>
                        <button disabled={select?.ans===q?.ans} onClick={()=>setSelected(q)
                        }>{select!==q?"➕":"➖"}</button>
                        </div>
                        {
                            select?.ans===q?.ans ? <p>{q.ans}</p> : null
                        }
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default Accordation
