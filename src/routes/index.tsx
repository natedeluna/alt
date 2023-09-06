import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button";
import { StatusTag } from "~/components/status_tag";
import { MiniSignup } from "~/components/mini_signup";
import { Space } from "~/components/space";

export default component$(() => {

  return (
    <div class="flex flex-col p-5 gap-10">
      <div class="flex gap-2">
        <Button buttonType="Primary" buttonText="Primary" />
        <Button buttonType="Outline" buttonText="Outline Button" />
        <Button buttonType="Ghost" buttonText="Ghost Button" />
      </div>
      <div class="flex gap-2">
        <Button buttonType="Standard" buttonText="Get Started" />
      </div>
      <div class="flex gap-2">
        <StatusTag tagType="Success" tagText="Confirmed"/>
        <StatusTag tagType="Error" tagText="Error"/>
        <StatusTag tagType="Info" tagText="Info"/>
        <StatusTag tagType="Warning" tagText="Warning"/>
      </div>
      <div class="flex gap-2">
        <Space />
      </div>

      <MiniSignup />
    </div>
  );
});

export const head: DocumentHead = {
  title: "x Components",
  meta: [
    {
      name: "Simple reusable components in the qwik framework",
      content: "Your mom",
    },
  ],
};