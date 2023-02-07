let cached: number | null = null;

export default function getScrollBarSize(): number {
  if (typeof cached === "number") {
    return cached;
  }
  const inner = document.createElement("div");
  inner.style.width = "100%";
  inner.style.height = "200px";
  const outer = document.createElement("div"),
    outerStyle = outer.style;
  outerStyle.position = "absolute";
  outerStyle.top = "0";
  outerStyle.left = "0";
  outerStyle.pointerEvents = "none";
  outerStyle.visibility = "hidden";
  outerStyle.width = "200px";
  outerStyle.height = "150px";
  outerStyle.overflow = "hidden";
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const widthContained = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);
  cached = widthContained - widthScroll;
  return cached;
}
