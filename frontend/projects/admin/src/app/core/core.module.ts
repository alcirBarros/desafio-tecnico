import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { loadCldr, setCurrencyCode } from '@syncfusion/ej2-base';
// import { L10n, setCulture } from '@syncfusion/ej2-base';

// import * as cagregorian from 'src/app/core/loadCldr/ca-gregorian.json';
// import * as currencies from 'src/app/core/loadCldr/currencies.json';
// import * as numbers from 'src/app/core/loadCldr/numbers.json';
// import * as timeZoneNames from 'src/app/core/loadCldr/timeZoneNames.json';
// import * as numberingSystems from 'src/app/core/loadCldr/numberingSystmes.json';

// L10n.load({
//   pt: {
//     daterangepicker: {
//       placeholder: 'Escolha um período',
//       startLabel: 'Data de início',
//       endLabel: 'Data final',
//       applyText: 'Aplicar',
//       cancelText: 'Cancelar',
//       selectedDays: 'Dias Selecionados',
//       days: 'Dias',
//     },
//   },
// });

// loadCldr(
//   numberingSystems['default'],
//   cagregorian['default'],
//   currencies['default'],
//   numbers['default'],
//   timeZoneNames['default'],
// );
// setCurrencyCode('BRL');
// setCulture('pt');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
