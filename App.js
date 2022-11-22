import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';

export default function App() {
  const getMoviesData = async () => {
    const api_key = 'ae440b562b9d6bd3a103981d15544077';
    const api = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`

    const myRequest = await fetch(api, {
      method: 'GET'
    });

    const response = await myRequest.json();
    console.log(response);

    let tranformado = response.results.map((movie) => {
      return {
        original_title: movie.original_title
      }
    });

    console.log(tranformado);

  }

  getMoviesData();

  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
