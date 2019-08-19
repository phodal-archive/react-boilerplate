module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'react component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{name}}/{{name}}.tsx',
            templateFile: 'templates/component.hbs'
        }]
    });

    plop.setGenerator('page', {
        description: 'app page',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'page name'
        }],
        actions: [{
            type: 'add',
            path: 'src/pages/{{name}}/{{name}}.tsx',
            templateFile: 'templates/component.hbs'
        }]
    })
};
