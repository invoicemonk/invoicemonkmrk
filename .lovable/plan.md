## Fix: E-invoicing dropdown overflow

Single edit to `src/components/layout/Navbar.tsx` (desktop dropdown panel, line 243):

- Add `max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain` to the inner panel `<div>` so it caps at viewport height minus the navbar and scrolls internally.
- Keep current width (`w-[680px]`), padding, and animation.

No mobile changes (mobile menu already scrolls with the page). No other files touched.