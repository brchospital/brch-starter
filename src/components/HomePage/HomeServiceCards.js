import { DesktopVersion } from "./DesktopVersion";
import { SmartDeviceVersion } from "./SmartDeviceVersion";

export function HomeServiceCards() {
  return (
    <div>
      <SmartDeviceVersion />
      <DesktopVersion />
    </div>
  );
}
