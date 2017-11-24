/* global gapi */
import React from 'react';

import { API_KEY } from '../../config';

const withYoutubeSearch = Component => (
  class extends React.Component {
    state = {
      gapiReady: false,
      input: '',
      list: [],
      isLoading: false
    }
  
    componentDidMount() {
      this.loadYoutubeApi();
    }

    loadYoutubeApi = () => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/client.js";
  
      script.onload = () => {
        gapi.load('client', () => {
          gapi.client.setApiKey(API_KEY);
          gapi.client.load('youtube', 'v3', () => {
            this.setState({ gapiReady: true });
          });
        });
      };
  
      document.body.appendChild(script);
    }

    handleChangeInput = event =>
      this.setState({ input: event.target.value })

    handleSearch = () => {
      const request = gapi.client.youtube.search.list({
        part: 'snippet',
        type: "video",
        q: encodeURIComponent(this.state.input).replace(/%20/g, "+"),
        maxResults: 9,
        order: "viewCount",
      })

      this.setState({ isLoading: true });

      request.execute(response => {
        const list = response.items.map(({ id }) => id.videoId);

        this.setState({
          list,
          isLoading: false,
        })
      })
    }

    render() {
      return (
        <Component
          input={this.state.input}
          handleChangeInput={this.handleChangeInput}
          handleSearch={this.handleSearch}
          gapiReady={this.state.gapiReady}
          list={this.state.list}
          isLoading={this.state.isLoading}
        />
      )
    }
  }
);

export default withYoutubeSearch;
