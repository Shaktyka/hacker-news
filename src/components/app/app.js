import React from 'react';
import axios from 'axios';

import './app.css';

import Table from '../table/table.js';
import Button from '../button/button.js';
import Search from '../search/search.js';
import withLoading from '../hocs/withLoading.js';

import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP
}from '../../constants.js';

const ButtonWithLoading = withLoading(Button);

class App extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      searchKey: ``,
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false,
      sortKey: `NONE`,
    }
  }

  componentDidMount() {
    this._isMounted = true;

    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  needsToSearchTopStories = (searchTerm) => {
    return !this.state.results[searchTerm];
  };

  fetchSearchTopStories = (searchTerm, page = 0) => {
    this.setState({isLoading: true});

    axios.get(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then((result) => this._isMounted && this.setSearchTopStories(result.data))
      .catch((error) => this._isMounted && this.setState({error}));
  };

  setSearchTopStories = (result) => {
    const {hits, page} = result;
    const {searchKey, results} = this.state;

    const oldHits = results && results[searchKey]
      ? results[searchKey].hits
      : [];

    const updatedHits = [
      ...oldHits,
      ...hits
    ];

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      },
      isLoading: false,
    });
  };

  onSearchSubmit = (evt) => {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }

    evt.preventDefault();
  };

  onSort = (sortKey) => {
    this.setState({sortKey});
  };

  onDismiss = (id) => {
    const {searchKey, results} = this.state;
    const {hits, page} = results[searchKey];

    const isNotId = (item) => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      }
    });
  };

  onSearchChange = (evt) => {
    this.setState({
      searchTerm: evt.target.value
    });
  };

  render () {
    const {
      searchTerm,
      results,
      searchKey,
      error,
      isLoading,
      sortKey,
    } = this.state;

    const page = (
      results &&
      results[searchKey] &&
      results[searchKey].page
    ) || 0;

    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || [];

    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Поиск
          </Search>
        </div>
        {
          error
            ? <div className="interactions">
                <p>Что-то пошло не так. Наш специалист уже начал разбираться.</p>
              </div>
            : <Table
                list={list}
                onDismiss={this.onDismiss}
                sortKey={sortKey}
                onSort={this.onSort}
              />
        }
        <div className="interactions">
          <ButtonWithLoading
            isLoading={isLoading}
            onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
          >
            Больше историй
          </ButtonWithLoading>
        </div>
      </div>
    );
  };
};

export default App;
