//Private
import { addEditScene } from "../scenes/private/add-edit/addEdit";
import { appointmentScene } from "../scenes/private/appointment/appointment";
import { messagesScene } from "../scenes/private/messages/messages";
import { notificationScene } from "../scenes/private/notifications/notification";
import { ProfileScene } from "../scenes/private/profile";
//Public
import { availablePropertiesScene } from "../scenes/public/available-properties/availableProperties";
import { HomeScene } from "../scenes/public/home";
import { LoginPage } from "../scenes/public/login";
import { PropertyView } from "../scenes/public/property-view/propertyView";
import { RegisterPage } from "../scenes/public/register";

export const routes = {
    private: [
        { path: "/profile", component: ProfileScene },
        { path: "/add-edit", component: addEditScene },
        { path: "/notificaions", component: notificationScene },
        { path: "/appointment", component: appointmentScene },
        { path: "/messages", component: messagesScene },
    ],
    public: [
        { path: "/", component: LoginPage },
        { path: "/home", component: HomeScene },
        { path: "/login", component: LoginPage },
        { path: "/register", component: RegisterPage },
        { path: "/availableProperties", component: availablePropertiesScene },
        { path: "/propertyView", component: PropertyView },
    ],
};
