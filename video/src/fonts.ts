// ✅ [FEATURE]: self-hosted League Spartan (same family as the site + app copy),
// held behind delayRender so no frame renders with a fallback font.
import '@fontsource/league-spartan/400.css';
import '@fontsource/league-spartan/700.css';
import '@fontsource/league-spartan/800.css';
import '@fontsource/league-spartan/900.css';
import { continueRender, delayRender } from 'remotion';

const handle = delayRender('Loading League Spartan');
Promise.all(
  ['400', '700', '800', '900'].map((w) => document.fonts.load(`${w} 32px "League Spartan"`)),
)
  .then(() => document.fonts.ready)
  .then(() => continueRender(handle))
  .catch(() => continueRender(handle));
