export class StringUtils{

    public static isNullOrEmpty(input: string) : boolean{
        return !input || input.length < 1;
    }

    public static getExcerpt(html: string) : string {

        if (!html) {
            return;
        }
    
        var elem = document.createElement("div");
        elem.innerHTML = html;
        var allText = elem.innerText;
    
        return allText.length > 100 ? allText.substr(0, 95) + "(...)" : allText;
    }

    public static compareStrings(s1: string, s2: string, ignoreCase?: boolean) : number {
    
        var sc1 = s1; var sc2 = s2;
    
        if (ignoreCase) {
            sc1 = sc1.toLocaleLowerCase();
            sc2 = sc2.toLocaleLowerCase();
        }
    
        if (sc1 < sc2) {
            return -1;
        }
    
        if (sc1 == sc2) {
            return 0;
        }
    
        return 1;
    }

    public static removeDiacritics(str : string) : string{
        if(str == null){
            return null;
        }
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        return str;
    }
}