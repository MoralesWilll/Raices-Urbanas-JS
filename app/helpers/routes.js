//Private

import { notificationScene } from "../scenes/private/notifications/notification";
import { addEditScene } from "../scenes/private/add-edit/addEdit";
import { ProfileScene } from "../scenes/private/profile";
import { PropertyView } from "../scenes/public/property-view/propertyView";
//Public
import { HomeScene } from "../scenes/public/home";
import { LoginPage } from "../scenes/public/login";
import { RegisterPage } from "../scenes/public/register";
import { availablePropertiesScene } from "../scenes/public/available-properties/availableProperties";
import { seller_profile } from "../scenes/private/profile/seller_profile/seller_profile";

export const routes = {
    private: [
        { path: "/profile", component: ProfileScene },
        { path: "/add-edit", component: addEditScene },
        { path: "/notificaions", component: notificationScene },
    ],
    public: [
        { path: "/", component: seller_profile},
        { path: "/home", component: HomeScene },
        { path: "/login", component: LoginPage },
        { path: "/register", component: RegisterPage },
        { path: "/availableProperties", component: availablePropertiesScene },
        { path: "/propertyView", component: PropertyView },
    ],
};
