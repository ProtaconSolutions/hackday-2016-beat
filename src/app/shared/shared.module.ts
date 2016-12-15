import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { Config } from '../config/config';

@NgModule({
  declarations: [
  ],
  imports: [
    AngularFireModule.initializeApp(Config.FIREBASE_CONFIG),
  ],
  providers: [
  ],
  exports: [
    AngularFireModule,
  ],
})

export class SharedModule { }
