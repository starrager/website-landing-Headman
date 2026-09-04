import type { Directive } from 'vue'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observer =
  typeof window !== 'undefined' && !prefersReducedMotion
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
      )
    : null

export const revealDirective: Directive<HTMLElement, string | undefined> = {
  mounted(el, binding) {
    if (binding.value) el.classList.add(`reveal--${binding.value}`)
    el.classList.add('reveal')
    if (prefersReducedMotion || !observer) {
      el.classList.add('is-visible')
      return
    }
    observer.observe(el)
  },
}
