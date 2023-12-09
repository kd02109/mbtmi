import Image from 'next/image';

export default function ProfileContainer({ profiles }: { profiles: string[] }) {
  return (
    <div className="grid w-[68px] grid-cols-2 grid-rows-2 gap-1 mr-4">
      {profiles.map((profile, index) => (
        <Image
          src={profile}
          key={index}
          alt={profile}
          width={30}
          height={30}
          className="rounded-md self-stretch justify-self-stretch"
          loading="lazy"
        />
      ))}
    </div>
  );
}
