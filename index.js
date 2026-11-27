import { jsx } from 'react/jsx-runtime';

export function WhatsAppContactButton({
  phoneNumber,
  message = '',
  ariaLabel = 'Conversar no WhatsApp',
  position = 'bottom-right',
  className,
  style,
  ...eventHandlers
}) {
  const digits = phoneNumber.replace(/[\s().-]/g, '').replace(/^\+/, '');

  if (!/^[1-9]\d{1,14}$/.test(digits)) {
    throw new TypeError('phoneNumber must include the country code and up to 15 digits.');
  }

  const url = new URL(`https://wa.me/${digits}`);
  if (message.trim()) {
    url.searchParams.set('text', message);
  }

  return jsx('a', {
    ...eventHandlers,
    className: ['whatsapp-contact-button', className].filter(Boolean).join(' '),
    'data-position': position,
    style,
    href: url.href,
    'aria-label': ariaLabel.trim() || 'Conversar no WhatsApp',
    children: jsx('svg', {
      'aria-hidden': true,
      focusable: 'false',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: jsx('path', {
        d: 'M5 17.2 3.5 21l4-1.2a8.5 8.5 0 1 0-2.5-2.6ZM9 8.4c-.7-.7-1.7.1-1.6 1.3.2 2.9 3.5 6.1 6.4 6.3 1.3.1 2.1-.9 1.4-1.6l-1.6-1.1c-.3-.2-.7-.2-.9.1l-.5.6a7 7 0 0 1-2.7-2.7l.6-.6c.3-.2.3-.6.1-.9Z',
      }),
    }),
  });
}
