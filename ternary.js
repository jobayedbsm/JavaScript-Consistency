const UserRole = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer'
};


function getDashboardAccess(userRole) {

    switch (userRole) {
        case UserRole.ADMIN:
            return 'admin/dashboard';
        case UserRole.EDITOR:
            return 'editor/dashboard';
        case UserRole.VIEWER:
            return 'viewer/dashboard';
        default:
             throw new Error('Invalid user role');
    }
}

try {
    let user=getDashboardAccess(UserRole.EDITOR); // Output: 'Full access to dashboard'
console.log(user);
}catch (error) {    
    console.error(error.message) // Output: 'Invalid user role'
}