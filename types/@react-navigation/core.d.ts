declare module '@react-navigation/core' {
  import * as React from 'react';
  import { Transition } from 'react-native-reanimated';
  import {
    NavigationRouteConfigMap,
    NavigationNavigator,
    NavigationProp,
    NavigationState,
    SwitchNavigatorConfig,
    NavigationRouter,
  } from 'react-navigation';

  export const SceneView: React.ComponentType<{
    screenProps: unknown;
    navigation: object;
    component: React.ComponentType<any>;
  }>;

  export function createNavigator(
    StackView: React.ComponentType<any>,
    router: NavigationRouter<S, Options>,
    navigatorConfig?: {} | null
  ): NavigationNavigator<{}, NavigationProp<NavigationState>>;

  export function SwitchRouter(
    routeConfigMap: NavigationRouteConfigMap,
    switchConfig: SwitchNavigatorConfig & {
      transition?: React.ReactNode;
    }
  );
}
