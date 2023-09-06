import { component$ } from '@builder.io/qwik';
interface ItemProps {
  tagText?: string;
  tagType?: string;
  tagBGColor?: string;
  tagTextColor?: string;
}
export const StatusTag = component$<ItemProps>((props) => {
  const checkMark = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.10119 7.72445C5.49887 8.17066 6.19659 8.17066 6.59427 7.72445L9.30817 4.67935C9.6307 4.31746 10.1966 4.31746 10.5191 4.67935V4.67935C10.7932 4.98688 10.7932 5.45103 10.5191 5.75856L6.59427 10.1624C6.19659 10.6086 5.49887 10.6086 5.10119 10.1624L3.48091 8.34434C3.20683 8.03681 3.20683 7.57266 3.48091 7.26513V7.26513C3.80344 6.90325 4.3693 6.90325 4.69183 7.26513L5.10119 7.72445Z" fill="#0F5132"></path>
        <circle cx="7" cy="7" r="6" stroke="#0F5132" strokeWidth="2"></circle>
      </svg>
  );
  const warning = (
  <svg width="13" height="11" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9282 11L10.7321 2C9.96225 0.666668 8.03775 0.666665 7.26795 2L2.0718 11C1.302 12.3333 2.26424 14 3.80385 14H14.1962C15.7358 14 16.698 12.3333 15.9282 11Z" stroke="#78350F" stroke-width="2"/>
      <line x1="9" y1="5" x2="9" y2="8" stroke="#78350F" stroke-width="2" stroke-linecap="round"/>
    <circle cx="9" cy="11" r="1" fill="#78350F"/>
  </svg>
  
  )
  let varientStyles = [];
  let includedSymbol = null;
  switch (props.tagType) {
    case 'Success':
      varientStyles.push('bg-[#CEF2D8]', 'text-[#0F5132]');
      includedSymbol = checkMark;
      break;
    case 'Error':
      varientStyles.push('bg-[#FEE2E2]', 'text-[#B91C1C]');
      break;
    case 'Info':
      varientStyles.push('bg-[#DBEAFE]', 'text-[#1E3A8A]');
      break;
    case 'Warning':
      varientStyles.push('bg-[#FEF3C7]', 'text-[#78350F]');
      includedSymbol = warning;
      break;
    default:

      break;
  }
  return (
    <div
      class={[
        'relative',
        'p-[5px]',
        'rounded-[5px]',
        'text-[12px]',
        'font-bold',
        'w-fit',
        'h-5',
        'flex',
        'items-center',
        'justify-center',
        'gap-1',
        'select-none',
        ...varientStyles,
      ]}
    >
      {includedSymbol}
      {props.tagText ? props.tagText : 'Notice'}
    </div>
  );
});
