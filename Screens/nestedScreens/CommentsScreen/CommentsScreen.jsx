import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSelector } from "react-redux";
//icons,styles
import { styles } from "./commentsScreenStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//firebase
import { db } from "../../../firebase/config";
import { addDoc, collection, doc, query, onSnapshot } from "firebase/firestore";

const CommentsScreen = ({ route }) => {
  const { postId, picture } = route.params;
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { login } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllComments();
  }, []);

  const createPost = async () => {
    try {
      const postRef = doc(db, "posts", postId);
      await addDoc(collection(postRef, "comments"), {
        login,
        comment,
      });
      setIsShowKeyboard(false);
      Keyboard.dismiss();
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const getAllComments = async () => {
    try {
      const postRef = doc(db, "posts", postId);
      const q = query(collection(postRef, "comments"));
      await onSnapshot(q, (data) => {
        const comments = [];
        data.forEach((doc) => {
          comments.push(doc.data());
        });
        setAllComments(comments);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <SafeAreaView style={styles.container}>
            <Image source={picture} resizeMode="cover" style={styles.picture} />
            <FlatList
              data={allComments}
              renderItem={({ item }) => (
                <View style={styles.userComment}>
                  <Image
                    style={styles.userImage}
                    source={require("../../../assets/images/skrat.jpeg")}
                  />

                  <Text style={styles.commentText}>{item.comment}</Text>
                </View>
              )}
              keyExtractor={(item, indx) => indx.toString()}
            />
          </SafeAreaView>

          <View style={styles.inputContainer}>
            <TextInput
              style={{
                ...styles.input,
                ...Platform.select({
                  ios: {
                    marginBottom: isShowKeyboard ? 230 : 0,
                  },
                  android: {
                    marginBottom: isShowKeyboard ? 40 : 0,
                  },
                }),
              }}
              placeholder="Коментувати..."
              value={comment}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={setComment}></TextInput>
            <TouchableOpacity
              style={{
                ...styles.btnInput,
                ...Platform.select({
                  ios: {
                    top: isShowKeyboard ? -273 : -44,
                    // right: isShowKeyboard ? 8 : 8,
                  },
                  android: {
                    // marginBottom: isShowKeyboard ? 40 : 0,
                  },
                }),
              }}
              onPress={createPost}>
              <MaterialCommunityIcons name="arrow-up" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
