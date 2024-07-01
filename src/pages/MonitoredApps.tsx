import { Fragment, useLayoutEffect } from "react";
import { useInstalledApps } from "../stores/installed-apps";
import { Switch } from "~/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export function Component() {
  const apps = useInstalledApps((state) => state.apps);
  console.log(apps);

  useLayoutEffect(() => {
    window.document.title = "Monitored Apps";
  }, []);

  return (
    <div>
      {apps.map((app, i) => {
        return (
          <Fragment key={app.uniqueId}>
            <div className="flex h-14 items-center gap-4 px-4">
              {/* <Avatar className="h-10 w-10 rounded-md">
                {app.appIcon && (
                  <AvatarImage
                    src={
                      "data:image/png;base64," + app.appIcon.toString("base64")
                    }
                    className="bg"
                  />
                )}
                <AvatarFallback className="text-muted-foreground rounded-md">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21H20.0104C20.9816 21 21.4671 21 21.7348 20.7975C21.968 20.6211 22.1123 20.3515 22.1297 20.0596C22.1497 19.7246 21.8804 19.3205 21.3417 18.5125L18.3313 13.9969C17.8862 13.3292 17.6636 12.9954 17.3831 12.8791C17.1378 12.7773 16.8622 12.7773 16.6169 12.8791C16.3364 12.9954 16.1139 13.3292 15.6687 13.9969L14.9245 15.1132M19 21L11.3155 9.90018C10.8736 9.26182 10.6526 8.94264 10.3766 8.83044C10.1351 8.73228 9.8649 8.73228 9.62344 8.83044C9.34742 8.94264 9.12645 9.26182 8.68451 9.90018L2.73822 18.4893C2.17519 19.3025 1.89368 19.7092 1.90971 20.0473C1.92366 20.3419 2.06688 20.6152 2.30109 20.7943C2.57002 21 3.06459 21 4.05373 21H19ZM21 6C21 7.65685 19.6569 9 18 9C16.3432 9 15 7.65685 15 6C15 4.34315 16.3432 3 18 3C19.6569 3 21 4.34315 21 6Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </AvatarFallback>
              </Avatar> */}
              {app.appIcon && <img src={app.appIcon} className="h-10 w-10" />}
              <p className="flex-1 truncate">{app.appName}</p>
              <Switch />
            </div>
            {i < apps.length - 1 && (
              <div className="pl-[4.5rem]">
                <hr className="bg-border h-px" />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
