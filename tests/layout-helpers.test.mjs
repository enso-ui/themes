import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const helpersSource = readFileSync(
    new URL('../bulma/helpers.scss', import.meta.url),
    'utf8',
);

test('layout helpers define the expected responsive breakpoint map', () => {
    assert.match(helpersSource, /\$layout-breakpoints: \("mobile", "touch", "tablet", "desktop", "widescreen", "fullhd"\)/);
    assert.match(helpersSource, /@include mx\.mobile/);
    assert.match(helpersSource, /@include mx\.touch/);
    assert.match(helpersSource, /@include mx\.tablet/);
    assert.match(helpersSource, /@include mx\.desktop/);
    assert.match(helpersSource, /@include mx\.widescreen/);
    assert.match(helpersSource, /@include mx\.fullhd/);
});

test('layout helpers generate directional responsive spacing utilities', () => {
    assert.match(helpersSource, /responsive-layout-spacing-helper/);
    assert.match(helpersSource, /#\{\$shortcut}#\{\$selector-suffix}-#\{\$name}-#\{\$breakpoint}/);
    assert.match(helpersSource, /"x": \("left", "right"\)/);
    assert.match(helpersSource, /"y": \("top", "bottom"\)/);
});

test('layout helpers only allow auto for margin utilities', () => {
    assert.match(helpersSource, /"allows-auto": true/);
    assert.match(helpersSource, /"allows-auto": false/);
    assert.match(helpersSource, /@if map\.get\(\$config, "allows-auto"\)/);
});
