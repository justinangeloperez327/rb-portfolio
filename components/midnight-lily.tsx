export function MidnightLily() {
  return (
    <div className="relative isolate mx-auto aspect-square w-full max-w-[620px]" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-[22%] rounded-full bg-blue-400/10 blur-2xl" />

      <svg
        viewBox="0 0 640 640"
        role="presentation"
        className="relative h-full w-full overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient id="lily-stroke" x1="160" y1="90" x2="500" y2="560">
            <stop offset="0" stopColor="#93C5FD" stopOpacity="0.32" />
            <stop offset="0.48" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="1" stopColor="#2563EB" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="lily-fill" cx="0" cy="0" r="1" gradientTransform="translate(320 308) rotate(90) scale(220)">
            <stop stopColor="#2563EB" stopOpacity="0.14" />
            <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="320" cy="320" r="232" stroke="#1E293B" strokeDasharray="2 14" />
        <circle cx="320" cy="320" r="168" stroke="#1E293B" strokeOpacity="0.75" />
        <path d="M88 320H552M320 88V552" stroke="#1E293B" strokeOpacity="0.5" />

        <g className="lily-breathe">
          <ellipse cx="320" cy="310" rx="190" ry="190" fill="url(#lily-fill)" />

          <path
            d="M320 308C280 248 270 173 320 108C370 173 360 248 320 308Z"
            stroke="url(#lily-stroke)"
            strokeWidth="2"
          />
          <path
            d="M320 308C381 271 456 270 515 322C442 358 371 348 320 308Z"
            stroke="url(#lily-stroke)"
            strokeWidth="2"
          />
          <path
            d="M320 308C259 271 184 270 125 322C198 358 269 348 320 308Z"
            stroke="url(#lily-stroke)"
            strokeWidth="2"
          />
          <path
            d="M320 308C279 349 258 419 291 500C344 448 349 375 320 308Z"
            stroke="url(#lily-stroke)"
            strokeWidth="2"
          />
          <path
            d="M320 308C361 349 382 419 349 500C296 448 291 375 320 308Z"
            stroke="url(#lily-stroke)"
            strokeWidth="2"
          />

          <path
            d="M320 307C296 257 241 224 177 221C197 285 245 319 320 307Z"
            stroke="#60A5FA"
            strokeOpacity="0.46"
            strokeWidth="1.5"
          />
          <path
            d="M320 307C344 257 399 224 463 221C443 285 395 319 320 307Z"
            stroke="#60A5FA"
            strokeOpacity="0.46"
            strokeWidth="1.5"
          />

          <circle cx="320" cy="308" r="7" fill="#3B82F6" />
          <circle cx="320" cy="308" r="18" stroke="#3B82F6" strokeOpacity="0.35" />
        </g>
      </svg>

      <div className="absolute right-[4%] top-[17%] font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
        midnight / lily
      </div>
      <div className="absolute bottom-[11%] left-[5%] font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
        structure / instinct
      </div>
    </div>
  );
}
