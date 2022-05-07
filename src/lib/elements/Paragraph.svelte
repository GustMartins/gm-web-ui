<script lang="ts">
  import { get_current_component } from 'svelte/internal'
  import { eventsBuilder } from '../internal/events'
  import { telemetryActions } from '../internal/telemetry'

  let element: HTMLParagraphElement

  const events = eventsBuilder(get_current_component(), [
    'wui-telemetry-hover',
    'wui-telemetry-click',
    'wui-telemetry-viewport'
  ])

  export function getElement() {
    return element
  }
</script>

<p 
  bind:this={element} 
  use:events 
  use:telemetryActions 
  {...$$restProps}
>
  <slot />
</p>
