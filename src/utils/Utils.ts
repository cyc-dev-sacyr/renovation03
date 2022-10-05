import { IDateGridStrings } from "@fluentui/react-northstar";

export class Utils {

    public static AddHoursToDate (hours: number, date?: string): Date {
        let dateHours: Date;
        if (date) {
            dateHours = new Date(date);
        } else {
            dateHours = new Date();
        }
        dateHours.setHours(dateHours.getHours() + hours);
        return dateHours;
    }

    public static ArrayBufferToBase64 (buffer: ArrayBuffer): string {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
           binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }

    public static CopyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
    }

    public static ToLocaleISOString(date: Date): string {
        let timeOffset= null;
        if(date.getTimezoneOffset() < this.StdTimezoneOffset()) {
            //Horario verano
            timeOffset= new Date(new Date().getFullYear(), 6, 1).getTimezoneOffset();
        }
        else {
            timeOffset= new Date().getTimezoneOffset();
        }
        var tzoffset = timeOffset * 60000; //offset in milliseconds
        return (new Date(date.getTime() - tzoffset)).toISOString().slice(0, -1);
    }

    public static FormatDateInput = (date: Date, gridString: IDateGridStrings): string => {
        return date.toLocaleDateString("es-ES", { year: "numeric", month: "2-digit", day: "2-digit" });
    }

    private static StdTimezoneOffset = () => {
        var jan = new Date((new Date().getFullYear()), 0, 1);
        var jul = new Date((new Date().getFullYear()), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    }

}