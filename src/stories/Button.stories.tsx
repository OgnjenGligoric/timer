import { fn } from "@storybook/test"; // Import Storybook test helpers
import Button from "../components/shared/Button"; // Import the Button component

export const ActionsData = {
    onClick: fn(),
};

export default {
    component: Button,
    title: "Button",
    tags: ['autodocs'],
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
};

export const Default = {
    args: {
        children: "Default Button",
        disabled: false,
    },
};

export const Disabled = {
    args: {
        ...Default.args,
        disabled: true,
    },
};

export const Submit = {
    args: {
        ...Default.args,
        type: "submit",
        children: "Submit Button",
    },
};

export const Reset = {
    args: {
        ...Default.args,
        type: "reset",
        children: "Reset Button",
    },
};
