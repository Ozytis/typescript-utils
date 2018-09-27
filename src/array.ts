export class ArrayUtils{

    public static isNullOrEmpty(input: any[]) : boolean{
        return !input || input.length < 1;
    }

    public static chunk<T>(array: T[], chunkSize: number) {
        let result: T[][] = [];
    
        let numberOfChunks = Math.round(array.length / chunkSize);
    
        for (let i = 0; i < array.length; i += chunkSize) {
            if (result.length < numberOfChunks - 1)
                result.push(array.slice(i, i + chunkSize));
            else {
                result.push(array.slice(i));
                break;
            }
        }
    
        return result;
    }

}