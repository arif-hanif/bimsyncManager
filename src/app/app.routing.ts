/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BimsyncProjectComponent } from './bimsync-project/bimsync-project.component';
import { BimsyncOauthComponent } from 'app/bimsync-oauth/bimsync-oauth.component';
import { DocumentationComponent} from 'app/documentation/documentation.component';
import { TakeoffComponent } from 'app/takeoff/takeoff.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'projects', component: BimsyncProjectComponent },
    {path: 'documentation', component: DocumentationComponent},
    {path: 'takeoff', component: TakeoffComponent},
    {path: 'callback', component: BimsyncOauthComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
