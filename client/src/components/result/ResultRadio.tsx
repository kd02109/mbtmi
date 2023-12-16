'use client';
export default function ResultRadio({
  name,
}: {
  name: 'IE' | 'SN' | 'TF' | 'JP';
}) {
  return (
    <section className="flex items-center">
      <label htmlFor={name[0]} className="font-bold mr-2 text-xl">
        {name[0]}
      </label>
      <input
        id={name[0]}
        type="radio"
        value={name[0]}
        name={name}
        className="appearance-none w-5 h-5 border-2 border-solid border-gray-600 align-middle transition-all checked:border-8 checked:border-solid checked:border-red-400 hover:border-red-400 rounded-full"></input>
      <label htmlFor={name[1]} className="font-bold mr-2 ml-10 text-xl">
        {name[1]}
      </label>
      <input
        type="radio"
        value={name[1]}
        name={name}
        id={name[1]}
        className="appearance-none w-5 h-5 border-2 border-solid border-gray-600 align-middle transition-all checked:border-8 checked:border-solid checked:border-red-400 hover:border-red-400 rounded-full"></input>
    </section>
  );
}
