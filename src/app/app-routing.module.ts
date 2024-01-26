import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home.component';
import { YarnStashComponent } from './features/yarn-stash/components/yarn-stash.component';
import { RepCounterComponent } from './features/rep-counter/components/rep-counter.component';
import { RowCounterComponent } from './features/row-counter/components/row-counter.component';
import { IncreaseCalculatorComponent } from './features/increase-calculator/components/increase-calculator.component';
import { DecreaseCalculatorComponent } from './features/decrease-calculator/components/decrease-calculator.component';
import { ProjectsPageComponent } from './features/project-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'yarn-stash',
    component: YarnStashComponent
  },
  {
    path: 'row-counter',
    component: ProjectsPageComponent
  },
  {
    path: 'row-counter/:project',
    component: RowCounterComponent
  },
  {
    path: 'rep-counter',
    component: RepCounterComponent
  },
  {
    path: 'increase-calculator',
    component: IncreaseCalculatorComponent
  },
  {
    path: 'decrease-calculator',
    component: DecreaseCalculatorComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
