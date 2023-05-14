import { createSignal } from 'solid-js';

export function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button
      class='px-2 py-1 text-2xl rounded-lg bg-slate-600 border-0 focus:outline-1 focus:outline-slate-900 focus:outline mt-5'
      onClick={() => setCount(count() + 1)}
    >
      Count: {count()}
    </button>
  );
}
