"use client"
import Radio from "@/components/Radio"
import { ChangeEvent, useState } from "react"

export default function ChoiceSex(){
    const [sex, setSex] = useState<"man" | "woman" | "">('man')

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    if(target.value === "man" || target.value === "woman" ){
        setSex(target.value)
    }
  }
  return (
        <form onSubmit={handleSubmit} className="mb-10">
            <fieldset className="w-80 max-w-sm py-4 px-10 border-solid border-red-300 border-2 rounded-lg flex flex-col items-center">
                <legend className="px-4 mx-[-10%] font-bold">성별 선택</legend>
                <section className="flex gap-10">
                    <Radio handleChange={handleChange}
                             sex={sex} value={"man"} 
                    />
                    <Radio handleChange={handleChange}
                             sex={sex} value={"woman"} 
                    />
                </section>
                <button className="px-4 py-2 rounded-lg font-bold mt-4 bg-red-400 text-white hover:bg-transparent hover:text-red-400 transition hover:shadow-lg">TEST 시작하기</button>
            </fieldset>
        </form>
  )
}