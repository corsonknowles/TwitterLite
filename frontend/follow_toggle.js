const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor ($el) {
    this.$el = $el;
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render($el);
    $el.on("click", this.handleClick.bind(this));
    // console.log(this.followState);
    this.changeFollowState = this.changeFollowState.bind(this);
  }

  render (el) {
    console.log(this.followState);
    console.log(el);
    if (this.followState === "unfollowed") {
      el.text("Follow!");
    } else if (this.followState === "followed") {
      el.text("Unfollow!");
    }
  }

  changeFollowState () {
    this.followState = (this.followState === "followed" ?
     "unfollowed" : "followed");
     
    this.$el.prop("disabled", false);
    this.render(this.$el);
  }

  handleClick (event) {
    console.log("I am in handle click");
    console.log(`${this.userId}`);

    event.preventDefault();
    this.$el.prop("disabled", true);

    let changeFollowing =
    (this.followState === "followed" ?
     APIUtil.unfollowUser : APIUtil.followUser);
    changeFollowing(this.userId).then(this.changeFollowState);
  }

}

module.exports = FollowToggle;
