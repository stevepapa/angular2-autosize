import {NgModule, ModuleWithProviders} from "@angular/core";
import {Autosize} from './src/autosize.directive';
export * from './src/autosize.directive';

@NgModule({
    declarations: [
        Autosize
    ],
    exports: [
        Autosize
    ]
})
export class AutosizeModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: AutosizeModule, providers: []};
    }
}
