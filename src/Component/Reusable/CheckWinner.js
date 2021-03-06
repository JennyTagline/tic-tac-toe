export const checkWinner = (strings) => {
    if (strings.length === 9) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (strings[a] && strings[a] === strings[b] && strings[a] === strings[c]) {
                return strings[a];
            }
        }
        return null;
    } else if (strings.length === 16) {
        const lines = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
            [12, 13, 14, 15],
            [0, 4, 8, 12],
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [0, 5, 10, 15],
            [3, 6, 9, 12]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c, d] = lines[i];
            if (strings[a] && strings[a] === strings[b] && strings[a] === strings[c] && strings[a] === strings[d]) {
                return strings[a];
            }
        }
        return null;
    } 
}