# WhatsApp Contact Button

A floating WhatsApp contact link for React by 3X Web. The green circular button draws attention with an expanding wave and opens the conversation through WhatsApp Click to Chat.

## Install

```sh
npm install @3xweb/whatsapp-contact-button
```

## Use

Import the stylesheet once in your application's global entry point. Render the component once, near the application root.

```tsx
import { WhatsAppContactButton } from '@3xweb/whatsapp-contact-button';
import '@3xweb/whatsapp-contact-button/styles.css';

export function App() {
  return (
    <WhatsAppContactButton
      phoneNumber="+55 (11) 91234-5678"
      message="Olá! Gostaria de saber mais."
    />
  );
}
```

| Prop | Type | Behavior |
| --- | --- | --- |
| `phoneNumber` | `string` | Required international number starting with the country code. Spaces, parentheses, periods, hyphens and a leading plus are accepted. Invalid formats throw a `TypeError`. |
| `message` | `string` | Optional text prefilled in WhatsApp. Blank or whitespace-only messages are omitted. |
| `ariaLabel` | `string` | Accessible link name. Defaults to `Conversar no WhatsApp`. Set this to match your application's language. |
| `position` | `WhatsAppContactButtonPosition` | Fixed viewport corner. Accepts `bottom-right` (default), `bottom-left`, `top-right`, or `top-left`. |
| `className` | `string` | Additional CSS class applied to the link. |
| `style` | `CSSProperties` with CSS custom properties | Inline styles applied to the link. |

Replace the example number with an active WhatsApp number. The link opens in the current browsing context. WhatsApp lets the visitor review the prefilled message and choose when to send it.

The link supports keyboard navigation and has a visible focus ring. The wave plays three times and respects the system setting for reduced motion.

The package ships ESM, TypeScript declarations, and plain CSS. React 18 or 19 is the only peer dependency.

## Handle events

The component forwards React event handlers to the underlying anchor. Use
`onClick` to track attempts to open WhatsApp. Native keyboard activation also
triggers this handler. Calling `event.preventDefault()` cancels navigation.
Handlers such as `onFocus`, `onBlur`, and `onKeyDown` are also available.

```tsx
<WhatsAppContactButton
  phoneNumber="+55 (11) 91234-5678"
  onClick={() => trackEvent('whatsapp_contact_click')}
/>
```

In this example, `trackEvent` is a function supplied by your application.

## Customize the button

This example places the link in the bottom-left corner, sets its diameter to 64 px, and moves it 32 px above the bottom edge plus any device safe-area inset. Use `className` to share a theme across instances and `style` for individual overrides.

```tsx
<WhatsAppContactButton
  phoneNumber="+55 (11) 91234-5678"
  position="bottom-left"
  className="support-button"
  style={{ '--bwb-size': '64px', '--bwb-offset-block': '32px' }}
/>
```

```css
.support-button {
  --bwb-background: #126448;
  --bwb-hover-background: #0f523c;
  --bwb-color: white;
  --bwb-wave-color: #126448;
}
```

The custom properties below can be set on the link or inherited from an ancestor. Use CSS lengths such as `24px` or `1.5rem` for dimensions and offsets. When overriding standard CSS rules directly, load your stylesheet after the package stylesheet.

| CSS property | Default | Controls |
| --- | --- | --- |
| `--bwb-background` | `#25d366` | Button background |
| `--bwb-hover-background` | `#38e279` | Button background on hover |
| `--bwb-color` | `#102b1b` | Icon color |
| `--bwb-wave-color` | Button background | Expanding wave color |
| `--bwb-size` | `60px` | Button diameter |
| `--bwb-icon-size` | `34px` | Icon width and height |
| `--bwb-offset-inline` | `24px` | Distance from the selected left or right edge, plus the safe-area inset |
| `--bwb-offset-block` | `24px` | Distance from the selected top or bottom edge, plus the safe-area inset |
| `--bwb-z-index` | `50` | Stacking order |

## License

MIT
