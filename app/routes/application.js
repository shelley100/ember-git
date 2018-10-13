import Route from '@ember/routing/route';

export default Route.extend({

  model: function () {
    const routes = [
                    {root: 'index', name: 'Home'},
                    {root: 'about', name: 'About'},
                    {root: 'contact', name: 'Contact'},

                  ];
                  return routes;
                },
  

});
