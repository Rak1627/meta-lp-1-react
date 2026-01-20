export function ensureScript(src) {
  if (typeof document === 'undefined') return

  const existing = document.querySelector(`script[src="${src}"]`)
  if (existing) return

  const script = document.createElement('script')
  script.src = src
  script.async = true
  document.head.appendChild(script)
}

