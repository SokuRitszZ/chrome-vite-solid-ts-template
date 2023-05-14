import solidLogo from '@root/assets/solid-logo.svg';
import style from './index.module.css';

export function WelcomeView() {
  return (
    <div class='w-[30rem] pt-2 flex flex-col justify-center items-center overflow-auto'>
      <img src={solidLogo} class={style.logo + ' w-24'} alt='logo' />
      <span class='mt-3'>
        Edit <code>src/popup/welcome/index.tsx</code> and save to reload
      </span>
      <h1 class='w-full text-center text-4xl font-serif'>
        SolidJS Web Extension
      </h1>
    </div>
  );
}
