import { describe, expect,  test } from 'vitest';
import getScrollBarSize from '../getScrollBarSize';
describe('test ScrollBarSize',()=>{
    test("with no scrollBar",()=>{
        document.body.style.overflow="hidden";
        expect(getScrollBarSize()).toBe(0);
    })
    // test('with initial scrollBar',()=>{
    //     //can not resolve
    //     document.body.style.overflowY="scroll";
    //     document.body.style.height=`${window.innerHeight+100}px`;
    //     expect(getScrollBarSize()).toBe(0);
    // })
})

