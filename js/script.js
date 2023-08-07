const global = {
    currentPage: window.location.pathname,
    search: {
      term: '',
      type: '',
      page: 1,
      totalPages: 1,
      totalResults: 0,
    },
    api: {
      // Register your key at https://www.themoviedb.org/settings/api and enter here
      // Only use this for development or very small projects. You should store your key and make requests from a server
      apiKey: '',
      apiUrl: 'https://api.themoviedb.org/3/',
    },
  };
  


  
  // Highlight active link
  function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      if (link.getAttribute('href') === global.currentPage) {
        link.classList.add('active');
      }
    });
  }
  

  
  // Init App
  function init() {
    switch (global.currentPage) {
      case '/':
      case '/index.html':
        displaySlider();
        displayPopularMovies();
        break;
      case '/shows.html':
        displayPopularShows();
        break;
      case '/movie-details.html':
        displayMovieDetails();
        break;
      case '/tv-details.html':
        displayShowDetails();
        break;
      case '/search.html':
        search();
        break;
    }
  
    highlightActiveLink();
  }
  
  document.addEventListener('DOMContentLoaded', init);
 