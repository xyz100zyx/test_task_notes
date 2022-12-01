export const getTagsFromString = (text: string): Array<string> => {
    const result: Array<string> = []
    const words = text.split(" ").filter((word) => {
        return word[0] === '#';
    });
    words.forEach(word => {
        result.push(word);
    });
    return result
}