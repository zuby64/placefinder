import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const SearchResult = ({ results, loading }) => {
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Search Results:</Text>
      {results.map((result) => (
        <Text key={result.id}>{result.name}</Text>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  results: state.search.results,
  loading: state.search.loading,
});

export default connect(mapStateToProps)(SearchResult);
