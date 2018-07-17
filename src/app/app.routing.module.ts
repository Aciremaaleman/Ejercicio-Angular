import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import { BitcoinsComponent } from './bitcoins/bitcoins.component';


const appRoutes: Routes = [
    {
        path: 'todo',
        component:  TodoComponent
    }, {
        path: 'listnews',
        component: ListComponent
    }, {
        path: 'bitcoins',
        component:  BitcoinsComponent
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);