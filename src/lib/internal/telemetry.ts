
export function telemetryActions(node: HTMLElement | SVGElement) {
  if (!node.dataset.telemetry) return

  let hoverTime = 0
  let startTime: number
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.dispatchEvent(new CustomEvent('wui-telemetry-viewport'))
        }
      })
    }
  )

  function handleHoverStartTelemetry() {
    startTime = window.performance.now()
  }

  function handleHoverTelemetry() {
		hoverTime += window.performance.now() - startTime

    node.dispatchEvent(new CustomEvent('wui-telemetry-hover', {
      detail: parseFloat((hoverTime / 1000).toFixed(2))
    }))

    // Limpamos para futuros usos
    hoverTime = 0
  }

  function handleClickTelemetry() {
    node.dispatchEvent(new CustomEvent('wui-telemetry-click'))
  }

  intersectionObserver.observe(node)

  node.addEventListener('mouseenter', handleHoverStartTelemetry)
  node.addEventListener('mouseleave', handleHoverTelemetry)
  node.addEventListener('click', handleClickTelemetry)

  return {
    destroy() {
      intersectionObserver.unobserve(node)
      node.removeEventListener('mouseenter', handleHoverStartTelemetry)
      node.removeEventListener('mouseleave', handleHoverTelemetry)
      node.removeEventListener('click', handleClickTelemetry)
    }
  }
}
