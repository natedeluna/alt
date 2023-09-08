import { component$ } from '@builder.io/qwik';
import styles from './button.module.css';

export const Space = component$(() => {
  return (
    <>
    <div class= {[styles.spaceBackground]}>
      <div class = {[styles.space, styles.v1]}></div>
      <div class = {[styles.space, styles.v2]}></div>
      <div class = {[styles.space, styles.v3]}></div>
      <div class = {[styles.space, styles.v4]}></div>
      <div class = {[styles.space, styles.v5]}></div>
      <br></br>
      <div class={['flex', 'gap-10']}>
        <div class = {[styles.space, styles.v6]}></div>
        <div class = {[styles.space, styles.v7]}></div>
        <div class = {[styles.space, styles.v8]}></div>
      </div>
    </div>
  </>
  );
});
