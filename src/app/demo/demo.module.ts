import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';

import { DemoRoutingModule } from './demo-routing.module';
import { MaterialModule } from '../shared/material.module';

import { FlexboxComponent } from './flexbox/flexbox.component';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ]
})
export class DemoModule { }
