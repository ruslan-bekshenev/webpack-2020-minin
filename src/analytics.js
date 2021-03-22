function createAnalytics() {
  let counter = 0
  let isDestroyes = false
  const listener = () => counter++

  document.addEventListener('click', listener)

  return {
    destroy() {
      document.removeEventListener('click', listener)
      isDestroyes = true
    },
    getClicks() {
      if (isDestroyes) {
        return 'Analytics is destroyed'
      }
      return counter
    }
  }
}

window.analytics = createAnalytics()