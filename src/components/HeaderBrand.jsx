/**
 * haddusha: "had" (modern bold) + red "+" (centered between, thin black outline) + "dusha" (CallFour, smaller to match scale).
 * Plus sits BETWEEN had and dusha; no overlap on the "d".
 */
import './HeaderBrand.css';

export default function HeaderBrand() {
  return (
    <a href="#home" className="header-brand" aria-label="Home">
      <span className="header-brand-had">had</span>
      <span className="header-brand-dpad" aria-hidden="true">+</span>
      <span className="header-brand-dusha">dusha</span>
    </a>
  );
}
