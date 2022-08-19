export class Waiter {
    static wait(seconds: number) {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000 * seconds);
        });
    }
}