const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor(el) {
    this.$el = el;
    this.input = $("#search-field");
    console.log(el.children("input"));
    this.ul = el.children("ul");
    this.p = $("<p>");
    el.on("input",this.handleInput.bind(this));
  }

  handleInput(event)  {
    event.preventDefault();
    console.log(this);
    APIUtil.searchUsers(this.input.val(), (users) => {
      console.log(users);
      this.renderResults(users);
    });
  }

  renderResults (users) {
    // console.log(users);
    // this.$ul.empty();

    // users.forEach ( (user) => {
    //   let $li = $("<li></li>");
    //   let $a = $("<a></a>");
    //
    //   $a.text = user.username;
    //   $a.attr("href", `/user/${user.id}`);
    //   $li.append($a);
    //   this.ul.append($li);
    // });

    // this.$ul.empty();

    for (let i = 0; i < users.length; i++) {
      let user = users[i];

      let $a = $("<a></a>");
      $a.text(user.username);
      $a.attr("href", `/users/${user.id}`);

      // let $followToggle = $("<button></button>");
      // new FollowToggle($followToggle, {
      //   userId: user.id,
      //   followState: user.followed ? "followed" : "unfollowed"
      // });

      let $li = $("<li></li>");
      $li.append($a);
      // $li.append($followToggle);

      this.$ul.append($li);
  }


}


module.exports = UsersSearch;
