function normalizeLineEndings(text) {
    // Replace all occurrences of '\r\n' (Windows-style) and '\r' (Mac-style) with '\n' (Unix-style)
    return text.replace(/\r\n|\r/g, '\n');
}

module.exports = {
    normalizeLineEndings,
};
