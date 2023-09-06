import { component$ } from '@builder.io/qwik';
interface ItemProps {
}
export const SoftMenu = component$<ItemProps>((props) => {
  return (
    <div class={['flex', 'p-1', '']}>
      <div class=" bg-transparent w-[20px] h-[24px] rounded-[.5px]">
        <div class=" bg-black w-[2px] h-[24px] rounded-[.5px] overflow-hidden">
          <div class="absolute text-black">Item</div>
        </div>
        </div>
      <div class=" bg-black w-[2px] h-[24px] rounded-[.5px]">
        <div class="absolute">Item</div>
      </div>
      <div class=" bg-black w-[2px] h-[24px] rounded-[.5px]">
        <div class="absolute">Item</div>
      </div>
    </div>
  );
});