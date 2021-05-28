import * as React from 'react';
import { Text,  StyleSheet, ScrollView } from 'react-native';


export default function TESTER() {

  return (
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.paragraph}>
          This is a ScrollView example HEADER.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
          This is a ScrollView example FOOTER.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
          This is a ScrollView example FOOTER.
        </Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50
  }
});