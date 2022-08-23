import { NavigationMobile } from "./NavigationMobile";
import { NavigationDesktop } from "./NavigationDesktop";
import "./style.css";
// custom style import

export function HeaderLayout() {
  return (
    <div className="header-navigation">
      <NavigationMobile />
      <NavigationDesktop />
    </div>
  );
}
