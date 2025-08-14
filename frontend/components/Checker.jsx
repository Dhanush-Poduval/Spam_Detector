'use client'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react'



export default function Checker() {
const [email , setEmail]=useState("")
const [answer , setAnswer]=useState("")
const [loading,setLoading]=useState(true);
  const  setEmailText=(e)=>{
  const text=e.target.value;
  setEmail(text)
  console.log(text)
  setLoading(false)
  }
  const  handleSubmit=async()=>{
  try{
    const res =await fetch('http://127.0.0.1:8000/predict',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json', //important when u are sending text 
        },
        body: JSON.stringify({ text: email }),

    })
    
    const json = await res.json()
    setAnswer(json.prediction)



  }catch{
    console.log("Something went wrong mate")

  }
 }

  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 p-4">
      <Card className="w-full max-w-lg shadow-2xl rounded-2xl border border-gray-700 bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            ✉️ Spam Detector
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste your email text here..."
            value={email}
            onChange={setEmailText}
            className="min-h-[150px] resize-none bg-gray-900 border-gray-700 text-white"
          />
          <Button
            onClick={handleSubmit}
            disabled={loading || !email.trim()}
            className="w-full bg-purple-600 hover:bg-purple-500"
          >
           Verify
          </Button>
          {loading ?'Enter a valid email to check ':`${answer}`}

          
        </CardContent>
      </Card>
    </div>
  );
  
}
