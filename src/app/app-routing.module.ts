import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modulos/index/index.module')
      .then(m => m.IndexModule)
  },
  {
    path: 'admin', loadChildren: () => import('./modulos/admin/admin.module')
      .then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
