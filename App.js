import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Data = [
  {title: 'D', content: ['d2', 'd1', 'd3']},
  {title: 'A', content: ['a1', 'a3', 'a2']},
  {title: 'C', content: ['c1', 'c3', 'c2']},
  {title: 'B', content: ['b1', 'b2', 'b3']},
];

const App = () => {
  //const [toggle, setToggle] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {Data.sort().map((item, index) => {
        return (
          <TouchableOpacity
            style={{flexGrow: 1}}
            key={index}
            onPress={() =>
              setCurrentIndex(index === currentIndex ? null : index)
            }>
            <View style={styles.title}>
              <Text>{item.title}</Text>
              {index === currentIndex &&
                item.content
                  .sort()
                  .map((it, index) => <Item item={it} key={index} />)}
            </View>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

const Item = props => {
  const {item} = props;
  return (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
  },
  item: {
    backgroundColor: 'grey',
  },
});

export default App;
