import { fn } from "@storybook/test"; // Import Storybook test helpers
import Button from "../components/shared/Button"; // Import the Button component

// Define action handlers for simulating click events
export const ActionsData = {
    onClick: fn(),
};

// Default export with component and metadata for the Storybook
export default {
    component: Button, // Component to be tested
    title: "Button", // Title for Storybook UI
    tags: ['autodocs'], // Automatic docs generation
    excludeStories: /.*Data$/, // Exclude the action data from being treated as stories
    args: {
        ...ActionsData, // Include actions in args for interaction handling
    },
};

// Default Button story (normal state)
export const Default = {
    args: {
        children: "Default Button", // Button label
        disabled: false, // Enabled by default
    },
};

// Disabled Button story
export const Disabled = {
    args: {
        ...Default.args, // Reuse the same args as Default
        disabled: true, // Set the button to disabled
    },
};

// Submit Button story
export const Submit = {
    args: {
        ...Default.args, // Reuse default args
        type: "submit", // Make the button a submit button
        children: "Submit Button", // Change label to Submit
    },
};

// Reset Button story
export const Reset = {
    args: {
        ...Default.args, // Reuse default args
        type: "reset", // Make the button a reset button
        children: "Reset Button", // Change label to Reset
    },
};
