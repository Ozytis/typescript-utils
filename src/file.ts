export class FileUtils
{
    /**
     * Transform a base64 string to Blob Object
     * @param b64Data 
     * @param contentType 
     * @param sliceSize 
     */
    public static b64toBlob(b64Data, contentType = '', sliceSize = 512) : Blob {
        var byteCharacters : string = atob(b64Data);
        var byteArrays : Array<any> = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
}