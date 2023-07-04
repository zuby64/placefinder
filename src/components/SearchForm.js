import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults, setQuery } from '../redux/actions/searchAction';
import { View, TextInput, Button } from 'react-native';

const SearchForm = ({ query, setQuery, fetchSearchResults }) => {
  const handleSubmit = () => {
    fetchSearchResults(query);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a search query"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSubmit} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  query: state.search.query,
});

export default connect(mapStateToProps, { setQuery, fetchSearchResults })(SearchForm);
