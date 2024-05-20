//Private

import { notificationScene } from '../scenes/private/notification/notification';
import { addEditScene } from '../scenes/private/add-edit/addEdit';
import { ProfileScene } from '../scenes/private/profile';
import { PropertyView } from '../scenes/public/property-view/propertyView';
//Public
import { HomeScene} from '../scenes/public/home';
import { LoginPage } from '../scenes/public/login';
import { RegisterPage } from '../scenes/public/register';
import { availablePropertiesScene } from '../scenes/public/available-properties/availableProperties';

export const routes = {
    private: [
        { path: '/profile', component: ProfileScene },
        { path: '/add-edit', component: addEditScene },
        { path: '/notificaion', component: notificationScene }
    ],
    public: [
        { path: '/', component: HomeScene},
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage },
        { path: '/availableProperties', component: availablePropertiesScene },  
        { path: '/propertyView', component: PropertyView} 
    ]
};