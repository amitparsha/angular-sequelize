import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NgModule } from '@angular/core';
import { DefaultPageComponent } from './default-page/default-page.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
    {path : '', component: HomeComponent,
        children: [
            {path: '', component: DefaultPageComponent},
            {path: 'users', component: UserPageComponent},
            {path: 'new-user', component: NewUserComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRouterModule { }

