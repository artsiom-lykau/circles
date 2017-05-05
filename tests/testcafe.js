/**
 * Created by lykovartem on 05.05.2017.
 */

import {Selector} from 'testcafe';

fixture `circle-test`
    .page `http://localhost:8080/`;

test('New coords should be not equal to old coords', async t => {
    const element = Selector('#inner');
    let oldLeft = await element.getStyleProperty('left');
    let oldTop = await element.getStyleProperty('top');
    await t
        .hover('#inner')
        .expect(element.getStyleProperty('top')).notEql(oldTop)
        .expect(element.getStyleProperty('left')).notEql(oldLeft)
});
