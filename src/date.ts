export class DateUtils{

    public static formatDate(date: Date | string) : string {

        var theDate: Date;
    
        if (!(date as Date).getDate) {
            theDate = new Date(date as string);
        } else {
            theDate = date as Date;
        }
    
        return ("0" + theDate.getDate()).slice(-2) + "/" + ("0" + (theDate.getMonth() + 1)).slice(-2) + "/" + theDate.getFullYear();
    }

    public static displayUtcDateTime(dateString: string) : string {

        var date = new Date(dateString);
    
        var localTime = new Date().getTimezoneOffset();
        var dateOffset = date.getTimezoneOffset();
        var theDate = new Date(date.getTime() - localTime * 60000);
    
        return theDate.toLocaleString();
    }
}