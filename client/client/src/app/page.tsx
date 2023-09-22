import { getHello, getQuestion } from "@/server/getHello";

export default async function Home() {
  const data = await getHello()
  const questions = await getQuestion()
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.message}
      <ul>
        {questions.map((item:any) => <li key={item.id}>{item.subject}
          <time>{new Date(item.time).toString()}</time>
          <span>{item.content}</span>
        </li>)}
      </ul>
      </main>
  );
}
