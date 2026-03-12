const fs = require('fs');

const p = 'js/quiz.js';
let s = fs.readFileSync(p, 'utf8');

const newShuffleBlock = String.raw`    // RANDOMIZE option order so correct answer isn't always same letter
    // Track the correct option by text (not by old A/B/C/D label), then re-derive the new letter after shuffling.
    try {
        if (Array.isArray(q.options) && q.options.length > 0) {
            const stripLabel = (s) => String(s || '').replace(/^[A-D]\.\?\s*/i, '').trim();
            const letters = ['A','B','C','D'];

            // Determine correct answer text before shuffling.
            let correctText = null;
            if (q.a) {
                correctText = stripLabel(q.a);
            } else if (q.answer && Array.isArray(q.options)) {
                const map = { A:0, B:1, C:2, D:3 };
                const letter = String(q.answer).trim().charAt(0).toUpperCase();
                const idx = map[letter];
                if (typeof idx === 'number' && q.options[idx]) correctText = stripLabel(q.options[idx]);
            } else if (q.correctLetter && Array.isArray(q.options)) {
                const map = { A:0, B:1, C:2, D:3 };
                const idx = map[q.correctLetter];
                if (typeof idx === 'number' && q.options[idx]) correctText = stripLabel(q.options[idx]);
            }

            const rawTexts = q.options.map(stripLabel);

            // Build shuffled index order
            const idxs = rawTexts.map((_, i) => i);
            for (let i = idxs.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
            }

            // Create new labeled options
            const newOptions = idxs.map((oi, i) => letters[i] + '. ' + (rawTexts[oi] || ''));
            q.options = newOptions;

            // Recompute correct letter (and q.a for display) based on the correct text.
            if (correctText) {
                const found = newOptions.findIndex(o => stripLabel(o) === correctText);
                if (found >= 0) {
                    q.correctLetter = letters[found];
                    q.a = newOptions[found];
                }
            }
        }
    } catch (e) {
        // ignore shuffling errors and fall back to original ordering
    }
`;

// Fix the stripLabel regex inside the injected block to the intended pattern.
const fixedShuffleBlock = newShuffleBlock.replace(
  /replace\(\/\^\[A-D\]\\\.\\\?\\s\*\/i, ''\)/,
  "replace(/^[A-D]\\.?\\s*/i, '')"
);

const shuffleRe = /^\s*\/\/ RANDOMIZE option order so correct answer isn't always same letter\r?\n\s*try \{[\s\S]*?\r?\n\s*\} catch \(e\) \{\r?\n\s*\/\/ ignore shuffling errors and fall back to original ordering\r?\n\s*\}\r?\n/m;
if (!shuffleRe.test(s)) throw new Error('shuffle block not found in ' + p);
s = s.replace(shuffleRe, fixedShuffleBlock);

const correctDisplayRe = /\/\/ Determine display of correct answer: prefer full option text if available\r?\n\s*let correctDisplay = q\.a \|\| '';\r?\n\s*if \(!correctDisplay && Array\.isArray\(q\.options\) && correctLetter\) \{\r?\n\s*const map = \{ A:0, B:1, C:2, D:3 \};\r?\n\s*const idx = map\[correctLetter\];\r?\n\s*if \(typeof idx === 'number' && q\.options\[idx\]\) correctDisplay = q\.options\[idx\];\r?\n\s*\}\r?\n/;
if (!correctDisplayRe.test(s)) throw new Error('correctDisplay block not found in ' + p);

const newCorrectDisplayBlock = String.raw`// Determine display of correct answer from current option order (post-shuffle)
        let correctDisplay = '';
        if (Array.isArray(q.options) && correctLetter) {
            const map = { A:0, B:1, C:2, D:3 };
            const idx = map[correctLetter];
            if (typeof idx === 'number' && q.options[idx]) correctDisplay = q.options[idx];
        }
        if (!correctDisplay) correctDisplay = q.a || '';
`;

s = s.replace(correctDisplayRe, newCorrectDisplayBlock);

fs.writeFileSync(p, s, 'utf8');
console.log('Patched', p);