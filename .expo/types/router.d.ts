/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(drawer)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/about`; params?: Router.UnknownInputParams; } | { pathname: `/newDeviceRegistration`; params?: Router.UnknownInputParams; } | { pathname: `/linkDevice`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(drawer)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/about`; params?: Router.UnknownOutputParams; } | { pathname: `/newDeviceRegistration`; params?: Router.UnknownOutputParams; } | { pathname: `/linkDevice`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(drawer)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/about${`?${string}` | `#${string}` | ''}` | `/newDeviceRegistration${`?${string}` | `#${string}` | ''}` | `/linkDevice${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(drawer)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/about`; params?: Router.UnknownInputParams; } | { pathname: `/newDeviceRegistration`; params?: Router.UnknownInputParams; } | { pathname: `/linkDevice`; params?: Router.UnknownInputParams; };
    }
  }
}