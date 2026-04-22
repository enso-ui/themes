import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const dividerSource = readFileSync(
    new URL('../bulma/components/divider.scss', import.meta.url),
    'utf8',
);

test('divider uses theme-aware background and text tokens', () => {
    assert.match(dividerSource, /--enso-divider-color/);
    assert.match(dividerSource, /--enso-divider-background/);
});
