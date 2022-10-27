export interface UserType {
  id: string;
  email: string;
  username: string;
  avatar: string | null;
}
export interface SelectOption<T> {
  id: number;
  name: T;
}

export interface Router {
  /**
   * @description Where the route will lead to
   */
  to: string;
  /**
   * @description Route name displayed on expanded sidebar
   */
  routeName: string;
  /**
   * @description Icon from react-icons
   */
  smallIcon: JSX.Element;
  /**
   * @description Icon from react-icons
   */
  bigIcon: JSX.Element;
  /**
   * @description Page you want to display
   */
  element?: JSX.Element;
  /**
   * @description tooltip should be specified if you want it to be different from routeName
   * @default tooltip is routeName but smaller case
   */
  tooltip?: string;
}
