export default function listLayout() {
    return {
        scope: {
            'title': '@',
            'singular': '@',
            'plural': '@'
        },
        template: require('./template.html'),
        replace: true,
        controller: function($scope) {
            
        }
    };
}
