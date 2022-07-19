# ng2-ui-auth

An Angular 14+ module for token based authentication using OAuth and OAuth2. You can use it for authenticating with Google, Facebook, LinkedIn, Twitter, Instagram, GitHub, Bitbucket, Yahoo, Twitch, Microsoft and others.

This library is a port of [ronzeidman/ng2-ui-auth](https://github.com/ronzeidman/ng2-ui-auth) to Angular 14. The API of the module was not changed and therefore any implementation and [examples](https://github.com/ronzeidman/ng2-ui-auth-example) should work.

The original ng2-ui-auth library is based on [satellizer](https://github.com/sahat/satellizer).

## Installation

```ts
npm i --save @faubulous/ngx-ui-auth
```

## Usage

Modify your main app module and add the folowing lines:

```ts
import {Ng2UiAuthModule} from '@faubulous/ngx-ui-auth';

const GOOGLE_CLIENT_ID = '******\*\*******\*\*******\*\*******.apps.googleusercontent.com';

@NgModule({
imports: [
BrowserModule,
HttpClientModule,
Ng2UiAuthModule.forRoot({providers: {google: { clientId: GOOGLE_CLIENT_ID}}}),
...
]
...
})
AppModule {}
```

A more complete example can be found [here](https://github.com/ronzeidman/ng2-ui-auth-example).