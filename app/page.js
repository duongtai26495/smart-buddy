"use client"
import Image from 'next/image'
import sendMessage from './api/getdata'
import React, { useEffect, useState } from 'react';


export default function Home() {

  const [question, questionData] = useState("")
  const [chatResult, resultSet] = useState("")
  const [isWaiting, setWaiting] = useState(false)

  const handleChatGPT = async () => {
    setWaiting(true)
    const result = await sendMessage(question)
    resultSet(result)
    setWaiting(false)

  }



  return (
    <div className=''>
      <div className='flex w-full flex-row gap-1'>
        <input value={question} onChange={(e) => questionData(e.target.value)} className='w-full p-1 rounded-sm text-black' placeholder='How can I help you ?' />
        <button
          className='w-fit py-2 px-1 bg-white rounded-sm text-black whitespace-nowrap'
          disabled={question == "" || isWaiting ? true : false}
          onClick={() => { handleChatGPT() }} >
          {isWaiting ? "Chờ tí nhé" : "Hỏi ngay"}
        </button>
      </div>
      <div id='result-response' style={{paddingTop:"10px"}}>
      {chatResult}
      </div>

    </div>
  )
}
