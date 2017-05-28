# angular2-autosize

***This fork adds***
- AOT support
- nested textarea lookup so it is possible to use it with [Ionic](http://ionicframework.com/)s <ion-textarea>

***angular2-autosize*** is an Angular2 directive that automatically adjusts textarea height to fit content.

It adjusts the textarea height automatically to any text input, or changes to the model bound to the textarea.

## Demo

[http://stevepapa.com/angular2-autosize](http://stevepapa.com/angular2-autosize)

## Installation:

```bash
npm install angular2-autosize
```

## Use Example:

Add the declaration to your @NgModule:

```typescript
import {AutosizeModule} from 'angular2-autosize';

...

@NgModule({
  imports: [
    AutosizeModule
  ]
})
```

Use directly inside your HTML templates

```
<textarea autosize class="my-textarea">
    Hello, this is an example of Autosize in Angular2.
</textarea>
```
```
<ion-textarea autosize [(ngModel)]="text">
    And this is Ionic2 example
</ion-textarea>
```

## Author

[Steve Papa](https://stevepapa.com)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
