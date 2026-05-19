#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ─── Input ────────────────────────────────────────────────────────────────────

const [exerciseNum, date, challengeName] = process.argv.slice(2);

if (!exerciseNum || !date || !challengeName) {
  console.error(`
Usage: node generate.js <exerciseNum> <date> <challengeName>
Example: node generate.js 281 2026-05-18 bingoRange
  `);
  process.exit(1);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Format date from 2026-05-18 to May 18, 2026
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  const months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
}

// Convert challengeName to UPPER CASE TITLE for README
function toTitle(str) {
  return str
    .replace(/([A-Z])/g, ' $1')  // camelCase to words
    .trim()
    .toUpperCase();
}

// ─── Paths ────────────────────────────────────────────────────────────────────

const folderName = `${exerciseNum}-${date}-${challengeName}`;
const folderPath = path.join(process.cwd(), 'daily-challenges', folderName);

if (fs.existsSync(folderPath)) {
  console.error(`Folder already exists: ${folderPath}`);
  process.exit(1);
}

fs.mkdirSync(folderPath, { recursive: true });

const formattedDate = formatDate(date);
const title = toTitle(challengeName);

// ─── File Templates ───────────────────────────────────────────────────────────

const README = `# Exercise ${exerciseNum} - ${title}
### ${formattedDate}

<!-- Add problem description here -->

## Examples

\`\`\`
// Add examples here
\`\`\`

## Hints
- 
- 
- 
`;

const STARTER_JS = `function ${challengeName}() {

}

// Do not edit below this line
module.exports = ${challengeName};
`;

const SOLUTION_JS = `function ${challengeName}() {
  // Your solution here
}

/* OTHER SOLUTIONS

*/

// Do not edit below this line
module.exports = ${challengeName};
`;

const STARTER_SPEC = `const ${challengeName} = require('./${challengeName}');

describe('${challengeName}', () => {
  test.skip('', () => {
    expect(${challengeName}()).toEqual();
  });
});
`;

const SOLUTION_SPEC = `const ${challengeName} = require('./${challengeName}-solution');

describe('${challengeName}', () => {
  test('', () => {
    expect(${challengeName}()).toEqual();
  });
});
`;

// ─── Write Files ──────────────────────────────────────────────────────────────

const files = {
  'README.md':                                    README,
  [`${challengeName}.js`]:                        STARTER_JS,
  [`${challengeName}.spec.js`]:                   STARTER_SPEC,
  [`${challengeName}-solution.js`]:               SOLUTION_JS,
  [`${challengeName}-solution.spec.js`]:          SOLUTION_SPEC,
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(folderPath, filename), content);
}

// ─── Done ─────────────────────────────────────────────────────────────────────

console.log(`
✓ Created: daily-challenges/${folderName}/
  ├── README.md
  ├── ${challengeName}.js
  ├── ${challengeName}.spec.js
  ├── ${challengeName}-solution.js
  └── ${challengeName}-solution.spec.js

Next steps:
  1. Fill in README.md with the problem description and hints
  2. Add test cases to ${challengeName}.spec.js and ${challengeName}-solution.spec.js
  3. Write your solution in ${challengeName}-solution.js
  4. Run: npm test ${challengeName}.spec.js
`);
