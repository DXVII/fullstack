
export const createECSLogger = (message: any) => {
    {
        level: 'info';
        timestamp: Date.now();
        message;
    }
}