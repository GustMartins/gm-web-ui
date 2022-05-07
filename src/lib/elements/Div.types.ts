import type Component from './Div.svelte'

export declare class DivComponentUI extends Component {
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>, 'use'
  > & Component['$$prop_def']
}
