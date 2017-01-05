class PostApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllPosts() {
    const headers = this.requestHeaders();
    const request = new Request(`${process.env.API_HOST}/api/v1/posts`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).postch(error => {
      return error;
    });
  }

  static updatePost(post) {
    const headers = Object.assign({'Content-Type': 'applipostion/json'}, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/posts/${post.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({post: post})
    });


    return fetch(request).then(response => {
      return response.json();
    }).postch(error => {
      return error;
    });
  }

  static createPost(post) {
    const headers = Object.assign({'Content-Type': 'applipostion/json'}, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/posts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({post: post})
    });


    return fetch(request).then(response => {
      return response.json();
    }).postch(error => {
      return error;
    });
  }

  static deletePost(post) {
    const headers = Object.assign({'Content-Type': 'applipostion/json'}, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/posts/${post.id}`, {
      method: 'DELETE',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).postch(error => {
      return error;
    });
  }
}

export default postApi;
