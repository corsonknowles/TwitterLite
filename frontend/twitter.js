const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
window.UsersSearch = UsersSearch;
$(

  () => {
    let $el = $("button");
    $el.each((idx, el) => {
      return new FollowToggle($(el));
    });

    let inputField = $('#search-field');
    const userSearchField = new UsersSearch($(".users-search"));
  }

);
