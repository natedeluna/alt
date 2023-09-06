import { component$ } from '@builder.io/qwik';
interface ItemProps {

}
export const MiniSignup = component$<ItemProps>(() => {

  return (
    <form class="relative flex flex-col gap-3 h-[38px] max-w-[280px] caret-black font-light">
      <input type="text" placeholder="you@domain.com" class=" bg-[#f2f2f2] rounded-md px-3 py-1.5 font-sans text-base select-none h-full text-black focus:outline-none focus:ring-2 focus:ring-[#cee7fe] " />
      <button type="submit" class="absolute right-1 top-[4px] bg-[#fafafa] border-solid border-[1px] border-[#d4d4d4] cursor-pointer px-3 py-1.5 h-[30px] flex items-center justify-center w-fit text-sm rounded-lg font-sans select-none text-[#b3b3b3] hover:text-slate-500 transition-all ">Subscribe</button>
    </form>
  );
});