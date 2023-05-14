import solidLogo from '@root/assets/solid-logo.svg';
import style from './index.module.css';
import { Counter } from '@root/newtab/components/counter';

export function WelcomeView() {
  return (
    <div class='w-screen h-screen flex flex-col items-center box-border pt-10 font-serif'>
      <img src={solidLogo} class={style.logo + ' w-[15rem]'} />
      <h1 class='text-4xl'>SolidJS Web Extension</h1>
      <span class='mt-3 text-2xl'>
        Edit <code>src/newtab/welcome/index.tsx</code> and save to reload
      </span>
      <img
        class='mt-10'
        src='https://skillicons.dev/icons?i=vite,solidjs,ts,tailwindcss'
        alt='skillicons'
      />
      <Counter />
    </div>
  );
}
