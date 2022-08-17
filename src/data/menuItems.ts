import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'reader-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh-circle-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-circle-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'infinite-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'shapes-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Change Theme',
    icon: 'color-fill-outline',
    component: 'ChangeThemeScreen',
  },
];
