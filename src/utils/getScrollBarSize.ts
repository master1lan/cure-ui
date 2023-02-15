import { ObjectToHtmlStyle } from './css';

let cached: number | null = null;

export default function getScrollBarSize(): number {
  if (typeof cached === 'number') {
    return cached;
  }
  const inner = document.createElement('div');
  ObjectToHtmlStyle(
    {
      width: '100%',
      height: '200px',
    },
    inner
  );
  const outer = document.createElement('div');
  ObjectToHtmlStyle(
    {
      position: 'absolute',
      top: '0',
      left: '0',
      pointerEvents: 'none',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden',
    },
    outer
  );
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const widthContained = inner.offsetWidth;
  ObjectToHtmlStyle(
    {
      overflow: 'scroll',
    },
    outer
  );
  let widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);
  cached = widthContained - widthScroll;
  return cached;
}
