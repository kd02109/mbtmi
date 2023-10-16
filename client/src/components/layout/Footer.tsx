import Github from '@/components/svg/Github';
import Notion from '@/components/svg/Notion';
import { config } from '@/config';

const STYLE = { width: '20', height: '20' };

export default function Footer() {
  const year = new Date().getFullYear();
  const since = year === config.since ? `${year}` : `${config.since - year}`;
  return (
    <footer className="w-full border-t-2 border-solid border-slate-200 flex flex-col items-end p-4">
      <section className="flex gap-2">
        <a href={config.info.github}>
          <Github width="24" height="24" />
        </a>
        <a href={config.info.notion}>
          <Notion {...STYLE} />
        </a>
      </section>
      <span className="text-xs sm:mx-0 sm:text-base text-slate-400 ">
        ©{since} {config.copyright}
      </span>
    </footer>
  );
}
