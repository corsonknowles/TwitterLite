const APIUtil = {
  followUser: (id) => {
    return $.ajax({
      dataType: 'json',
      type: 'POST',
      url: `/users/${id}/follow`,
    });
  },

  unfollowUser: (id) => {
    return $.ajax({
      dataType: 'json',
      type: 'DELETE',
      url: `/users/${id}/follow`,
    });
  },

  searchUsers: (queryVal, success) => {
    console.log(queryVal);
    return $.ajax({
      dataType: 'json',
      type: 'GET',
      url: `/users/search`,
      data: { query: queryVal }
    }).then(success);
  }
};

module.exports = APIUtil;
