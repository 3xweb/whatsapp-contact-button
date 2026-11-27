import type { CSSProperties, DOMAttributes, ReactElement } from 'react';

export type WhatsAppContactButtonPosition =
  | 'bottom-right'
  | 'bottom-left'
  | 'top-right'
  | 'top-left';

type LinkEventHandlers = Pick<
  DOMAttributes<HTMLAnchorElement>,
  Extract<keyof DOMAttributes<HTMLAnchorElement>, `on${string}`>
>;

export interface WhatsAppContactButtonProps extends LinkEventHandlers {
  /** International number including the country code, for example +55 (11) 91234-5678. */
  phoneNumber: string;
  /** Optional message prefilled in WhatsApp. */
  message?: string;
  /** Accessible link name. Defaults to "Conversar no WhatsApp". */
  ariaLabel?: string;
  /** Fixed viewport corner. Defaults to "bottom-right". */
  position?: WhatsAppContactButtonPosition;
  /** Additional class applied to the contact link. */
  className?: string;
  /** Inline styles and custom properties applied to the contact link. */
  style?: CSSProperties & { [name: `--${string}`]: string | number | undefined };
}

export declare function WhatsAppContactButton(
  props: WhatsAppContactButtonProps,
): ReactElement;
