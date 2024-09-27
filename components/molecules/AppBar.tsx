import React from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "@/components/atoms/Icon";
import { Colors } from "@/constants/Colors";

const AppBar = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftView}>
        <TouchableOpacity style={styles.menuContainer}>
          <Icon name="menu" size={22} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.brandText}>LAHELU</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightView}>
        <TouchableOpacity>
          <Icon name="search" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 16,
    paddingHorizontal: 14,
    paddingBottom: 12,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.gray,
  },
  leftView: { flex: 1, flexDirection: "row" },
  menuContainer: { marginRight: 10 },
  brandText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.tint,
  },
  rightView: { flex: 1, alignItems: "flex-end" },
});

export default AppBar;
