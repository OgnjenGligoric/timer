import { fn } from "@storybook/test";
import TimerForm from "../components/timer-form/TimerForm";

export const ActionsData = {
    onSubmit: fn(),
};

export default {
    component: TimerForm,
    title: "TimerForm",
    tags: ['autodocs'],
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
};

export const Default = {
    args: {

    },
};
