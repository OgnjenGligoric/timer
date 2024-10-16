import { fn } from "@storybook/test";
import Progressbar from "../components/timer/Progressbar"; // Import Storybook test helpers

export const ActionsData = {
    onTimerComplete: fn(),
};

export default {
    component: Progressbar,
    title: "Progressbar",
    tags: ['autodocs'],
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
};

export const Default = {
    args: {
        title: "Timer",
        endTime: 300,
        timeLeft: 150,
    },
};

export const Completed = {
    args: {
        title: "Timer Completed",
        endTime: 300,
        timeLeft: 0,
    },
};

export const Halfway = {
    args: {
        title: "Halfway",
        endTime: 600,
        timeLeft: 300,
    },
};

export const NearCompletion = {
    args: {
        title: "Almost Done",
        endTime: 300,
        timeLeft: 10,
    },
};
