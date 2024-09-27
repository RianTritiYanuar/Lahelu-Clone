/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs } from "expo-router";
import React from "react";
import {
  TouchableOpacity,
  Alert,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import Icon from "@/components/atoms/Icon";
import Avatar from "@/components/atoms/Avatar";
import { Colors } from "@/constants/Colors";

const isIOS = Platform.OS === "ios";

const tabs: any = [
  {
    name: "index",
    routeIndex: 0,
    icon: "home-outline",
  },
  {
    name: "topic",
    routeIndex: 2,
    icon: "people-outline",
  },
  {
    name: "meme",
    routeIndex: 1,
    icon: "add-circle-outline",
  },
  {
    name: "notification",
    routeIndex: 3,
    icon: "notifications-outline",
  },
];

export default function TabLayout() {
  /**
   * @name onPressAccountTab
   * @returns {React.ReactNode}
   *
   */
  const onPressAccountTab = () => {
    return Alert.alert("Account Tab", "It will open the Account Drawer!");
  };

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props: any) => (
        <View
          style={[
            styles.tabBarContainer,
            { height: isIOS ? 70 : 50, paddingBottom: isIOS ? 20 : 0 },
          ]}
        >
          {tabs.map((tab: any) => {
            const isFocused = props.state.index === tab.routeIndex;
            const color = isFocused ? Colors.tint : "gray";

            return (
              <TouchableOpacity
                key={tab.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                onPress={() => props.navigation.navigate(tab.name)}
                style={styles.tabIconContainer}
              >
                <Icon name={tab.icon} color={color} size={22} />
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            onPress={onPressAccountTab}
            style={styles.accountTabIconContainer}
          >
            <Avatar imageURL="https://img.uncyc.org/id/thumb/a/a4/MadDog.jpg/350px-MadDog.jpg" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: Colors.background,
    borderTopWidth: 0.2,
  },
  tabIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  accountTabIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
