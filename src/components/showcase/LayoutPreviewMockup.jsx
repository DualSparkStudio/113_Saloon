/** Mini CSS wireframe showing each layout structure */
export default function LayoutPreviewMockup({ layoutType }) {
  const base = "rounded-sm border border-white/20 bg-white/10";

  switch (layoutType) {
    case "cinematic":
      return (
        <div className="absolute inset-4 flex flex-col gap-1">
          <div className={`${base} flex-1`} />
          <div className="flex gap-1 h-3">
            {[1, 2, 3].map((i) => <div key={i} className={`${base} flex-1`} />)}
          </div>
        </div>
      );
    case "editorial":
      return (
        <div className="absolute inset-4 flex gap-1">
          <div className={`${base} w-1/4`} />
          <div className="flex-1 flex flex-col gap-1">
            <div className={`${base} flex-1`} />
            <div className={`${base} h-1/3`} />
          </div>
        </div>
      );
    case "minimal":
      return (
        <div className="absolute inset-4 flex flex-col items-center gap-1">
          <div className={`${base} w-3/4 h-2`} />
          <div className={`${base} w-full flex-1`} />
          <div className={`${base} w-1/2 h-2 rounded-full`} />
        </div>
      );
    case "bento":
      return (
        <div className="absolute inset-4 grid grid-cols-3 grid-rows-3 gap-0.5">
          <div className={`${base} col-span-1`} />
          <div className={`${base} col-span-2 row-span-2`} />
          <div className={`${base}`} />
          <div className={`${base}`} />
          <div className={`${base} col-span-2`} />
        </div>
      );
    case "magazine":
      return (
        <div className="absolute inset-4 grid grid-cols-3 gap-1">
          <div className={`${base} row-span-2`} />
          <div className={`${base} row-span-2`} />
          <div className={`${base}`} />
          <div className={`${base} col-span-3 h-2`} />
        </div>
      );
    case "brutalist":
      return (
        <div className="absolute inset-4 flex flex-col gap-0.5">
          <div className={`${base} h-1/4 border-2 border-white/30`} />
          <div className="flex gap-0.5 flex-1">
            <div className={`${base} flex-1 border-2`} />
            <div className={`${base} flex-[2] border-2`} />
          </div>
          <div className="flex gap-0.5 h-2">
            {[1, 2, 3].map((i) => <div key={i} className={`${base} flex-1 border-2`} />)}
          </div>
        </div>
      );
    default:
      return null;
  }
}
