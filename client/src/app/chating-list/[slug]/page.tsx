import Chat from '@/components/chat/Chat';
import SpeechBubble from '@/components/chat/SpeechBubble';
import ChatingDetailHeader from '@/components/layout/ChatingDetailHeader';
import { questions } from '@/data/question';
export default function ChatingPage({ params }: { params: { slug: string } }) {
  const question = questions.find(item => item.id === params.slug);
  console.log(question);
  return (
    <section className="bg-bgChating flex w-full min-h-screen max-w-xl m-auto flex-col">
      <ChatingDetailHeader
        name={question!.name}
        number={2}
        profile={question!.profile}
      />
      <article className="flex flex-col px-4 mt-4">
        <SpeechBubble
          profile={question!.profile}
          name={question!.name}
          message={question!.questionMan[0]}
        />
        <Chat message="hi" />
      </article>
    </section>
  );
}
