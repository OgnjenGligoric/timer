import { fn } from "@storybook/test";
import Timer from "../components/timer/Timer"; // Import Storybook test helpers

export default {
    component: Timer,
    title: "Timer",
    tags: ['autodocs'],
    args: {
        title: "Sample Timer",
        endTime: 300,
        elapsedTime: 0,
    },
};

export const Default = {
    args: {
        title: "Default Timer",
        endTime: 300,
        elapsedTime: 0,
    },
};

export const Halfway = {
    args: {
        title: "Halfway Timer",
        endTime: 600,
        elapsedTime: 300,
    },
};

export const EmptyTitleError = {
    args: {
        title: "",
        endTime: 300,
        elapsedTime: 0,
    },
};

export const ElapsedTimeError = {
    args: {
        title: "Random Title",
        endTime: 300,
        elapsedTime: 308,
    },
};

export const NegativeTimeError = {
    args: {
        title: "Random Title",
        endTime: -300,
        elapsedTime: 308,
    },
};

export const Finished = {
    args: {
        title: "Almost Done",
        endTime: 300,
        elapsedTime: 300,
    },
};
