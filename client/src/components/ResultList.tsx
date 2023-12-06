export default function ResultList({ sentences }: { sentences: string[] }) {
  return (
    <ul className="px-4">
      {sentences.map(item => (
        <li key={item} className="my-4 font-semibold">
          • {item}
        </li>
      ))}
    </ul>
  );
}
