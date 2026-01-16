import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const isPalindrome = () => {
    try {
      const str = value.trim();

      // Reverse string correctly
      let reverse = "";
      for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
      }

      if (str === "") {
        setResult("Please enter a value");
        return;
      }

      const palindrome =
        reverse === str ? "It is a Palindrome" : "Not a Palindrome";

      setResult(palindrome);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        keyboardType="numeric"
        value={value}
        placeholder="Enter number here"
      />

      <TouchableOpacity style={styles.button} onPress={isPalindrome}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>

      {result !== "" && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  result: {
    marginTop: 10,
    fontSize: 16,
  },
});
