import HelloWorldPage from './client/HelloWorldPage.jsx';
import PostcardPage from './client/PostcardPage.jsx';

var DynamicRoutes = [{
  'name': 'HelloWorldPage',
  'path': '/sms-messaging',
  'component': HelloWorldPage
}];

var SidebarElements = [{
  'primaryText': 'SMS Messaging',
  'to': '/sms-messaging',
  'href': '/sms-messaging'
}];

export { SidebarElements, DynamicRoutes, SamplePage, PostcardPage };
