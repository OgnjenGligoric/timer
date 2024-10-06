export const MAX_TIME = 59 * 60 + 59;
export const MIN_TIME: number = 0;

export class TimerValidator {
    static validateTimes(endTime: number, elapsedTime: number | undefined) {
        this.validateEndTime(endTime);
        this.validateElapsedTime(elapsedTime, endTime);
    }

    private static validateElapsedTime(elapsedTime: number | undefined, endTime: number) {
        if (elapsedTime && endTime < elapsedTime) {
            throw new Error('Invalid elapsedTime: Elapsed time cannot be greater than end time.');
        }if (elapsedTime && 0 > elapsedTime) {
            throw new Error('Invalid elapsedTime: Elapsed time cannot be less than 0.');
        }
    }

    private static validateEndTime(endTime: number) {
        if (endTime > MAX_TIME) {
            throw new Error(`Invalid endTime: Timer cannot exceed 59 minutes and 59 seconds.`);
        }
        if (endTime <= MIN_TIME){
            throw new Error('Invalid endTime: Timer cannot be below 0 minutes and 0 seconds.');
        }
    }

    static validateTitle(title: string){
        if(title.trim() === ""){
            throw new Error('Invalid title: Title cannot be empty.')
        }
    }
}
