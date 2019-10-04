
// Instanciating InstantSearch.js with Algolia credentials
const search = instantsearch({
  appId: 'TN8603H0T3',
  indexName: 'zegetech.com',
  apiKey: '81daa33178cad0ab2dbe734196b5dccb'
});

// Adding searchbar and results widgets
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-searchbar',
    placeholder: 'Search into posts...',
    poweredBy: false, // This is required if you're on the free Community plan
    showReset: true,
    searchAsYouType: true,
    autofucus: true,

  })
);

search.addWidget(
  instantsearch.widgets.configure({
      hitsPerPage: 8,
      distinct: true,
      clickAnalytics: true,
      //enablePersonalization: true,  //not supported in community plan
   })
);
 //Search Hits
   search.addWidget(
      instantsearch.widgets.hits({
        container: '#search-hits',
        templates:{
          empty: "Oops, No results found",
        // item: '<li><a href="{{url}}"><b>{{{_highlightResult.title.value}}}</b> </a><br> {{slug}}</li>'
         item: '<a href="{{url}}"><b>{{{_highlightResult.title.value}}}</b> </a><br> {{slug}}</a>'
        }
      })
    );

// add pagination
    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination-container',
        maxPages: 20,
        scrollTo: false,
        showFirstLast: false,
      })
    );

// Starting the search
search.start();
