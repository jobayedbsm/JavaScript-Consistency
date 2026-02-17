const UserRole = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer'
};

switch ("editor") {
  case UserRole.ADMIN:
    console.log('User has admin privileges');
    break;
  case UserRole.EDITOR:
    console.log('User can edit content');
    break;
  case UserRole.VIEWER:
    console.log('User can view content');
    break;
  default:
    console.log('Unknown user role');


}