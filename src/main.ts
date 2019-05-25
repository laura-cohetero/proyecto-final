import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import './polyfills';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}
//edite de aqui a ...
/*
@NgModule({
  imports: [
    
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports:[
    MatIconModule,
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent],
  //bootstrap: [AppComponent],
  providers: [],
  schemas: [
    //NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
   ],
})
export class AppModule {}
*/
//..aquí
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
