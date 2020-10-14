<template>
  <div>
    <div id="likes-container">
      <img
        id="like"
        @click="likeComment(commentId)"
        v-if="isLiked == false"
        src="../assets/like.png"
        alt="Heart Icon"
      />
      <img
        id="unlike"
        @click="unlikeComment"
        v-else-if="isLiked == true"
        src="../assets/unlike.png"
        alt="Broken Heart Icon"
      />
      <span></span>
      <div>Likes: {{ commentLikesAmount }}</div>
      <span></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "comment-likes",
  data() {
    return {
      commentLikesNum: [],
      isLiked: false,
      commentLikesAmount: 0
    };
  },
  props: {
    commentId: Number
  },
  mounted: function() {
    this.getCommentLikes();
  },
  methods: {
    likeComment: function(commentId) {
      (this.isLiked = true),
        axios
          .request({
            url: "https://tweeterest.ml/api/comment-likes",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
            },
            data: {
              loginToken: cookies.get("loginToken"),
              commentId: commentId
            }
          })
          .then(response => {
            console.log(response);
            this.commentLikesAmount++;
          })
          .catch(error => {
            console.log(error);
          });
    },
    getCommentLikes: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          params: {
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          this.commentLikesNum = response.data;
          this.commentLikesAmount = this.commentLikesNum.length;

          let currentUser = cookies.get("userId");
          for (let i = 0; i < this.commentLikesNum.length; i++) {
            if (currentUser == this.commentLikesNum[i].userId) {
              this.isLiked = true;
              return;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    unlikeComment: function() {
      (this.isLiked = false),
        axios
          .request({
            url: "https://tweeterest.ml/api/comment-likes",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
            },
            data: {
              loginToken: cookies.get("loginToken"),
              commentId: this.commentId
            }
          })
          .then(response => {
            console.log(response);
            this.commentLikesAmount--;
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
};
</script>

<style lang="scss" scoped>
//MOBILE
#likes-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  color: #783030;
}
#like,
#unlike {
  width: 30%;
  margin: 4vw;
  cursor: pointer;
}

// TABLET
@media only screen and (min-width: 670px) {
  #like,
  #unlike {
    width: 20%;
    margin: 4vw;
  }
  #likes-container {
    grid-template-columns: repeat(6, 1fr);
  }
}

//DESKTOP
@media only screen and (min-width: 1020px) {
  #like,
  #unlike {
    width: 20%;
    margin: 4vw;
  }
  #likes-container {
    grid-template-columns: repeat(10, 1fr);
  }
}
</style>
