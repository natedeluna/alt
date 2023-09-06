import { component$ } from '@builder.io/qwik';
import styles from './button.module.css';

interface ItemProps {
  buttonType?: string;
  buttonText?: string;
  buttonBGColor?: string;
  buttonTextColor?: string;
}

export const Button = component$<ItemProps>((props) => {
  // Define variant styles based on the button type prop
  let variantStyles = [];

  switch (props.buttonType) {
    case 'Primary':
      variantStyles.push('bg-[#1b1b18]', 'text-[#f3f3f2]', 'rounded-lg');
      break;
    case 'Secondary':
      variantStyles.push('bg-gray-300', 'text-black');
      break;
    case 'Outline':
      variantStyles.push('border', 'border-gray-200', 'text-black', 'rounded-lg');
      break;
    // Add more cases for additional button types
    case 'Ghost':
      variantStyles.push('text-black', 'bg-transparent', 'border','border-transparent','font-setter:hover','hover:border', 'font-active', 'hover:border-gray-300', 'hover:shadow-lg', 'bg-opacity-20', 'bg-grey-100', 'rounded-lg', 'cursor-pointer', 'transition-all-.2s', 'duration-300');
      break;
    case 'Standard':
      variantStyles.push('text-[#1e2124]', 'border','border-black', 'cursor-pointer', 'transition-all-.2s', 'duration-300');
      break;
    default:
      break;
  }

  // Combine the base styles and variant styles
  const buttonClasses = [
    'relative',
    'cursor-pointer',
    'inline-block',
    'px-3',
    'py-1.5',
    'flex',
    'items-center',
    'justify-center',
    'min-w-[144px]',
    'w-36',
    'h-12',
    'font-sans',
    'text-base',
    'select-none',
    'font-medium',
    ...variantStyles,
  ];

  return (
    <div class={[buttonClasses, styles.strokeAnim]} onMouseDown$={(e) => console.log(e.offsetX, e.offsetY)}>
      <div class={
        props.buttonType === 'Outline' ? 'opacity-1':'opacity-0'
      }>
        <svg class={[styles.stroke]}width="144" height="48" viewBox="0 0 144 48"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x=".5" y=".5" width="143" height="47" rx="7.5" stroke="url(#paint0_linear_305_2)"/>
        <defs>
        <linearGradient id="paint0_linear_305_2" x1="144" y1="48" x2="5.96047e-07" y2="-1.78814e-06" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C7F8FF" stop-opacity="0.79"/>
        <stop offset="1" stop-color="#020051" stop-opacity="0"/>
        </linearGradient>
        </defs>
        </svg>
      </div>
      {props.buttonText}
    </div>
  );
});
