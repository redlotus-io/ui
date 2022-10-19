import type { ComponentStoryFn, Meta } from "@storybook/react";

import { RealButton } from "../components/elements/buttons/real-button/RealButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/RealButton",
  component: RealButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof RealButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStoryFn<typeof RealButton> = args => <RealButton {...args} />;

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
  variant: "dark",
  onClick: () => {},
};

export const Large = Template.bind({});
Large.args = {
  variant: "blue",
  size: "lg",
  onClick: () => {},
};

export const Small = Template.bind({});
Small.args = {
  variant: "blue",
  size: "sm",
  onClick: () => {},
};
