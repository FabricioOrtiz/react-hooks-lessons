import { NavBar } from "../nav-bar/nav-bar";
import { NavMobile } from "../nav-mobile/nav-mobile";

export const TopBar = () => {
    return(
    <div className="fixed top-0 left-0 right-0 bg-neutral-950 border-b border-neutral-700">
        <nav className="container flex items-center justify-between py-1 lg:py-5">
        <span className="text-lg">⚡️</span>
          <NavMobile />
          <NavBar />
        </nav>
     </div>
     );
}