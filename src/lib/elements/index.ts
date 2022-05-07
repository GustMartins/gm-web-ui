import DivComponent from './Div.svelte'
import Heading1Component from './Heading1.svelte'
import Heading2Component from './Heading2.svelte'
import Heading3Component from './Heading3.svelte'
import Heading4Component from './Heading4.svelte'
import Heading5Component from './Heading5.svelte'
import Heading6Component from './Heading6.svelte'
import ParagraphComponent from './Paragraph.svelte'

import type { DivComponentUI } from './Div.types'
import type { ParagraphComponentUI } from './Paragraph.types'
import type { Heading1ComponentUI } from './Heading1.types'
import type { Heading2ComponentUI } from './Heading2.types'
import type { Heading3ComponentUI } from './Heading3.types'
import type { Heading4ComponentUI } from './Heading4.types'
import type { Heading5ComponentUI } from './Heading5.types'
import type { Heading6ComponentUI } from './Heading6.types'

export * from './Div.types'
export * from './Paragraph.types'
export * from './Heading1.types'
export * from './Heading2.types'
export * from './Heading3.types'
export * from './Heading4.types'
export * from './Heading5.types'
export * from './Heading6.types'

const Div = DivComponent as typeof DivComponentUI
export { Div }

const Paragraph = ParagraphComponent as typeof ParagraphComponentUI
export { Paragraph }

const Heading1 = Heading1Component as typeof Heading1ComponentUI
export { Heading1 }

const Heading2 = Heading2Component as typeof Heading2ComponentUI
export { Heading2 }

const Heading3 = Heading3Component as typeof Heading3ComponentUI
export { Heading3 }

const Heading4 = Heading4Component as typeof Heading4ComponentUI
export { Heading4 }

const Heading5 = Heading5Component as typeof Heading5ComponentUI
export { Heading5 }

const Heading6 = Heading6Component as typeof Heading6ComponentUI
export { Heading6 }
