import tinyjam from 'tinyjam';

export function buildHTML() {
    tinyjam('site', 'dist', {
        log: true,         // log the progress (like in the CLI)
        breaks: false,      // Markdown: add single line breaks (like in GitHub comments)
        smartypants: false, // Markdown: convert quotes, dashes and ellipses to typographic equivalents
        highlight: null     // a code highlighting function: (code, lang) => html
    });
}