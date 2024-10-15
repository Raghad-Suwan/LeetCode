/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
}

var findWords = function(board, words) {
    const trie = new Trie();

    // Build the trie from the list of words
    for (const word of words) {
        trie.insert(word);
    }

    const rows = board.length;
    const cols = board[0].length;
    const result = [];

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up

    // Helper function to perform DFS
    const dfs = (row, col, node, path) => {
        const char = board[row][col];
        
        if (!node.children[char]) return;  // Not a valid path in the trie

        node = node.children[char];
        path += char;

        if (node.isEndOfWord) {
            result.push(path);
            node.isEndOfWord = false;  // Avoid duplicate results
        }

        board[row][col] = '#';  // Mark the current cell as visited

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol] !== '#') {
                dfs(newRow, newCol, node, path);
            }
        }

        board[row][col] = char;  // Restore the cell after DFS
    };

    // Start DFS from every cell in the board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, trie.root, '');
        }
    }

    return result;
};
