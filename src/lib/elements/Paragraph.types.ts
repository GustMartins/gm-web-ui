import type Component from './Paragraph.svelte'

export declare class ParagraphComponentUI extends Component {
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLParagraphElement>>, 'use'
  > & Component['$$prop_def']
}
